import { When, Then, Given } from '@cucumber/cucumber';
import HorizontalSliderPage from '../pages/horizontalSliderPage';
import { expect } from '@playwright/test';

Given('I am on the Horizontal Slider page', async function () {
  this.horizontalSliderPage = new HorizontalSliderPage(this.page);
  await this.horizontalSliderPage.clickHorizontalSliderLink();
});

When(
  'I move the slider to the right until the value is {string}',
  async function (targetValue: string) {
    await this.horizontalSliderPage.moveSliderToValue(targetValue);
  },
);

Then(
  'I should see the slider value as {string}',
  async function (expectedValue: string) {
    const sliderValue = await this.horizontalSliderPage.getSliderValue();
    expect(sliderValue).toBe(expectedValue);
  },
);
