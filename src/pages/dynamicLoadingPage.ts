import { Page, Locator } from '@playwright/test';

export class DynamicLoadingPage {
  readonly page: Page;
  readonly example1Link: Locator;
  readonly example2Link: Locator;
  readonly startButton: Locator;
  readonly helloWorldText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.example1Link = page.locator(
      'text=Example 1: Element on page that is hidden',
    );
    this.example2Link = page.locator(
      'text=Example 2: Element rendered after the fact',
    );
    this.startButton = page.locator('button');
    this.helloWorldText = page.locator('text=Hello World!');
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/dynamic_loading');
  }

  async clickExample1() {
    await this.example1Link.click();
  }

  async clickExample2() {
    await this.example2Link.click();
  }

  async clickStart() {
    await this.startButton.click();
  }

  async waitForHelloWorld() {
    await this.helloWorldText.waitFor({ state: 'visible', timeout: 15000 });
  }

  async gotoHome() {
    await this.page.goto('https://the-internet.herokuapp.com/dynamic_loading');
  }

  async selectExample(example: string) {
    if (example.includes('Example 1')) {
      await this.page.click('text=Example 1: Element on page that is hidden');
    } else if (example.includes('Example 2')) {
      await this.page.click('text=Example 2: Element rendered after the fact');
    } else {
      throw new Error(`Unknown dynamic loading example: ${example}`);
    }
  }
}
