import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src/features',
  testMatch: /\.(feature|spec)\.ts$/,
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  captureGitInfo: { diff: true},
  fullyParallel: true,
  retries: 1,
  reporter: [['html', { outputFolder: 'playwright-report' }]],
  use: {
    trace: 'on-first-retry',
    video: 'retain-on-failure',
    screenshot: 'on',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'Pixel 8',
      use: { ...devices['Pixel 8'] },
    },
    {
      name: 'iPhone 15',
      use: { ...devices['iPhone 15'] },
    },
    {
      name: 'API',
      testDir: './tests/api',
      use: {
        baseURL: process.env.BASE_API_URL || 'http://localhost:3000/api',
        extraHTTPHeaders: { 'Content-Type': 'application/json' },
      },
    },
  ],
  outputDir: 'test-results/',
});
