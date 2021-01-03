const puppeteer = require('puppeteer');

(async () => 
{
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  //await page.goto('https://example.com');
  //await page.screenshot({path: 'c:\\WS\\demo\\example.png'});

  await page.goto('https://news.ycombinator.com', {waitUntil: 'networkidle2'});
  await page.pdf({path: 'c:\\WS\\demo\\hn.pdf', format: 'A4'});
  await browser.close();
})();