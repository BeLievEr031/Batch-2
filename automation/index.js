import puppeteer from 'puppeteer-extra';

const { DEFAULT_INTERCEPT_RESOLUTION_PRIORITY } = puppeteer
import AdblockerPlugin from 'puppeteer-extra-plugin-adblocker';
puppeteer.use(
    AdblockerPlugin({
        interceptResolutionPriority: DEFAULT_INTERCEPT_RESOLUTION_PRIORITY
    })
)

// Launch the browser and open a new blank page
const browser = await puppeteer.launch(
    {
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
        headless: false
    }
);
const page = await browser.newPage();

// Navigate the page to a URL.
await page.goto('https://www.youtube.com/');

// Set screen size.
await page.setViewport({ width: 1080, height: 1024 });
await page.waitForSelector("#search")
let searchBox = await page.locator("#search-input#search-input")
searchBox.click();
await page.keyboard.type(" kaun disha mei leke", { delay: 100 })
await page.keyboard.press("Enter")

await page.waitForSelector('a#video-title')

let song = await page.$('a#video-title')

await song.click();






