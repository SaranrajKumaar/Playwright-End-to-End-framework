import { test, expect, request } from "@playwright/test";
import { APIUtlis } from "./Ultis/APIUtils";
const playLoad = { userEmail: "mamatha@gmail.com", userPassword: "Saran@123" };
const orderPlayload ={orders:[{country:"Cuba",productOrderedId:"6960eae1c941646b7a8b3ed3"}]}
let response;

test.beforeAll(async () => {  
  //login api 
  const apiContext = await request.newContext();
    const api = new APIUtlis(apiContext,playLoad);
    response=await api.getOrder(orderPlayload);


  //order API 

});

test("APi Testing", async ({ page }) => {


  await page.addInitScript((value) => {
    //javascript
    window.localStorage.setItem("token", value);
  }, response.token );
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

  // await page.locator('#userEmail').fill("mamatha@gmail.com");
  // await page.locator("#userPassword").fill("Saran@123");
  //order history page 
  await page.locator('button[routerlink*="myorders"]').last().click();
  const row = page.locator('tbody tr');

  for( let i =0 ; i<row.count(); i++){
    const expectedOrderId =await row.nth(i).locator('th').textContent();
    if (response.orderID.includes(expectedOrderId)) {

      await row.nth(i).locator('td button').first().click();
      break;
    }

    const orderPageViewDetailsiD =await page.locator('.col-text').first().textContent();
await page.pause();
     expect( response.orderID.includes(orderPageViewDetailsiD)).toBeTruthy();


  }
});
