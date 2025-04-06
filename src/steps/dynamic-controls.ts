import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { DynamicControlsPage } from '../pages/dynamicControlsPage';

Given('I navigate to the dynamic controls page', async function () {
  const dynamicControlsPage = new DynamicControlsPage(this.page);
  await dynamicControlsPage.navigate();
  this.dynamicControlsPage = dynamicControlsPage;
});

When('I click the remove button', async function () {
  await this.dynamicControlsPage.clickRemoveButton();
});

Then('I wait for the gone message', async function () {
  await this.dynamicControlsPage.waitForGoneMessage();
  const message = await this.dynamicControlsPage.getMessageText();
  expect(message).toBe("It's gone!");
});

When('I click the add button', async function () {
  await this.dynamicControlsPage.clickAddButton();
});

Then('I wait for the back message', async function () {
  await this.dynamicControlsPage.waitForBackMessage();
  const message = await this.dynamicControlsPage.getMessageText();
  expect(message).toBe("It's back!");
});

When('I click the enable button', async function () {
  await this.dynamicControlsPage.clickEnableButton();
});

Then('I wait for the enabled message', async function () {
  await this.dynamicControlsPage.waitForEnabledMessage();
  const message = await this.dynamicControlsPage.getMessageText();
  expect(message).toBe("It's enabled!");
});

When('I click the disable button', async function () {
  await this.dynamicControlsPage.clickDisableButton();
});

Then('I wait for the disabled message', async function () {
  await this.dynamicControlsPage.waitForDisabledMessage();
  const message = await this.dynamicControlsPage.getMessageText();
  expect(message).toBe("It's disabled!");
});
