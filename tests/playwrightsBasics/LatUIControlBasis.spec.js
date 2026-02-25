import { test, expect } from "@playwright/test";

test(" LatUIControlBasis -hide and control @Smoke", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

  //hide control
  await expect(page.locator("#displayed-text")).toBeVisible();
  await page.locator("#hide-textbox").click();
  await expect(page.locator("#displayed-text")).toBeHidden();
  await page.locator("#show-textbox").click();
  await expect(page.locator("#displayed-text")).toBeVisible();

  //alert dialog or pop up  //confirmbtn
  page.on("dialog", (dialog) => {
    dialog.accept();
  });
  await page.locator("#confirmbtn").click();

//   page.on("dialog", (dialog) => {
//     dialog.dismiss()});
//   await page.locator("#confirmbtn").click();

//   //alert alertbtn
//   page.on("dialog", dialog => {dialog.accept()});
//   await page.locator("#alertbtn").click();

//mouse houser
await page.locator("#mousehover").hover();
await page.getByRole("link", { name: "Top" }).click();

await page.locator("#mousehover").hover();
await page.getByRole("link",{name:"Reload"}).click();

//frames 
const frames = page.frameLocator('#courses-iframe');

await frames.locator('li a[href*="lifetime-access"]:visible ').click();

const text =await frames.locator(".text h2").textContent();

const count =text.split(" ")[1].trim();
console.log(count);







});
