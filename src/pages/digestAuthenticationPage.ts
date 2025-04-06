import { Page } from '@playwright/test';

export class DigestAuthenticationPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto(
      'https://admin:admin@the-internet.herokuapp.com/digest_auth',
    );
    await this.page.waitForLoadState('load');
  }

  async getContent() {
    return this.page.textContent('body');
  }
}
