import { Page } from '@playwright/test';

export class DragAndDropPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate() {
    await this.page.goto('https://the-internet.herokuapp.com/');
    await this.page.click('a:has-text("Drag and Drop")');
    await this.page.waitForLoadState('load');
  }

  async getColumnHeaders(): Promise<{ columnA: string; columnB: string }> {
    const columnAHeader = await this.page.textContent('#column-a header');
    const columnBHeader = await this.page.textContent('#column-b header');
    return {
      columnA: columnAHeader?.trim() || '',
      columnB: columnBHeader?.trim() || '',
    };
  }

  async performDragAndDrop() {
    await this.page.dragAndDrop('#column-a', '#column-b');
  }
}
