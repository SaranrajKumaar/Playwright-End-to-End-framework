
import { test, expect } from '@playwright/test';


test("ui control", async({browser})=>{
const context = await browser.newContext();
const page = await context.newPage();

      await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    //css xpath
  const userName = page.locator("#username");
  const password = page.locator('input[type="password"]');
  const signIn = page.locator("#signInBtn");
  const hyperLink =page.locator("a[href*='documents-request']")
  await userName.fill("rahulshettyacademy");
  await password.fill("learning");
  const drop  =  page.locator('select[class="form-control"]')
  await drop.selectOption("consult")
  await page.locator("span[class='radiotextsty']").last().click();
  await page.locator('#okayBtn').click(); 
  await expect (page.locator("span[class='radiotextsty']").last()).toBeChecked();

  console.log(page.locator("span[class='radiotextsty']").first().isChecked());
   await page.locator("span[class='radiotextsty']").first().click();

   await page.locator('#terms').click();
   expect (await page.locator('#terms').isChecked()).toBeTruthy();

   await expect(hyperLink).toHaveAttribute("class","blinkingText");
   const [newpagelink] = await Promise.all[
      page.waitForEvent('page'),
      hyperLink.click()
   ];
   
const text =await newpagelink.locator("p[class='im-para red']").textContent();
console.log(text)

const arrayText =text.split("@");
const domain =arrayText[1].split(" ")[0];
console.log(domain);

await userName.fill("")
await userName.fill(domain);

console.log( await userName.inputValue());


  
  
 // await signIn.click();

 




})