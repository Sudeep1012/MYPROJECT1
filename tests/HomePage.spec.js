import {test, expect} from '@playwright/test';

import {HomePage} from '../ePageModules/HomePage.js';
import {AccountAdminPage} from '../ePageModules/AccountAdminPage.spec.js';
test("Home Page Smoke Test", async ({page}) => { 
    const homePage = new HomePage(page,expect);
    const accountAdminpage = new AccountAdminPage(page,expect);
     await homePage.navigateToHomePage("http://49.249.29.4:8081/TestServer/Build/Advance_Library_System/");
     await homePage.homeLogInTest("admin", "admin");
    //  await homePage.adminLinksSmokeTest();
    //  await accountAdminpage.accountAdminSmokeTest();
    //  await accountAdminpage.adminSmokeTest();    
    // await accountAdminpage.adminAddNewFunctionalityTest();
      await accountAdminpage.adminTableTest();
      console.log("okk");
      
   });

   