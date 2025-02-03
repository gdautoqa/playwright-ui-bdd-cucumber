import { Page, Locator } from '@playwright/test';

export default class KeyPressesPage {
  readonly page: Page;
  readonly input: Locator;
  readonly result: Locator;

  constructor(page: Page) {
    this.page = page;
    this.input = page.locator('#target');
    this.result = page.locator('#result');
  }

  async navigateToHomePage(): Promise<void> {
    await this.page.goto('https://the-internet.herokuapp.com');
  }

  async clickKeyPressesLink(): Promise<void> {
    await this.page.click('a[href="/key_presses"]');
  }

  async typeKey(key: string): Promise<void> {
    await this.input.click();
    await this.input.fill('');
    await this.input.type(key);
  }

  async getKeyResult(): Promise<string> {
    return (await this.result.textContent()) ?? '';
  }
}