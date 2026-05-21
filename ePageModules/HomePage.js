exports.HomePage = class HomePage {

    constructor(page,expect) {
        this.page = page;
        this.expect = expect;
        this.userNameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login');
        this.adminHeader=page.getByText("Administrator");
        this.adminLinks = [page.getByRole('link', { name: 'Home' }),
                                 page.getByRole('link', { name: 'Accounts' }),
                                page.getByRole('link', { name: 'Books' }),
                                page.getByRole('link', { name: 'Transaction' }),
                                page.getByRole('link', { name: ' Settings' })
                              // page.getByRole('link', { name: 'Logout' })
                            ];
    }

   async navigateToHomePage(url) {
       await this.page.goto(url);
   }
  async homeLogInTest(userName, password) {
    await this.expect(this.userNameInput).toBeVisible();
    await this.userNameInput.fill(userName);
    await this.expect(this.passwordInput).toBeVisible();
    await this.passwordInput.fill(password);
    await this.expect(this.loginButton).toHaveAttribute("id", "login");
    await this.expect(this.loginButton).toHaveText("Login");
    await this.loginButton.click();
  //  await this.expect(this.page).toHaveURL("http://49.249.29.4:8081/TestServer/Build/Advance_Library_System/home.php");
   }
async adminLinksSmokeTest() {
    await this.expect(this.adminHeader).toBeVisible();    
    await this.expect(this.adminHeader).toHaveText("Administrator");
    for (const link of this.adminLinks) {
        await this.expect(link).toBeVisible();
        await this.expect(link).toBeEnabled();
        await link.click();
        console.log(link);
        
    }
}

}