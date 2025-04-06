import { Given, When, Then } from '@cucumber/cucumber';
import JavaScriptAlertsPage from '../pages/javaScriptAlertsPage';
import { expect } from '@playwright/test';

Given('I am on the JavaScript Alerts page', async function () {
  this.javascriptAlertsPage = new JavaScriptAlertsPage(this.page);
  await this.javascriptAlertsPage.navigateToJavaScriptAlertsPage();
});

When('I click on JS Alert button', async function () {
  this.alertText = await this.javascriptAlertsPage.clickJsAlert();
});

Then(
  'I should see alert text {string} and accept it',
  async function (expectedText: string) {
    expect(this.alertText).toBe(expectedText);
  },
);

When('I click on JS Confirm button', async function () {
  this.confirmText = await this.javascriptAlertsPage.clickJsConfirm();
});

Then(
  'I should see confirm text {string} and accept it',
  async function (expectedText: string) {
    expect(this.confirmText).toBe(expectedText);
  },
);

When('I click on JS Prompt button', async function () {
  this.promptText = await this.javascriptAlertsPage.clickJsPrompt();
});

Then(
  'I should see prompt text {string} and accept it',
  async function (expectedText: string) {
    expect(this.promptText).toBe(expectedText);
  },
);
