// @ts-check
import { defineConfig, devices } from "@playwright/test";
const config = {
  testDir: "./tests/playwrightsBasics",
  timeout: 40 * 1000,
  expect: {
    timeout: 5000,
  },
  reporter: "html",
  projects:[
    {
      name:"safari",
  use: {
    browserName: "webkit",
    headless: true,
    screenshot: "on",
    video: "on",
    trace: "retain-on-failure", //on
    //maximums window
    viewport: null,
    launchOptions: {
      args: ["--start-maximized"],
    },
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
  },
},{
  name:"Chrome",
    use: {
    browserName: "chromium",
    headless: false,
    screenshot: "only-on-failure",  
    video: "retain-on-failure", //failed test case video will be recorded
    trace: "retain-on-failure", //on
    ...devices["iPhone 15 Pro Max"], //Iocn
    ignoreHttpsErrors: true,
    Permissions: ["geolocation"],
    //maximums window
    viewport: null,
    launchOptions: {
      args: ["--start-maximized"],
    },
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
  },
}
]
};
module.exports = config;
