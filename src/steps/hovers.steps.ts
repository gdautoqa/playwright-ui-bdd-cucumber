import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import HoversPage from '../pages/Hovers';

When('I click on the "Hovers" link', async function () {
  this.hoversPage = new HoversPage(this.page);
  await this.hoversPage.navigateToHomePage();
  await this.hoversPage.clickHoversLink();
});

When('I hover over the first image', async function () {
  await this.hoversPage.hoverOverImage(0);
  this.lastHoveredIndex = 0;
});

When('I hover over the second image', async function () {
  await this.hoversPage.hoverOverImage(1);
  this.lastHoveredIndex = 1;
});

When('I hover over the third image', async function () {
  await this.hoversPage.hoverOverImage(2);
  this.lastHoveredIndex = 2;
});

Then('I should see the text {string} displayed', async function (expectedText: string) {
  const userNumber = expectedText.match(/user(\d)/)?.[1];
  if (!userNumber) throw new Error('Invalid user text format');
  
  const index = parseInt(userNumber) - 1;
  const caption = await this.hoversPage.getCaptionForImage(index);
  expect(caption).toContain(expectedText);
});