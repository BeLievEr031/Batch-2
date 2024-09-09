import puppeteer from 'puppeteer';

// Launch the browser and open a new blank page
const browser = await puppeteer.launch(
    {
        executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
        headless: false
    }
);

const page = await browser.newPage()

await page.goto("https://www.flipkart.com")

await page.waitForSelector('input[title="Search for Products, Brands and More"]')
let searchBox = await page.$('input[title="Search for Products, Brands and More"]');

await searchBox.click();

await page.keyboard.type(" samsung mobile", { delay: 250 })
await page.keyboard.press("Enter")

await page.waitForSelector("._75nlfW")
const mobileDivArr = await page.$$("._75nlfW")


for (let i = 0; i < mobileDivArr.length; i++) {
    const img = await mobileDivArr[i].$(".DByuf4");
    const imgSrcHandler = await img.getProperty("src");
    const imgSrc = await imgSrcHandler.jsonValue();

    const mobileNameDiv = await mobileDivArr[i].$(".KzDlHZ");
    const mobileName = await page.evaluate(el => el.innerText, mobileNameDiv)
    // console.log(imgSrc);
    const priceDiv = await mobileDivArr[i].$(".Nx9bqj._4b5DiR");
    const mobilePrice = await page.evaluate(el => el.innerText, priceDiv)
    // console.log(mobilePrice);

    const ul = await mobileDivArr[i].$(".G4BRas")

    const liList = await ul.$$("li")
    const ram = await page.evaluate(el => el.innerText, liList[0])
    const display = await page.evaluate(el => el.innerText, liList[1])
    const camera = await page.evaluate(el => el.innerText, liList[2])
    const battery = await page.evaluate(el => el.innerText, liList[3])
    const processor = await page.evaluate(el => el.innerText, liList[4])
    console.log(ram);
    console.log(display);
    console.log(camera);
    console.log(battery);
    console.log(processor);
    console.log("-------------------------------------");




}
