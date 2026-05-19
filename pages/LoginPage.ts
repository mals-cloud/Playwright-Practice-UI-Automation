import {Locator, Page} from '@playwright/test'

export class LoginPage{

    //creating page instance of Page interface to an instance variable

    readonly page:Page

    //Declaring the locators with Locator interface

    readonly usernameField:Locator
    readonly passwordField:Locator
    readonly submitButton:Locator


    constructor(page:Page)
    {
        this.page = page
        this.usernameField = page.locator('#user-name')
        this.passwordField = page.locator('#password')
        this.submitButton = page.locator('#login-button')
    }

    async enterUserName(userName:string){
            await this.usernameField.fill(userName)
    }

    async enterPassword(password:string){
            await this.passwordField.fill(password)
    }

    async clickOnSubmitButton(){
        await this.submitButton.click()
    }

}

