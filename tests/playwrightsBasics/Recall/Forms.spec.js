import { test, expect } from "@playwright/test";

test("forms", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  const year = "2029";
  const month = "3";
  const day = "17";

  await page.goto("https://demoqa.com/");

  //forms
  await page.locator(".card-body").nth(1).click();
  await page.waitForSelector("text=Practice Form");
  await page.locator("text=Practice Form").click();
  await page.locator("#firstName").first().waitFor();
  //first Name
  await page.getByPlaceholder("First Name").fill("saran");
  await page.locator('#lastName').fill("mamatha");
  //email
  await page.locator("#userEmail").fill("mamatha@gmail.com");
await page.locator('label[for="gender-radio-2"]').click();
await expect(page.locator('#gender-radio-2')).toBeChecked();

  await page.locator("#userNumber").fill("5971548785");
  //date of birth -calender
  await page.locator("#dateOfBirthInput").click();
  const selectYear = page.locator(
    'select[class="react-datepicker__year-select"]',
  );
  await selectYear.selectOption(year);
  const selectMonth = page.locator(
    'select[class="react-datepicker__month-select"]',
  );
  await selectMonth.selectOption(month);
  await page.locator(`//div[text()='${day}']`).click();
  //hobbies 
  await page.locator('label[for="hobbies-checkbox-1"]').check();
  await expect(page.locator('label[for="hobbies-checkbox-1"]')).toBeChecked();
  //select dymanic
  await page.waitForSelector("#subjectsInput");
  await page.locator("#subjectsInput").fill("computer");
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("Enter");
  //upload ,
  await page.locator( "#uploadPicture").click()
  await page.setInputFiles(
    "#uploadPicture",
    "tests/screenShots/fullScreenShot.png",
  );
  await page.getByRole('button',{name:'Submit'}).click();

  const expectedMessage =await page.locator('#example-modal-sizes-title-lg').textContent();

   expect(expectedMessage).toBe('Thanks for submitting the form')

});
