import {Page, Locator} from '@playwright/test'

export class ProductsPage{

    //creating page instance object from Page interface

    readonly page:Page

    //Declaring locator variables with Locator Interface

    readonly title:Locator
    readonly backPackAddToCart:Locator
    readonly cart:Locator

    constructor(page:Page)
    {
        this.page = page
        this.backPackAddToCart = page.locator('#add-to-cart-sauce-labs-backpack')
        this.cart = page.locator('.shopping_cart_link')
        this.title = page.locator('[data-test="title"]')


    }

    async addBackPackToCart(){
        await this.backPackAddToCart.click()
    }

    async clickOnCart(){
        await this.cart.click()
    }

    async getTitle():Promise<string>{

        return this.title.innerText()
    }
}