const { Builder, By, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const driver = new Builder().forBrowser("chrome").build();
const { When, Then, Given, And } = require("@cucumber/cucumber");

Given("I am on the registration page", async function () {
  await driver.get(("https://www.techlistic.com/p/selenium-practice-form.html"));
  await driver.wait(until.elementLocated(By.name("firstname"), 50000));
});

When("I enter my first name as {string}", async function (firstName) {
  await driver.wait(until.elementLocated(By.name("firstname"), 50000));
  await driver.findElement(By.name("firstname")).sendKeys(firstName);
});

When("I enter my last name as {string}", async function (lastName) {
  await driver.findElement(By.name("lastname")).sendKeys(lastName);
});

When("I Select my Gender as {string}", async function (gender) {
  const input = gender;
  switch (input) {
    case "Male":
      await driver.findElement(By.css("//input[@value='Male']")).click();
      break;

    case "Female":
      await driver.findElement(By.css("//input[@value='Female']")).click();
      break;
  }
});

When("I enter my years of Experience as {string}", async function (experience) {
  const input = experience;
  await driver.findElement(By.css("//input[@value='${input}']")).click();
});

When("I enter my date as {string}", async function (date) {
  await driver.findElement(By.id("datepicker")).sendKeys(date);
});

When("I Select Profession as {string}", async function (profession) {
  const input = gender;
  switch (input) {
    case "Manual Tester":
      await driver
        .findElement(By.css("//input[@value='Manual Tester']"))
        .click();
      break;
  }
});

When("I Select Automation tools as {string}", async function (date) {
  await driver.findElement(By.id("tool-2")).click();
});

When("I Select Continents as {string}", async function (date) {
  await driver.findElement(By.id("continents")).click();
});

When("I Select Selenium Commands as {string}", async function (date) {
  const dropdown = await driver.findElement(By.id("selenium_commands"));
  await dropdown
    .findElement(By.xpath("//option[. = 'Browser Commands']"))
    .click();
});

When("I submit all the inputs", async function () {
  await driver.findElement(By.id("submit")).click();
});