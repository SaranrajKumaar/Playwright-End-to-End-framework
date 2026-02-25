import { test, expect, request } from "@playwright/test";

test("security test intercepting", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  const userName = page.locator("#userEmail");
  const password = page.locator("#userPassword");
  const signIn = page.locator("#login");
  const mail = "mamatha@gmail.com";

  await userName.fill(mail);
  await password.fill("Saran@123");
  await signIn.click();

  await page.waitForSelector(".card-body h5 b");
  await page.locator('button[routerlink*="myorders"]').last().click();
  await page.route(
    "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
    (route) => {
      route.continue({
        url: "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=698d40d848d62064b2ff154e",
      });
    },
  );
  await page.locator("button:has-text('View')").first().click();

  await expect(page.locator('p').last()).toHaveText("You are not authorize to view this order")
});
