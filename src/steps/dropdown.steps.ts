import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { DropdownPage } from '../pages/dropdownPage';

Given('I navigate to the dropdown page', async function () {
  const dropdownPage = new DropdownPage(this.page);
  await dropdownPage.navigate();
  this.dropdownPage = dropdownPage;
});

Then('the dropdown should have default text {string}', async function (defaultText: string) {
  const text = await this.dropdownPage.getSelectedOptionText();
  expect(text).toBe(defaultText);
});

When('I select option with value {string}', async function (value: string) {
  await this.dropdownPage.selectOption(value);
});

Then('the dropdown should show {string} selected', async function (expectedText: string) {
  const text = await this.dropdownPage.getSelectedOptionText();
  expect(text).toBe(expectedText);
});