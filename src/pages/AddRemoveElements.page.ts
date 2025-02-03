import { Page } from '@playwright/test';

export class AddRemoveElementsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://the-internet.herokuapp.com/');
    await this.page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
  }

  async clickAddElement() {
    await this.page.click('text=Add Element');
  }

  async countDeleteButtons(): Promise<number> {
    return await this.page.locator('button', { hasText: 'Delete' }).count();
  }

  async clickDeleteButton(index: number = 0) {
    await this.page.locator('button', { hasText: 'Delete' }).nth(index).click();
  }
}