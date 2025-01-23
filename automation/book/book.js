import puppeteer from "puppeteer";
import XLSX from 'xlsx';

let browser = await puppeteer.launch(
    {
        executablepath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
        headless: false,
        defaultViewport: null,
        args: ['--start-maximized'],
    }
);
let page = await browser.newPage();

await page.goto("https://books.toscrape.com//");

let arr = []
for (let i = 1; i < 50; i++) {
    await page.waitForSelector(".product_pod")
    const bookDivArr = await page.$$(".product_pod")

    for (let i = 0; i < bookDivArr.length; i++) {
        const img = await bookDivArr[i].$("img");
        let imgsrchandle = await img.getProperty("src")
        let imgsrc = await imgsrchandle.jsonValue();

        const booknamediv = await bookDivArr[i].$("h3")
        const bookname = await page.evaluate(el => el.innerText, booknamediv)

        const bookpricediv = await bookDivArr[i].$(".product_price .price_color")
        const bookprice = await page.evaluate(el => el.innerText, bookpricediv)

        const bookavailabilitydiv = await bookDivArr[i].$(".product_price .instock.availability")
        const bookavailability = await page.evaluate(el => el.innerText, bookavailabilitydiv)

        console.log(imgsrc);
        console.log(bookname);
        console.log(bookprice);
        console.log(bookavailability);
        console.log("---------------------------------------------");
        let obj = {
            "Imageurl": imgsrc,
            "Bookname": bookname,
            "Bookprice": bookprice,
            "Stock": bookavailability,
        }
        arr.push(obj);

    }

    const nextButton = await page.$(".next a");
    if (nextButton) {
        await nextButton.click();
        await page.waitForNavigation();
    } else {
        hasNextPage = false;
    }
}



await page.setViewport({ width: 1000, height: 1024 })

const workbook = XLSX.utils.book_new();
const worksheet = XLSX.utils.json_to_sheet(arr);
XLSX.utils.book_append_sheet(workbook, worksheet, "Book-details");

// XLSX.utils.sheet_add_aoa(worksheet, [["Name", "Birthday"]], { origin: "A1" });
XLSX.writeFile(workbook, "Book-scrapped-data.xlsx");