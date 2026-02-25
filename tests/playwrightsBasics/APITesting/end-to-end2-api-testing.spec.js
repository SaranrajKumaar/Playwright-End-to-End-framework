import { test, expect } from "@playwright/test";

let webContext;
let mail;
test.beforeAll(async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  const userName = page.locator("#userEmail");
  const password = page.locator("#userPassword");
  const signIn = page.locator("#login");
  mail = "mamatha@gmail.com";

  await userName.fill(mail);
  await password.fill("Saran@123");
  await signIn.click();
  await page.waitForSelector(".card-body h5 b");

  await context.storageState({ path: "state.json" });
  webContext = await browser.newContext({ storageState: "state.json" });
});

test("end - end api testing ", async () => {
  const actualProduct = "iphone 13 pro";
  const actualCountry = "India";
  const page = await webContext.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

  const product = page.locator(".card-body");
  const allProduct = page.locator(".card-body h5 b");
  const getText = await allProduct.allTextContents();
  console.log(getText);
  const counts = await product.count();

  for (let i = 0; i <= counts; i++) {
    if ((await product.nth(i).locator("b").textContent()) === actualProduct) {
      await product.nth(i).locator("text=Add To Cart").click();
      break;
    }
  }
  //cart
  await page.locator("[routerlink*='cart']").click();
  await page.locator("div li").first().waitFor();
  const assert = await page
    .locator(`h3:has-text("${actualProduct}")`)
    .isVisible();
  expect(assert).toBeTruthy();

  //subtotal
  const subTotal = await page
    .locator('ul li span[class="value"]')
    .first()
    .textContent();
  const total = await page
    .locator('ul li span[class="value"]')
    .nth(1)
    .textContent();

  expect(subTotal).toEqual(total);
  //checkout
  await page.locator("text=Checkout").click();
  const input = page.locator('input[class*="input"]').first();

  await input.fill(""); // clear
  await input.fill("24587845");
  //apply coupon
  await page.locator('input[class*="input"]').nth(3).fill("rahulshettyacademy");
  await page.locator('button[type="submit"]').click();

  const coupon = (
    await page.waitForSelector("text=* Coupon Applied")
  ).isVisible();
  expect(coupon).toBeTruthy();

  //email assertion
  const mailAssert = await page
    .locator('input[type="text"]')
    .nth(4)
    .inputValue();
  expect(mailAssert).toBe(mail);

  await expect(page.locator("div label")).toContainText(mail);
  //select country type one by one
  const selectCountry = page.locator('input[placeholder="Select Country"]');
  await selectCountry.pressSequentially("ind");

  const dropDown = page.locator('section[class*="ta-results"]');
  await dropDown.waitFor();
  const countryCount = await dropDown.locator("button").count();

  for (let j = 0; j < countryCount; j++) {
    if (
      (await dropDown.locator("button").nth(j).textContent()).trim() ===
      actualCountry
    ) {
      await dropDown.locator("button").nth(j).click();
      break;
    }
  }
  const excepetdValue = await selectCountry.inputValue();
  expect(excepetdValue).toEqual(actualCountry);

  //place orde r
  await page.locator('a[class*="btnn"]').click();

  const textTanks = await page.locator("td h1").textContent();
  expect(textTanks.trim()).toContain("Thankyou for the order.");

  const orderID = await page.locator("td label").last().textContent();

  console.log(orderID);

  const final = orderID.split("|")[1].trim();
  console.log(final);

  //order
  await page.locator("button[routerlink*='myorders']").click();
  const finalOrdersID = page.locator("tbody tr");
  const pageOrdersID = await finalOrdersID.count();

  for (let k = 0; k < pageOrdersID; k++) {
    if ((await finalOrdersID.nth(k).locator("th").textContent()) === final) {
      console.log(
        "order id is present in order history" +
          " " +
          (await finalOrdersID.nth(k).textContent()),
      );
      //vew button
      await finalOrdersID.nth(k).locator("button").first().click();
      break;
    }
    //delete
  }
  const orderIDView = await page
    .locator('div[class*="col-text"]')
    .textContent();

  expect(orderIDView).toBe(final);

  await page.locator("div[routerlink*='myorders']").click();

  for (let m = 0; m < pageOrdersID; m++) {
    if ((await finalOrdersID.nth(m).locator("th").textContent()) === final) {
      await finalOrdersID.nth(m).locator("button").nth(1).click();
      break;
    }
  }
});
