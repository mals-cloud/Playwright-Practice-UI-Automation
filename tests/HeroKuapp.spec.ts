import test from "@playwright/test";

test('checkbox testing', async({page})=>{

await page.goto('https://the-internet.herokuapp.com/')

await page.getByRole('link',{name:'Checkboxes'}).click()

await page.getByRole('checkbox').first().check()

await page.getByRole('checkbox').nth(1).uncheck()

await page.getByRole('checkbox').nth(0).uncheck()

await page.goBack()

})