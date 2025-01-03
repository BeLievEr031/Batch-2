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
await page.keyboard.type("samsung mobile", { delay: 100 });
await page.keyboard.press("Enter");

let ct = 1;
let hasPage = true;

while (hasPage) {
    console.log(`Page: ${ct}`);

    // Wait for the page to load and check for the "Next" button
    await page.waitForSelector(".WSL9JP a._9QVEpD", { visible: true });

    // Re-fetch the "Next" button after navigation
    let nextBtnArr = await page.$$(".WSL9JP a._9QVEpD");
    let nextBtn;

    // Ensure there's at least one button
    if (nextBtnArr.length === 1) {
        nextBtn = nextBtnArr[0];
    } else if (nextBtnArr.length > 1) {
        nextBtn = nextBtnArr[1];
    } else {
        console.log(4545445454);
    }

    if (!nextBtn) {
        console.log("Reached the last page.");
        hasPage = false;
        break;
    }

    console.log("Clicking next page...");

    await page.waitForFunction(
        (btn) => btn && !btn.disabled && !btn.classList.contains('disabled'),
        { timeout: 5000 },
        nextBtn
    );


    await Promise.all([
        nextBtn.click(),
        page.waitForNavigation({ waitUntil: 'domcontentloaded' })
    ]);

    console.log("Page", ct, "clicked successfully.");
    ct++;
}

// Close the browser
// await browser.close();


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

const workbook = XLSX.utils.book_new();
const worksheet = XLSX.utils.json_to_sheet(arr);
XLSX.utils.book_append_sheet(workbook, worksheet, "mobile details");
XLSX.writeFile(workbook, "mobile-scrapped-data.xlsx")