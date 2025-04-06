import { Page } from '@playwright/test';

export class CheckboxesPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://the-internet.herokuapp.com/');
    await this.page.click('a[href="/checkboxes"]');
  }

  async getCheckboxStates(): Promise<boolean[]> {
    const checkboxes = this.page.locator(
      'form#checkboxes input[type="checkbox"]',
    );
    const count = await checkboxes.count();
    const states: boolean[] = [];
    for (let i = 0; i < count; i++) {
      states.push(await checkboxes.nth(i).isChecked());
    }
    return states;
  }

  async toggleCheckbox(index: number): Promise<void> {
    await this.page
      .locator('form#checkboxes input[type="checkbox"]')
      .nth(index)
      .click();
  }
}
