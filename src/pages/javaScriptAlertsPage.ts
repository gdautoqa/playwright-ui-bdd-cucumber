import { Page } from '@playwright/test';

export default class JavaScriptAlertsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToHomePage(): Promise<void> {
    await this.page.goto('https://the-internet.herokuapp.com/');
  }

  async clickJavaScriptAlertsLink(): Promise<void> {
    await this.page.click('text=JavaScript Alerts');
  }

  async clickJsAlert(): Promise<string> {
    return new Promise<string>(async (resolve) => {
      this.page.once('dialog', async (dialog) => {
        const message = dialog.message();
        await dialog.accept();
        resolve(message);
      });
      await this.page.click('button:has-text("Click for JS Alert")');
    });
  }

  async clickJsConfirm(): Promise<string> {
    return new Promise<string>(async (resolve) => {
      this.page.once('dialog', async (dialog) => {
        const message = dialog.message();
        await dialog.accept();
        resolve(message);
      });
      await this.page.click('button:has-text("Click for JS Confirm")');
    });
  }

  async clickJsPrompt(): Promise<string> {
    return new Promise<string>(async (resolve) => {
      this.page.once('dialog', async (dialog) => {
        const message = dialog.message();
        await dialog.accept();
        resolve(message);
      });
      await this.page.click('button:has-text("Click for JS Prompt")');
    });
  }
}
