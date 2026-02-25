import { test, expect,request } from "@playwright/test";
import { APIUtlis } from "./Ultis/APIUtils";

const playLoad = { userEmail: "mamatha@gmail.com", userPassword: "Saran@123" };
const orderPlayload ={orders:[{country:"Cuba",productOrderedId:"6960eae1c941646b7a8b3ed3"}]}
let response;
const fakeresponse ={data:[],message:"No Orders" }

test.beforeAll(async () => {  
  //login api 
  const apiContext = await request.newContext();
    const api = new APIUtlis(apiContext,playLoad);
    response=await api.getOrder(orderPlayload);


  //order API 

});

test("Intercrepting", async ({ page }) => {
  await page.addInitScript((value) => {
    //javascript
    window.localStorage.setItem("token", value);
  }, response.token );
  await page.goto("https://rahulshettyacademy.com/client/#/auth/login");

  await page.route("https://rahulshettyacademy.com/api/ecom/user/get-cart-count/*",route=>{
    const responseFul =   page.request.fetch(route.request());
    let responseBody =JSON.stringify(fakeresponse);
    route.fulfill({
        responseFul,
        responseBody,

    })
  })

  //intercepting response -API response -> {playwright fake response }-browser render the data on front end

    await page.locator('button[routerlink*="myorders"]').last().click();
    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/user/get-cart-count/*")
    console.log(await page.locator('.mt-4').textContent());
      


})