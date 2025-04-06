import { Page } from '@playwright/test';

export class DynamicControlsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://the-internet.herokuapp.com/');
    await this.page.click('a:has-text("Dynamic Controls")');
    await this.page.waitForLoadState('load');
  }

  async clickRemoveButton() {
    await this.page.click('button:has-text("Remove")');
  }

  async waitForGoneMessage() {
    await this.page.locator("text=It's gone!").waitFor();
  }

  async clickAddButton() {
    await this.page.click('button:has-text("Add")');
  }

  async waitForBackMessage() {
    await this.page.locator("text=It's back!").waitFor();
  }

  async clickEnableButton() {
    await this.page.click('button:has-text("Enable")');
  }

  async waitForEnabledMessage() {
    await this.page.locator("text=It's enabled!").waitFor();
  }

  async clickDisableButton() {
    await this.page.click('button:has-text("Disable")');
  }

  async waitForDisabledMessage() {
    await this.page.locator("text=It's disabled!").waitFor();
  }

  async getMessageText(): Promise<string> {
    return (await this.page.textContent('#message'))?.trim() || '';
  }
}
