import { Page } from 'playwright/test';

export class ShiftingContentPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async gotoHome() {
    await this.page.goto('https://the-internet.herokuapp.com');
  }

  async navigateToShiftingContent() {
    await this.page.getByRole('link', { name: 'Shifting Content' }).click();
  }

  async clickExample1MenuElement() {
    await this.page
      .getByRole('link', { name: 'Example 1: Menu Element' })
      .click();
  }

  async clickExample2Image() {
    await this.page.getByRole('link', { name: 'Example 2: An image' }).click();
  }

  async clickExample3List() {
    await this.page.getByRole('link', { name: 'Example 3: List' }).click();
  }
}
