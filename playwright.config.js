
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests/playwrightsBasics',

  retries: 1,
  timeout: 40 * 1000,

  expect: {
    timeout: 5000,
  },

  reporter: 'html',

  use: {
    browserName: 'chromium',
    headless: false,
    screenshot: 'on',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    viewport: null,

    launchOptions: {
      args: ['--start-maximized'],
    },
  },

  projects: [
    {
      name: 'chromium',
    },
  ],
});
