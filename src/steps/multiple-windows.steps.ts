import { When, Then } from '@cucumber/cucumber';
import { MultipleWindowsPage } from '../pages/multipleWindowsPage';
import { expect } from '@playwright/test';

When('I navigate to the "Multiple Windows" page', async function () {
  this.multipleWindowsPage = new MultipleWindowsPage(this.page);
  await this.multipleWindowsPage.gotoHome();
  await this.multipleWindowsPage.clickMultipleWindowsLink();
});

When('I click the Multiple Windows link "Click Here"', async function () {
  const newPage = await this.multipleWindowsPage.clickClickHereLink();
  this.newPage = newPage;
});

Then('a new window should open with the text "New Window"', async function () {
  const text = await this.newPage.locator('h3').textContent();
  expect(text).toBe('New Window');
});

Then('both windows are closed', async function () {
  const pages = this.page.context().pages();
  for (const page of pages) {
    await page.close();
  }
});
