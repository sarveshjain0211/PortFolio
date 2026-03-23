import express from 'express';
import puppeteer from 'puppeteer';
import cors from 'cors';

const app = express();
const PORT = 3000;
const profileUrl = 'https://takeuforward.org/profile/__sarvesh__0211';

// Enable CORS so the React app running on port 5173 can access this server
app.use(cors());

let cachedProfileData = null;
let cacheTime = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

app.get('/api/profile', async (req, res) => {
  try {
    if (cachedProfileData && Date.now() - cacheTime < CACHE_DURATION) {
      console.log('✓ Returning cached profile data');
      return res.json(cachedProfileData);
    }

    console.log('🔄 Fetching fresh profile data...');
    const profileData = await fetchProfileDataWithBrowser();
    
    cachedProfileData = profileData;
    cacheTime = Date.now();
    
    res.json(profileData);
  } catch (error) {
    console.error('Error fetching profile:', error);
    res.status(500).json({ error: error.message });
  }
});

async function fetchProfileDataWithBrowser() {
  let browser;
  try {
    console.log('🚀 Launching headless browser...');
    
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

    console.log(`📡 Loading profile: ${profileUrl}`);
    await page.goto(profileUrl, { waitUntil: 'networkidle2', timeout: 30000 });

    console.log('⏳ Waiting for dynamic content...');
    await Promise.race([
      page.waitForSelector('[class*="solved"], [class*="problems"]', { timeout: 5000 }).catch(() => null),
      new Promise(resolve => setTimeout(resolve, 3000))
    ]);

    const profileData = await page.evaluate(() => {
      const data = {
        progress: { solved: 0, easy: 0, medium: 0, hard: 0 }
      };

      const allText = document.body.innerText;
      
      const easyMatch = allText.match(/Easy[\s\n]*(\d+)/i);
      if (easyMatch) data.progress.easy = parseInt(easyMatch[1]);

      const mediumMatch = allText.match(/Medium[\s\n]*(\d+)/i);
      if (mediumMatch) data.progress.medium = parseInt(mediumMatch[1]);

      const hardMatch = allText.match(/Hard[\s\n]*(\d+)/i);
      if (hardMatch) data.progress.hard = parseInt(hardMatch[1]);

      data.progress.solved = data.progress.easy + data.progress.medium + data.progress.hard;
      return data;
    });

    await browser.close();
    return { progress: profileData.progress };
  } catch (error) {
    if (browser) await browser.close();
    throw error;
  }
}

app.listen(PORT, () => {
  console.log(`🚀 TUF+ Proxy Server running at: http://localhost:${PORT}`);
});
