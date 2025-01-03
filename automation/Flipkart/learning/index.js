import puppeteer from 'puppeteer';

// Launch the browser and open a new blank page
const browser = await puppeteer.launch({
    executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    headless: false,
    defaultViewport: null, // Disable the default viewport setting
    args: ['--start-maximized'],
});


const page = await browser.newPage();

await page.goto("https://www.flipkart.com");

// Wait for the search box and type "samsung mobile"
await page.waitForSelector('input[title="Search for Products, Brands and More"]');
let searchBox = await page.$('input[title="Search for Products, Brands and More"]');

await searchBox.click();
await page.keyboard.type("samsung mobile", { delay: 250 });
await page.keyboard.press("Enter");

let ct = 1;
let hasPage = true;

// .WSL9JP a
await page.waitForSelector(".WSL9JP a");

// Re-fetch the "Next" button after navigation
const pagination = await page.$$(".WSL9JP a");

let arr = [];

for (let i = 0; i < pagination.length; i++) {

    // const pageNum = await page.evaluate(el => el.innerText, pagination[i])
    // console.log(pageNum);

    const paginationData = await pagination[i].getProperty("href");
    const url = await paginationData.jsonValue();
    await scrapePage(page, arr);
    await page.goto(url);
}

// console.log(arr);

async function scrapePage(page, arr) {
    await page.waitForSelector("._75nlfW")
    const mobileDivArr = await page.$$("._75nlfW")
    for (let i = 0; i < mobileDivArr.length; i++) {
        const img = await mobileDivArr[i].$(".DByuf4")
        const imgsrcHandler = await img.getProperty("src");
        const imgsrc = await imgsrcHandler.jsonValue();

        const mobileNameDiv = await mobileDivArr[i].$(".KzDlHZ")
        const mobileName = await page.evaluate(el => el.innerText, mobileNameDiv)
        // console.log(imgsrc);
        const priceDiv = await mobileDivArr[i].$(".Nx9bqj._4b5DiR")
        const mobileprice = await page.evaluate(el => el.innerText, priceDiv)
        // console.log(mobileprice);
        const ul = await mobileDivArr[i].$(".G4BRas")

        const lilist = await ul.$$("li")
        const ram = await page.evaluate(el => el.innerText, lilist[0])
        const display = await page.evaluate(el => el.innerText, lilist[1])
        const camera = await page.evaluate(el => el.innerText, lilist[2])
        const battery = await page.evaluate(el => el.innerText, lilist[3])
        const processor = await page.evaluate(el => el.innerText, lilist[4])
        let obj = {
            "image url": imgsrc,
            "mobile name": mobileName,
            "price": mobileprice,
            "Ram": ram,
            "Display": display,
            "camera": camera,
            "battery": battery,
            "processor": processor
        }

        arr.push(obj);
    }
}





// Close the browser
// await browser.close();
