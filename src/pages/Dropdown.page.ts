import { Page } from '@playwright/test';

export class DropdownPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://the-internet.herokuapp.com/');
    await this.page.click('a:has-text("Dropdown")');
    await this.page.waitForLoadState('load');
  }

  async selectOption(value: string) {
    await this.page.selectOption('#dropdown', value);
  }

  async getSelectedOptionText(): Promise<string> {
    return await this.page.$eval('#dropdown', (select: HTMLSelectElement) => {
      return select.options[select.selectedIndex].text;
    });
  }
}