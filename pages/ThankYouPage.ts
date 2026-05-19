import { Page, Locator } from "@playwright/test";

export class ThankYouPage{

    readonly page:Page
    readonly orderConfirmationText:Locator

    constructor(page:Page)
    {
        this.page=page
        this.orderConfirmationText = page.locator('[data-test = "complete-text"]')

    }

    async getOrderConfirmationMsg(): Promise<string>{

        const confirmationMsg = await this.orderConfirmationText.innerText()
        return confirmationMsg
    }

}