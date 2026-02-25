import { test, expect } from "@playwright/test";

test("ui control basics @Smoke", async ({ browser }) => {
  const context = await browser.newContext();

  const page = await context.newPage();
  //page.route("**/*.css",route=>{route.abort()})--c ss
  // page.route("**/*.{jpg,png,jpeg}", (route) => {
  //   route.abort();
  // });
  await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  const userName = page.locator("#username");
  const password = page.locator('input[type="password"]');
  const signIn = page.locator("#signInBtn");
  const dropDown = page.locator("select.form-control");
  const userRadioButtons = page.locator("span.radiotextsty");
  const termsCheckbox = page.locator("#terms");
  const productName = page.locator('div[class="card-body"] h4 a');
  const linkDoc = page.locator('href*="documents-request"');
  await userName.fill("rahulshettyacademy");
  await password.fill("Learning@830$3mK2");
  //drop down -static value
  await dropDown.selectOption("teach");
  //admin
  await userRadioButtons.first().click();
  //radio button -user
  await userRadioButtons.last().click();
  await page.locator("#okayBtn").click();
  //await page.pause();

  await expect(userRadioButtons.last()).toBeChecked();
  console.log(await userRadioButtons.first().isChecked());
  //await page.pause(); //playwright inspector
  //checkbx
  await termsCheckbox.click();
  await expect(termsCheckbox).toBeChecked();

  await termsCheckbox.uncheck();
  await expect(termsCheckbox).not.toBeChecked();
  expect(await termsCheckbox.isChecked()).toBeFalsy();
  await signIn.click();

  await page.waitForSelector('div[class="card-body"] h4 a');

  const allProducts = await productName.allTextContents();
  console.log(allProducts);

  //blinking text
  await expect(linkDoc).toHaveAttribute("class", "blinkingText");
});

test(" multiple windows @Smoke", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  page.goto("https://rahulshettyacademy.com/loginpagePractise/");
  //hyper link
  const hyperLink = page.locator("a[href*='documents-request']");

  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    hyperLink.click(),
  ]);
  const getText = newPage.locator("p.im-para.red");
  const textPresent = await getText.textContent();
  console.log(textPresent);
  const arrayText = textPresent.split("@");
  const mentor = arrayText[0];
  const email = arrayText[1].split(" ")[0];
  console.log(email + "---" + mentor);
  newPage.close();

  await page.locator("#username").fill(email);
  await page.pause();
  await page.locator("#password").fill("Learning@830$3mK2");
  console.log(await page.locator("#username").inputValue());
});
