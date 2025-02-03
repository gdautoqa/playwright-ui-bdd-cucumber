import { Given } from '@cucumber/cucumber';

Given('I am on the homepage', async function () {
  await this.page.goto('https://the-internet.herokuapp.com');
});
