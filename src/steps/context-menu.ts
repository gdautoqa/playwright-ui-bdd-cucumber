import { Given, When, Then } from '@cucumber/cucumber';
import { expect, Dialog } from '@playwright/test';
import { ContextMenuPage } from '../pages/contextMenuPage';

Given('I navigate to the context menu page', async function () {
  const contextMenuPage = new ContextMenuPage(this.page);
  await contextMenuPage.navigate();
  this.contextMenuPage = contextMenuPage;
});

Then('I should be on the context menu page', async function () {
  const currentUrl = await this.page.url();
  expect(currentUrl).toBe('https://the-internet.herokuapp.com/context_menu');
});

When('I right click on the hot spot', async function () {
  const dialogPromise = new Promise<string>((resolve) => {
    this.page.once('dialog', async (dialog: Dialog) => {
      const message = dialog.message();
      await dialog.accept();
      resolve(message);
    });
  });
  await this.contextMenuPage.triggerContextMenu();
  this.dialogMessage = await dialogPromise;
});

Then('I should see an alert with message {string}', async function (expectedMessage: string) {
  expect(this.dialogMessage).toBe(expectedMessage);
});