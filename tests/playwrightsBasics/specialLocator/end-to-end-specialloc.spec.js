import { test, expect } from "@playwright/test";


test("end to end test with special locator",async({page})=>{

   await page.goto("https://rahulshettyacademy.com/angularpractice/");
   //shop
   await page.getByRole('link',{name:'Shop'}).click();

   const productName ="Samsung Note 8"

   await page.locator('div h4').first().waitFor();

   await page.locator('app-card').filter({hasText:productName}).getByRole('button').click();
   //checkout 
   await page.locator("a[class*='nav-link']").last().click();
   //assertion 
   const expected =await page.locator('div h4 a').textContent();
   expect(expected).toBe(productName);

   const priceText = await page.locator('tr td:nth-child(4) strong').textContent();
   console.log(priceText);

   const totalAmount =await page.locator('td h3 strong').textContent();

   expect(priceText).toBe(totalAmount);
    await page.getByRole('button',{name:'Checkout'}).click();

    await page.locator('#country').pressSequentially('ind');
    const dropDown =   page.locator('.suggestions ul li a');
    await dropDown.first().waitFor();
    await dropDown.getByText('India').click();
// await page.locator('label[for="checkbox2"]').click();
// await expect(page.locator('#checkbox2')).toBeChecked();


    await page.getByRole('button',{name:'Purchase'}).click();

    await page.getByText('Success! Thank you! Your order will be delivered in next few weeks :-).').isVisible();





})
