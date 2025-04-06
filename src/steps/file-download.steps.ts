import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { FileDownloadPage } from '../pages/fileDownloadPage';
import fs from 'fs';
import path from 'path';

const downloadsFolder = path.join(process.cwd(), 'src', 'utils', 'downloads');

Given(
  'I navigate to the File Download page using the download link',
  async function () {
    this.fileDownloadPage = new FileDownloadPage(this.page);
    await this.fileDownloadPage.navigateToFileDownloadPage();
  },
);

When('I download the file "s.txt"', async function () {
  await this.fileDownloadPage.downloadFile('s.txt');
});

Then('the downloaded file should exist and not be empty', async function () {
  const filePath = path.join(downloadsFolder, 's.txt');
  const fileExists = fs.existsSync(filePath);
  expect(fileExists).toBeTruthy();

  const stats = fs.statSync(filePath);
  expect(stats.size).toBeGreaterThan(0);
});
