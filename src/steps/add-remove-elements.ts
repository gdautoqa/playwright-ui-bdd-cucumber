import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { AddRemoveElementsPage } from '../pages/addRemoveElementsPage';

Given('I navigate to the add remove elements page', async function () {
  const addRemovePage = new AddRemoveElementsPage(this.page);
  await addRemovePage.navigate();
  this.addRemovePage = addRemovePage;
});

When('I click the Add Element button {int} times', async function (times: number) {
  const addRemovePage: AddRemoveElementsPage = this.addRemovePage;
  for (let i = 0; i < times; i++) {
    await addRemovePage.clickAddElement();
  }
});

Then('I should see {int} delete button displayed', async function (expectedCount: number) {
  const addRemovePage: AddRemoveElementsPage = this.addRemovePage;
  const count = await addRemovePage.countDeleteButtons();
  expect(count).toBe(expectedCount);
});

When('I click the Delete button', async function () {
  const addRemovePage: AddRemoveElementsPage = this.addRemovePage;
  await addRemovePage.clickDeleteButton();
});