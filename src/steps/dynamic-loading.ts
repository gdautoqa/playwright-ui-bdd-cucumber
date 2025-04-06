import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { DynamicLoadingPage } from '../pages/dynamicLoadingPage';

Given('I am on the dynamic loading page', async function () {
  this.dynamicLoadingPage = new DynamicLoadingPage(this.page);
  await this.dynamicLoadingPage.gotoHome();
});

When('I select {string}', async function (example: string) {
  await this.dynamicLoadingPage.selectExample(example);
});

When('I click the start button', async function () {
  await this.dynamicLoadingPage.clickStart();
});

Then(
  'I should see {string} displayed',
  { timeout: 15000 },
  async function (expectedText: string) {
    await this.dynamicLoadingPage.waitForHelloWorld();
    await expect(this.page.locator(`text=${expectedText}`)).toBeVisible();
  },
);

When('I go back to the dynamic loading page', async function () {
  await this.page.goto('https://the-internet.herokuapp.com/dynamic_loading');
});
