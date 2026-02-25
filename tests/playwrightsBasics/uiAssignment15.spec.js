
import { test, expect } from '@playwright/test';

test("Assignment ",async ({page})=>{
    await page.goto('https://rahulshettyacademy.com/client');
    const email= page.locator('#userEmail');
    const password= page.locator('#userPassword');
    const button= page.locator('#login');
    
    await email.fill('mamatha@gmail.com');
      await password.fill("Saran@123");
      await button.click({force:true});
      //wait mechnaise 
      //await page.waitForSelector('networkidle');
      await page.locator('.card-body b').first().waitfor()
      //await page.waitForSelector('.card-body b',{state:'visible'});
      const productList = await page.locator('.card-body b').allTextContents();
      console.log("list of product",productList);



})