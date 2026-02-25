import { test, expect } from "@playwright/test";

test("Visual screenshots", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

  await page.locator('#displayed-text').screenshot({path: "trimScreenShot.png"})

  await page.locator('input[id="hide-textbox"]').click();
  await page.screenshot({path: "fullScreenShot.png", fullPage: true});
   await expect(page.locator('#displayed-text')).toBeHidden();  
});

test.only("Visual screenshots with locator", async ({ page }) => {
  await page.goto("https://google.com/");    
expect(await page.screenshot()).toMatchSnapshot("fullPage.png");
});