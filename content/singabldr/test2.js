const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err));

  await page.goto('http://127.0.0.1:8081/singabldr.html?mode=human');
  await new Promise(r => setTimeout(r, 1000));
  
  const textHuman = await page.$eval('#quick-play-mode-btn', el => el.innerText);
  console.log("mode=human text:", textHuman);
  const loginHuman = await page.$eval('#nav-login-btn', el => el.style.display);
  console.log("mode=human login display:", loginHuman);

  await page.goto('http://127.0.0.1:8081/singabldr.html?mode=ai');
  await new Promise(r => setTimeout(r, 1000));
  const textAI = await page.$eval('#quick-play-mode-btn', el => el.innerText);
  console.log("mode=ai text:", textAI);
  const loginAI = await page.$eval('#nav-login-btn', el => el.style.display);
  console.log("mode=ai login display:", loginAI);

  await browser.close();
})();
