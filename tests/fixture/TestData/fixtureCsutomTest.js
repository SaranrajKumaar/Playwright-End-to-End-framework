const base = require("@playwright/test");

exports.customTest = base.test.extend({
  testDataInvalidLogin: {
    email: "mamatha@gmail.com",
    password: "Saran@1234",
  },
});
