import { Page, Locator } from '@playwright/test';

export class SortableDataTablesPage {
  readonly page: Page;
  readonly sortableTablesLink: Locator;
  readonly dueHeader: Locator;
  readonly lastNameHeader: Locator;
  readonly dueColumnCells: Locator;
  readonly lastNameColumnCells: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sortableTablesLink = page.locator('a[href="/tables"]');
    this.dueHeader = page.locator('#table1 thead tr th:nth-child(4)');
    this.lastNameHeader = page.locator('#table2 thead tr th:nth-child(1)');
    this.dueColumnCells = page.locator('#table1 tbody tr td:nth-child(4)');
    this.lastNameColumnCells = page.locator('#table2 tbody tr td:nth-child(1)');
  }

  async clickSortableTablesLink() {
    await this.sortableTablesLink.click();
    await this.page.waitForURL('**/tables');
  }

  async clickDueHeader() {
    await this.dueHeader.click();
    await this.page.waitForTimeout(500);
  }

  async getDueColumnValues(): Promise<number[]> {
    const cells = await this.dueColumnCells.all();
    const values = await Promise.all(
      cells.map(async (cell) => {
        const text = (await cell.textContent()) || '';
        return parseFloat(text.replace('$', '').replace(',', ''));
      }),
    );
    return values;
  }

  async clickLastNameHeader() {
    await this.lastNameHeader.click();
    await this.page.waitForTimeout(500);
  }

  async getLastNameColumnValues(): Promise<string[]> {
    const cells = await this.lastNameColumnCells.all();
    return Promise.all(
      cells.map(async (cell) => ((await cell.textContent()) || '').trim()),
    );
  }

  async verifyDueColumnSorted() {
    const values = await this.getDueColumnValues();
    const sortedValues = [...values].sort((a, b) => a - b);
    return JSON.stringify(values) === JSON.stringify(sortedValues);
  }

  async verifyLastNameColumnSorted() {
    const values = await this.getLastNameColumnValues();
    const sortedValues = [...values].sort();
    return JSON.stringify(values) === JSON.stringify(sortedValues);
  }
}
