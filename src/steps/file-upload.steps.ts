import { Given, When, Then } from '@cucumber/cucumber';
import { FileUploadPage } from '../pages/fileUploadPage';
import path from 'path';
import { expect } from '@playwright/test';

Given('I am on the file upload page', async function () {
  const fileUploadPage = new FileUploadPage(this.page);
  this.fileUploadPage = fileUploadPage;
  await fileUploadPage.goto();
});

When(
  'I select {string} from the uploads folder',
  async function (fileName: string) {
    const filePath = path.join(
      process.cwd(),
      'src',
      'utils',
      'uploads',
      fileName,
    );
    await this.fileUploadPage.fileInput.setInputFiles(filePath);
  },
);

When('I click the upload button', async function () {
  await this.fileUploadPage.uploadButton.click();
});

Then('the page should display {string}', async function (fileName: string) {
  await expect(this.fileUploadPage.uploadedFileNameLocator).toHaveText(
    fileName,
  );
});
