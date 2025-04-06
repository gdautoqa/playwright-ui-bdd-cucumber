import { Page } from '@playwright/test';

export class ContextMenuPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://the-internet.herokuapp.com/');
    await this.page.click('a:has-text("Context Menu")');
    await this.page.waitForLoadState('load');
  }

  async triggerContextMenu() {
    await this.page.click('#hot-spot', { button: 'right' });
  }
}
