import { When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { SortableDataTablesPage } from '../pages/sortableDataTablesPage';

When('I click on the "Sortable Data Tables" link', async function () {
  this.sortableDataTablesPage = new SortableDataTablesPage(this.page);
  await this.sortableDataTablesPage.clickSortableTablesLink();
});

When('I click on the "Due" header in Example 1', async function () {
  await this.sortableDataTablesPage.clickDueHeader();
});

Then('I should see the "Due" column values sorted in ascending order', async function () {
  const dueValues = await this.sortableDataTablesPage.getDueColumnValues();
  const sortedDueValues = [...dueValues].sort((a, b) => a - b);
  expect(dueValues).toEqual(sortedDueValues);
});

When('I click on the "Last Name" header in Example 2 to sort ascending', async function () {
  await this.sortableDataTablesPage.clickLastNameHeader();
});

Then('I should see the "Last Name" column values sorted alphabetically', async function () {
  const lastNames = await this.sortableDataTablesPage.getLastNameColumnValues();
  const sortedLastNames = [...lastNames].sort((a, b) => a.localeCompare(b));
  expect(lastNames).toEqual(sortedLastNames);
});