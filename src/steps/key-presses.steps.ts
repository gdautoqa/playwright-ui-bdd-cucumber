import { Given, When, Then } from '@cucumber/cucumber';
import KeyPressesPage from '../pages/keyPressesPage';
import { expect } from '@playwright/test';

Given('I am on the Key Presses page', async function () {
  this.keyPressesPage = new KeyPressesPage(this.page);
  await this.keyPressesPage.navigateToKeyPressesPage();
});

When('I type {string} in the text box', async function (key: string) {
  await this.keyPressesPage.typeKey(key);
});

Then('I should see the text {string}', async function (expectedText: string) {
  const result = await this.keyPressesPage.getKeyResult();
  expect(result).toBe(expectedText);
});