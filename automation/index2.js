import puppeteer from "puppeteer";
let browser = await puppeteer.launch(
    {
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        headless: false
    }
);
let page = await browser.newPage();
let page1 = await browser.newPage();
let page2 = await browser.newPage();
await page.goto("https://www.youtube.com/");
await page1.goto("https://www.wikipedia.com/");
await page2.goto("https://developer.chrome.com/");

await page.setViewport({ width: 1000, height: 1024 });