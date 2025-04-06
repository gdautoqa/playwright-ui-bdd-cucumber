import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { DragAndDropPage } from '../pages/dragAndDropPage';

Given('I navigate to the drag and drop page', async function () {
  const dragAndDropPage = new DragAndDropPage(this.page);
  await dragAndDropPage.navigate();
  this.dragAndDropPage = dragAndDropPage;
});

Then(
  'I should see the columns with headers {string} and {string}',
  async function (headerA: string, headerB: string) {
    const { columnA, columnB } = await this.dragAndDropPage.getColumnHeaders();
    expect(columnA).toBe(headerA);
    expect(columnB).toBe(headerB);
  },
);

When('I perform the drag and drop action', async function () {
  await this.dragAndDropPage.performDragAndDrop();
});
