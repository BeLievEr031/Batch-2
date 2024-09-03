import puppeteer from "puppeteer";
let browser = await puppeteer.launch(
    {
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        headless: false
    }
);
let page = await browser.newPage();

await page.goto("https://www.flipkart.com/");

await page.waitForSelector("._2SmNnR .Pke_EE")
let searchBox = await page.$("._2SmNnR .Pke_EE")
console.log(searchBox);

await searchBox.click();
await page.keyboard.type(" samsung mobile", { delay: 250 })
await page.keyboard.press("Enter");


await page.waitForSelector("._75nlfW")
const mobileDivArr = await page.$$("._75nlfW")

for (let i = 0; i < mobileDivArr.length; i++) {
    await page.waitForSelector("._4WELSP img")
    const img = await mobileDivArr[i].$("._4WELSP img");
    let imgSrcHandle = await img.getProperty("src")
    // Extract the src value from the handle
    let imgSrc = await imgSrcHandle.jsonValue();
    console.log(imgSrc);

}

await page.setViewport({ width: 1000, height: 1024 });