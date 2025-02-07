import { Given, When, Then } from '@cucumber/cucumber';
import { ShiftingContentPage } from '../pages/shiftingContentPage';
import { expect } from '@playwright/test';

Given('I am on the Shifting Content page', async function () {
  const shiftingContent = new ShiftingContentPage(this.page);
  this.shiftingContentPage = shiftingContent;
  await shiftingContent.gotoHome();
  await shiftingContent.navigateToShiftingContent();
});

When('I click the shifting content example {string}', async function (example: string) {
  const shiftingContent = this.shiftingContentPage;
  if (example === 'Example 1: Menu Element') {
    await shiftingContent.clickExample1MenuElement();
  } else if (example === 'Example 2: An image') {
    await shiftingContent.clickExample2Image();
  } else if (example === 'Example 3: List') {
    await shiftingContent.clickExample3List();
  } else {
    throw new Error(`Unknown example: ${example}`);
  }
});

Then('I should see all menu elements shifting on hover', async function () {
  const menuItems = this.page.locator('ul li');
  const count = await menuItems.count();
  expect(count).toBeGreaterThan(0);
  for (let i = 0; i < count; i++) {
    const menuItem = menuItems.nth(i);
    await menuItem.hover();
    await expect(menuItem).toBeVisible();
  }
});

Then('I should see an image present', async function () {
  const image = this.page.locator('img.shift');
  await expect(image).toBeVisible();
  const count = await image.count();
  expect(count).toBeGreaterThan(0);
});

Then('I should see the list is displayed properly', async function () {
  const listContainer = this.page.locator('div.example');
  await expect(listContainer).toBeVisible();
  await expect(listContainer).toHaveText(/.+/);
});

When('I go back to the Shifting Content page', async function () {
  await this.page.goBack();
});