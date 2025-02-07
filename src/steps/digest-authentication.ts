import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { DigestAuthenticationPage } from '../pages/digestAuthenticationPage';

Given('I navigate to the digest authentication page', async function () {
  this.digestAuthPage = new DigestAuthenticationPage(this.page);
  await this.digestAuthPage.navigate();
});

Then('I should be on the digest authentication page', async function () {
  const url = await this.page.url();
  expect(url).toMatch(/https:\/\/(admin:admin@)?the-internet\.herokuapp\.com\/digest_auth/);
});

Then('I should see a confirmation message', async function () {
  const content = await this.digestAuthPage.getContent();
  expect(content).toContain('Congratulations');
});