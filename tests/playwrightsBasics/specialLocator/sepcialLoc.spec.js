import { test, expect } from "@playwright/test";


test("sepcial locator",async({page})=>{

    await page.goto("https://rahulshettyacademy.com/angularpractice/");

    await page.getByLabel('Check me out if you Love IceCreams!').click();

    await page.getByLabel('Employed').check();

    //select sattic
    await page.getByLabel('Gender').selectOption('Female');

    //place holdeer
    await page.getByPlaceholder('Password').fill('mamatha');

    //get by rolw 
    await page.getByRole('button',{name:'Submit'}) .click();

    //assertion 
    await expect(page.getByText('Success! The Form has been submitted successfully!.')).toBeVisible();

    //role 
    await page.getByRole('link',{name:'Shop'}).click();

    const producName = 'Blackberry'
    //filter
    await page.locator('app-card').filter({hasText:producName}).getByRole('button').click();

    await page.locator("a[class*='nav-link']").last().click();

    const textAssert = await page.locator('h4 a').textContent();;

    expect(textAssert).toBe(producName);

    await page.goBack();

    const title = await page.title();
    console.log(title);
    expect(title).toContain("ProtoCommerce");


})