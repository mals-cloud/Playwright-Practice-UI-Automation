import {test,expect} from "@playwright/test";


test('SauceDemo Sign Up', async({page})=>{

     await page.goto('https://sauce-demo.myshopify.com/')

     await page.getByRole('link',{name : 'Sign up'}).click()

     await page.locator('[name="customer[first_name]"]').fill('Malathi')

     await page.locator('[name="customer[last_name]"]').fill('Subburathinam')

     await page.locator('[name="customer[email]"]').fill('mals.ece@gmail.com')

     await page.locator('[name="customer[password]"]').fill('Sathyamals@1704')

     await page.getByRole('button',{name : 'Create'}).click()
})

test('Sauce Demo Testing - Login feature', async({page})=>{

     await page.goto('https://sauce-demo.myshopify.com/')

     await page.getByRole('link',{name : 'Log In'}).click()

     await page.getByRole('textbox',{name : 'Email Address'}).fill('sathya.andavaraj@gmail.com')

     await page.getByRole('textbox',{name : 'Password'}).fill('Sathyamals@1704')
     
     await page.getByRole('button',{name : 'Sign In'}).click()
})

test('Sauce Demo - Shopping cart',async({page})=>{

     await page.goto('https://sauce-demo.myshopify.com/')

     await page.getByAltText('Grey jacket').click()

     await page.getByRole('button',{name : 'Add to Cart'}).click()

      const checkOutLinkOnTop = page.getByRole('link', { name: 'Check Out' })

      await page.waitForTimeout(2000);

       await checkOutLinkOnTop.click()

       await page.locator('#checkout').click()

       await page.getByRole('textbox', { name: 'Email' }).fill('mals.ece@gmail.com')

       await page.getByRole('textbox', { name: 'First name (optional)' }).fill('Malathi')

       await page.getByRole('textbox', { name: 'Last name' }).fill('Subburathinam')

       await page.getByRole('combobox', { name: 'Address' }).fill('10 Leechcroft Avenue')

       await page.getByRole('textbox', { name: 'City' }).fill('Sidcup')

       await page.getByRole('textbox', { name: 'Postcode' }).fill('DA15 8RS')

       const cardNumberFrame = page.frameLocator('iframe[title="Field container for: Card number"]')

       await cardNumberFrame.getByPlaceholder('Card number').fill('4242 4242 4242 4242')  
       
       await page.frameLocator('iframe[title="Field container for: Expiration date (MM / YY)"]')
                    .getByPlaceholder('Expiration date (MM / YY)').fill('09/27') 

     await page.frameLocator('iframe[title="Field container for: Security code"]')
                    .getByPlaceholder('Security code').fill('123') 

     await page.waitForTimeout(1000);

     await page.locator('#checkout-pay-button').click()


       

   })