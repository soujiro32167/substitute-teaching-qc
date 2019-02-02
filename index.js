const puppeteer = require('puppeteer');
const fs = require('fs').promises;

const CREDS = {
    username: process.env.USER,
    password: process.env.PASSWORD
};

const USERNAME_SELECTOR = '#userId';
const PASSWORD_SELECTOR = '#userPin';
const BUTTON_SELECTOR = '#submitBtn';

async function run() {
    //await fs.mkdir('screenshots');

    const browser = await puppeteer.launch({
        headless: false
    });
    const page = await browser.newPage();

    await page.goto('https://csmb.eschoolsolutions.com/logOnAction.do');
    //await page.screenshot({ path: 'screenshots/github.png' });
    // user: #userId
    // password: #userPin
    // button: #submitBtn

    await page.click(USERNAME_SELECTOR);
    await page.keyboard.type(CREDS.username);

    await page.click(PASSWORD_SELECTOR);
    await page.keyboard.type(CREDS.password);

    await page.click(BUTTON_SELECTOR);

    await page.waitForNavigation();

    await page.goto('https://csmb.eschoolsolutions.com/substituteCalendarAction.do')

    //browser.close();
}



run();