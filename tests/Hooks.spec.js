import {test,chromium} from '@playwright/test';
import {HomePage} from '../ePageModules/HomePage.js';

test.beforeAll("Hooks Test", async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    new HomePage(page).navigateToHomePage("http://49.249.29.4:8081/TestServer/Build/Advance_Library_System/");
})