import { test, expect } from "@playwright/test";

test("calender locator", async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");

  const date = page.getByRole("link", { name: "Top Deals" });

  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    date.click(),
  ]);
  const month ="4";
  const year ="2029";
  const dateToSelect = "17";
  const expectedDate =[month,dateToSelect,year]
  const calIcon =newPage.locator('button[class*="react-date-picker__calendar-button"]');
  await calIcon.first().waitFor();
  console.log(await newPage.title());

  await calIcon.first().click();

  const yearSelecting = newPage.locator('.react-calendar__navigation__label')
  await newPage.waitForSelector('.react-calendar__navigation__label')
  await yearSelecting.click();
   await yearSelecting.click()
  newPage.getByText(year).click();
  const monthSelecting = newPage.locator('.react-calendar__year-view__months__month')
  await monthSelecting.nth(Number(month-1)).click();
   await newPage.waitForSelector(`//abbr[text()=${dateToSelect}]`)
  await newPage.locator(`//abbr[text()=${dateToSelect}]`).click();
  
  const actualDate =newPage.locator(".react-date-picker__inputGroup")

  for (let i =0; i<expectedDate.length;i++){
    const actual =await actualDate.nth(i).inputValue();
    expect(actual).toBe(expectedDate[i]);

  }


});
