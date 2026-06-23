import {test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckOutPageStepOne } from '../pages/CheckOutPageStepOne';
import { CheckOutPageStepTwo } from '../pages/CheckOutPageStepTwo';
import { ThankYouPage } from '../pages/ThankYouPage';

test('Sauce demo - Product Order Workflow',async({page})=>{

    //create object of page class
    const loginPage = new LoginPage(page)
    const productsPage = new ProductsPage(page)
    const cartPage = new CartPage(page)
    const checkOutPageStepOne = new CheckOutPageStepOne(page)
    const checkOutPageStepTwo = new CheckOutPageStepTwo(page)
    const thankYouPage = new ThankYouPage(page)


    await page.goto('https://www.saucedemo.com/')

   await loginPage.enterUserName('standard_user')
   await loginPage.enterPassword('secret_sauce')
   await loginPage.clickOnSubmitButton();

   //Validating it has landed on Products Page

   const title = await productsPage.getTitle()

   expect(title).toEqual('Products')

   //Validating the add to cart button is enabled
   expect(productsPage.backPackAddToCart).toBeEnabled()

   await productsPage.addBackPackToCart()

   expect(productsPage.cart).toBeEnabled()

   await productsPage.clickOnCart()
   await cartPage.clickOnCheckOut()
   await checkOutPageStepOne.enterFirstName('Malathi')
   await checkOutPageStepOne.enterLastName('Subburathinam')
   await checkOutPageStepOne.enterPostCode('DA158RS')
   await checkOutPageStepOne.clickOnContinueButton()
   await checkOutPageStepTwo.clickOnFinishButton()
   const confirmationMsg = await thankYouPage.getOrderConfirmationMsg()
   //console.log(confirmationMsg)
   expect(confirmationMsg).toContain('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
})