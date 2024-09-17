import puppeteer from 'puppeteer';
import XLSX from 'xlsx';
// launch the browser and open a new blank page
const browser = await puppeteer.launch(
    {
        executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
        headless: false
    }
);

const page = await browser.newPage()

await page.goto("https://www.flipkart.com")

await page.waitForSelector('input[title="Search for Products, Brands and More"]')
let searchBox = await page.$('input[title="Search for Products, Brands and More"]')

await searchBox.click();

await page.keyboard.type("samsung mobile", { delay: 250 })
await page.keyboard.press("Enter")
await page.waitForSelector("._75nlfW")
const mobileDivArr = await page.$$("._75nlfW")

let arr = [];
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
    // console.log(ram);
    // console.log(display);
    // console.log(camera);
    // console.log(battery);
    // console.log(processor);

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

// XLSX.utils.sheet_add_aoa(worksheet, [["Name", "Birthday"]], { origin: "A1" });

XLSX.writeFile(workbook, "mobile-scrapped-data.xlsx")