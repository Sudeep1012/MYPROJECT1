exports.AccountAdminPage = class AccountAdminPage{


    constructor(page,expect) {

        this.page=page;
        this.expect=expect;
        this.accountslink=page.getByRole('link', { name: 'Accounts' });
        this.adminLink=page.getByRole('link', { name: 'Admin' });
        this.adminHeaded=page.getByText("Accounts / Admin");
        this.addAdminButton=page.getByRole('button', { name: 'Add new' });
        this.addAdminBackButton=page.getByRole('button', { name: 'Back' });
        this.userNameInput=page.locator("input[name='username']");
        this.passwordInput=page.locator("input[name='password']");
        this.firstNameInput=page.locator("input[name='firstname']");
        this.middleNameInput=page.locator("input[name='middlename']");
        this.lastNameInput=page.locator("input[name='lastname']"); 
        this.addAdminSubmitButton=page.getByRole('button', { name: 'Submit' });
        this.tableRows=page.locator(".sorting_1");
        this.editButtons=page.getByRole('link', { name: 'Edit' });
        this.deleteButtons=page.locator("a[title='Delete']");
        this.adminEditBackButton=page.getByRole('button', { name: 'Back' });
        this.adminSearchInput=page.locator("input[type='search']");
    }


    async accountAdminSmokeTest(){
        await this.expect(this.accountslink).toBeVisible();
        await this.expect(this.accountslink).toBeEnabled();
        await this.accountslink.click();
        await this.expect(this.adminLink).toBeVisible();
        await this.adminLink.click();
    }

    async adminSmokeTest(){
        await this.expect(this.adminHeaded).toBeVisible();
        await this.expect(this.adminHeaded).toHaveText("Accounts / Admin");
        await this.expect(this.addAdminButton).toBeVisible();
        await this.expect(this.addAdminButton).toBeEnabled();
        await this.expect(this.addAdminButton).toHaveText(" Add new");
        await this.addAdminButton.click();
        await this.expect(this.addAdminBackButton).toBeVisible();
        await this.expect(this.addAdminBackButton).toBeEnabled();
        await this.expect(this.addAdminBackButton).toHaveText(" Back");
        await this.addAdminBackButton.click();
    }

    async adminAddNewFunctionalityTest(){

        await this.accountslink.click();
        await this.adminLink.click();
        await this.addAdminButton.click();
        /**For User Name Assertions*/
        await this.expect(this.userNameInput).toBeVisible();
        await this.expect(this.userNameInput).toBeEnabled();
        await this.expect(this.userNameInput).toHaveAttribute("type", "text");
        await this.expect(this.userNameInput).toHaveAttribute("required", "required");
        await this.expect(this.userNameInput).toBeEmpty();
        /**For Password Assertions*/
        await this.expect(this.passwordInput).toBeVisible();
        await this.expect(this.passwordInput).toBeEnabled();
        await this.expect(this.passwordInput).toHaveAttribute("type", "password");  
        await this.expect(this.passwordInput).toHaveAttribute("required", "required");
                await this.expect(this.passwordInput).toHaveAttribute("maxlength", "12");
        await this.expect(this.passwordInput).toBeEmpty();
        /**For First Name Assertions */
        await this.expect(this.firstNameInput).toBeVisible();   
        await this.expect(this.firstNameInput).toBeEnabled();
        await this.expect(this.firstNameInput).toHaveAttribute("type", "text");
        await this.expect(this.firstNameInput).toHaveAttribute("required", "required");
        await this.expect(this.firstNameInput).toBeEmpty();  
        /**For Middle Name Assertions*/
         await this.expect(this.middleNameInput).toBeVisible();   
        await this.expect(this.middleNameInput).toBeEnabled();
        await this.expect(this.middleNameInput).toHaveAttribute("type", "text");
        await this.expect(this.middleNameInput).toHaveAttribute("placeholder", "(Optional)");
        await this.expect(this.middleNameInput).toBeEmpty();
        /**For Last Name  Assertions*/
        await this.expect(this.lastNameInput).toBeVisible();   
        await this.expect(this.lastNameInput).toBeEnabled();
        await this.expect(this.lastNameInput).toHaveAttribute("type", "text");
        await this.expect(this.lastNameInput).toHaveAttribute("required", "required");
        await this.expect(this.lastNameInput).toBeEmpty();
        await this.userNameInput.fill("testUser");
        await this.passwordInput.fill("testPassword");
        await this.firstNameInput.fill("Test");
        await this.middleNameInput.fill("Middle");
        await this.lastNameInput.fill("Last");
        await this.expect(this.addAdminSubmitButton).toBeVisible();
        await this.expect(this.addAdminSubmitButton).toBeEnabled();
        await this.expect(this.addAdminSubmitButton).toHaveText(" Submit");
        await this.addAdminSubmitButton.click();
    }
async adminTableTest(){

     await this.accountslink.click();
        await this.adminLink.click();
        await this.adminSearchInput.fill("testUser");
        await this.adminSearchInput.press('Enter');
        await this.adminSearchInput.fill("");
        await  this.tableRows.first().waitFor();
        const rowCount = await this.tableRows.count();

        for (let i = 0; i < rowCount; i++) {
            const rowText = await this.tableRows.nth(i).textContent();
                    await this.editButtons.nth(i).waitFor();
                    await this.expect(this.editButtons.first()).toBeVisible();
                 await this.expect(this.editButtons.first()).toBeEnabled();
                    await this.editButtons.nth(i).click();
                    await this.adminEditBackButton.click();
        }

        
    }

    
}