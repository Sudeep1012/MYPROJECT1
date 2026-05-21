exports.AccountStudentPage = class AccountStudentPage {
    constructor(page,expect) {
        this.page = page;
        this.expect = expect;
        this.accountslink=page.getByRole('link', { name: 'Accounts' });
        this.studentLink=page.getByRole('link', { name: 'Student' });
        this.addStudentButton=page.locator("#add_student");
        this.formDiv=page.locator(".form-group");
        this.addStudentForm=[page.locator("//input[@name='student_no']"),
                                          page.locator("//input[@name='firstname']"),
                                          page.locator("//input[@name='middlename']"),
                                          page.locator("//input[@name='lastname']"),
                                          page.locator("//input[@name='course']"),
                                          page.locator("//input[@name='section']")];
    this.addStudentSubmitButton=page.getByRole('button', { name: 'Submit' });
}


async accountStudentSmokeTest(){
    await this.accountslink.click();
    await this.studentLink.click();    
    await this.expect(this.addStudentButton).toBeVisible(); 
    await this.expect(this.addStudentButton).toBeEnabled();
    await this.addStudentButton.click();

//     await this.formDiv.first().waitFor();
//     const formCount = await this.formDiv.count();

//     for (let i = 0; i < formCount; i++) {
//         const formText = await this.formDiv.nth(i).textContent();
//         await this.formDiv.nth(i).waitFor();
        
//         await this.page.locator(`//input[@name=${formText.trim()}]`).waitFor();
//         await this.expect(this.page.locator(`//input[@name=${formText.trim()}]`)).toBeVisible();
//         await this.expect(this.page.locator(`//input[@name=${formText.trim()}]`)).toBeEnabled();
//         await this.page.locator(`//input[@name=${formText.trim()}]`).fill("100");
//         console.log(`Form ${i + 1}: ${formText}`);
//     }
//     console.log(formCount);
 }

 async addStudentFunctionalityTest(){
    for(let i=0; i<this.addStudentForm.length; i++){
        await this.expect(this.addStudentForm[i]).toBeVisible();
        await this.expect(this.addStudentForm[i]).toBeEnabled();
        await this.expect(this.addStudentForm[i]).toHaveAttribute("type", "text");
 }
 await this.addStudentForm[0].fill("2023001");
 await this.addStudentForm[1].fill("John");
 await this.addStudentForm[2].fill("A.");
 await this.addStudentForm[3].fill("Doe");
 await this.addStudentForm[4].fill("Computer Science");
 await this.addStudentForm[5].fill("Section A");
 await this.addStudentSubmitButton.click();

}

studentTableSearchFunctionalityTest(){

    
}

}

