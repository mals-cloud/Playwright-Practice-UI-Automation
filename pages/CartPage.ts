import { Page, Locator} from '@playwright/test'

export class CartPage{

    //creating page instance of Page Interface
    readonly page:Page

    //Dcelaring Locator variables

    readonly checkOutButton:Locator

    constructor(page:Page){
        this.page = page
        this.checkOutButton = page.locator('[data-test = "checkout"]')
    }

    async clickOnCheckOut(){
        await this.checkOutButton.click()
    }


}