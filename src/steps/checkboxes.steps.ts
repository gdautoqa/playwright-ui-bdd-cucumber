import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CheckboxesPage } from '../pages/checkboxesPage';

Given('I navigate to the checkboxes page', async function () {
  const checkboxesPage = new CheckboxesPage(this.page);
  await checkboxesPage.navigate();
  this.checkboxesPage = checkboxesPage;
});

Then('I should see the first checkbox is {string}', async function (expectedState: string) {
  const checkboxesPage: CheckboxesPage = this.checkboxesPage;
  const states = await checkboxesPage.getCheckboxStates();
  const expected = expectedState.toLowerCase() === 'checked';
  expect(states[0]).toBe(expected);
});

Then('I should see the second checkbox is {string}', async function (expectedState: string) {
  const checkboxesPage: CheckboxesPage = this.checkboxesPage;
  const states = await checkboxesPage.getCheckboxStates();
  const expected = expectedState.toLowerCase() === 'checked';
  expect(states[1]).toBe(expected);
});

When('I toggle the first checkbox', async function () {
  const checkboxesPage: CheckboxesPage = this.checkboxesPage;
  await checkboxesPage.toggleCheckbox(0);
});