import fs from 'fs';
import path from 'path';
import { Page } from '@playwright/test';

export class FileDownloadPage {
  readonly page: Page;
  readonly fileDownloadLink;

  constructor(page: Page) {
    this.page = page;
    this.fileDownloadLink = page.locator('a[href="/download"]');
  }

  async gotoHome() {
    await this.page.goto('https://the-internet.herokuapp.com');
  }

  async navigateToFileDownloadPage() {
    await this.fileDownloadLink.click();
  }

  async downloadFile(fileName: string): Promise<void> {
    const downloadsFolder = path.join(
      process.cwd(),
      'src',
      'utils',
      'downloads',
    );

    if (!fs.existsSync(downloadsFolder)) {
      fs.mkdirSync(downloadsFolder, { recursive: true });
    }

    const [download] = await Promise.all([
      this.page.waitForEvent('download'),
      this.page.click(`a[href*="${fileName}"]`),
    ]);

    const filePath = path.join(downloadsFolder, fileName);
    await download.saveAs(filePath);
  }
}
