import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { FormAuthenticationPage } from '../pages/formAuthenticationPage';

Given('I navigate to the Form Authentication page using the form link', async function () {
  this.formAuthPage = new FormAuthenticationPage(this.page);
  await this.formAuthPage.gotoHome();
  await this.formAuthPage.navigateToFormAuthentication();
});

When('I enter {string} as username', async function (username: string) {
  await this.formAuthPage.usernameInput.fill(username);
});

When('I enter {string} as password', async function (password: string) {
  await this.formAuthPage.passwordInput.fill(password);
});

When('I click the login button', async function () {
  await this.formAuthPage.loginButton.click();
});

Then('I should see {string} message', async function (expectedMsg: string) {
  await this.formAuthPage.flashMessage.waitFor();
  const rawMsg = (await this.formAuthPage.flashMessage.textContent()) || "";
  const cleanMessage = rawMsg.replace('×', '').trim();
  expect(cleanMessage).toContain(expectedMsg);
});

When('I click logout', async function () {
  await this.formAuthPage.logout();
});