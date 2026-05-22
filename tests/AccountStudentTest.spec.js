import {test, expect} from "@playwright/test";
import {AccountStudentPage} from "../ePageModules/AccountStudentPage";
import {HomePage} from "../ePageModules/HomePage";
test('Account Student Smoke Test', async ({ page }) => {
    const homePage = new HomePage(page,expect);
    const accountStudentPage = new AccountStudentPage(page,expect);
    await homePage.navigateToHomePage("http://49.249.29.4:8081/TestServer/Build/Advance_Library_System/");
await homePage.homeLogInTest("admin", "admin");
    await accountStudentPage.accountStudentSmokeTest();
    await accountStudentPage.addStudentFunctionalityTest();
});