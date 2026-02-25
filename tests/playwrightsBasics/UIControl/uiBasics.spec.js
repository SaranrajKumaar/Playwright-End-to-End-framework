
import { test, expect } from '@playwright/test';

//annotation                                //not in default steps
test("first plawright test", async ({ browser }) => {
  //plugins//cookise -this method open new browser or new instance
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  //css xpath
  const userName = page.locator("#username");
  const password = page.locator('input[type="password"]');
  const signIn = page.locator("#signInBtn");
  await userName.fill("anushhsaran");
  await password.fill("123456");
  await page.locator('input[id="terms"]').check();
  await signIn.click();
  await page.waitForLoadState("networkidle");
  const value = await page.locator("[style*='block']").textContent();
  console.log(value);
  expect(value.trim()).toBe("Incorrect username/password.");
  //expect(page.locator("[style*='block']")).toContainText('Incorrect');
  await userName.fill("");
  await userName.fill("rahulshettyacademy");
  await password.fill("");
  await password.fill("learning");
  await signIn.click();
  await page.waitForSelector("div[class='card-body'] h4", {state:"visible"});
  //await expect(page.locator("div[class='card-body'] h4")).toHaveCount(4);

  const cardTitles =  page.locator("div[class='card-body'] h4").allTextContents();
//   console.log(await cardTitles.first().textContent());
const text =await cardTitles
   console.log(text);

});

//default mode
test("default mode", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/angularpractice/");
  const title = await page.title();
  console.log(title);
  expect(title).toBe("ProtoCommerce");
  await expect(page).toHaveTitle("ProtoCommerce");
});


