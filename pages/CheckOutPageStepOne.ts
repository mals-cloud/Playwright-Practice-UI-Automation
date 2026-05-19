import { Page, Locator } from "@playwright/test";

export class CheckOutPageStepOne{

    //creating page object instance of Page Interface

    readonly page:Page

    //Declaring Locator variables
    readonly firstName:Locator
    readonly lastName:Locator
    readonly postCode:Locator
    readonly continueButton:Locator

    constructor(page:Page)
    {
        this.page = page
        this.firstName = page.locator('#first-name')
        this.lastName = page.locator('#last-name')
        this.postCode = page.locator('[data-test = "postalCode"]')
        this.continueButton = page.getByRole('button',{name : 'Continue'})
    }

    async enterFirstName(firstName:string){
        await this.firstName.fill(firstName)
    }

    async enterLastName(lastName:string){
        await this.lastName.fill(lastName)
    }

    async enterPostCode(postCode:string){
        await this.postCode.fill(postCode)
    }

    async clickOnContinueButton(){
        await this.continueButton.click()
    }

}