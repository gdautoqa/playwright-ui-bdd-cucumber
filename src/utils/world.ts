import { setWorldConstructor, Before, After } from '@cucumber/cucumber';
import { chromium, Browser, BrowserContext, Page } from 'playwright';
import { DynamicLoadingPage } from '../pages/dynamicLoadingPage';

export class CustomWorld {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  dynamicLoadingPage!: DynamicLoadingPage;

  constructor() {}

  async init() {
    this.browser = await chromium.launch();
    this.context = await this.browser.newContext({});
    this.page = await this.context.newPage();
    this.dynamicLoadingPage = new DynamicLoadingPage(this.page);
  }

  async cleanup() {
    if (this.page) await this.page.close();
    if (this.context) await this.context.close();
    if (this.browser) await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);

Before(async function () {
  await this.init();
});

After(async function () {
  await this.cleanup();
});
