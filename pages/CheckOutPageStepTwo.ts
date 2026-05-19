import {Page,Locator} from '@playwright/test'

export class CheckOutPageStepTwo{

    readonly page:Page

    readonly finishButton:Locator

    constructor(page:Page)
    {
        this.page = page
        this.finishButton = page.getByRole('button',{name : 'Finish'})
    }

    async clickOnFinishButton(){
        await this.finishButton.click()
    }
}