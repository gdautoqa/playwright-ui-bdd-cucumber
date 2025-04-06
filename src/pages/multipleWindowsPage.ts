import { Page, Locator } from '@playwright/test';

export class MultipleWindowsPage {
  readonly page: Page;
  readonly multipleWindowsLink: Locator;
  readonly clickHereLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.multipleWindowsLink = page.locator('a[href="/windows"]');
    this.clickHereLink = page.locator('a[href="/windows/new"]');
  }

  async gotoHome() {
    await this.page.goto('https://the-internet.herokuapp.com');
  }

  async clickMultipleWindowsLink() {
    await this.multipleWindowsLink.click();
    await this.page.waitForURL('**/windows');
  }

  async clickClickHereLink() {
    const [newPage] = await Promise.all([
      this.page.context().waitForEvent('page'),
      this.clickHereLink.click(),
    ]);
    await newPage.waitForLoadState();
    return newPage;
  }
}
