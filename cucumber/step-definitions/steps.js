import { When, Then } from '@wdio/cucumber-framework';
import { takeScreenshot } from '../../helper/base_screen.js';
import { actionClick, cickCoordinate } from '../../helper/base_click.js';
import { elementDisplayed, equalData } from '../../helper/base_expect.js';
import { actionFill } from '../../helper/base_fill.js';
import { swipeUp } from '../../helper/base_swipe.js';

When(/^User click "(.*)"$/, async (locator) => {
  await actionClick(locator);
});

Then(/^Element "(.*)" (is displayed|not displayed)$/, async (locator, condition) => {
  await elementDisplayed(locator, condition);
}
);

Then(/^Fill "(.*)" with data "(.*)"$/, async (locator, localData) => {
  await actionFill(locator, localData);
});

Then(/^Element \"(.*)\" is (equal|not equal) with data \"(.*)\"$/, async (locator, condition, testData) => {
  await equalData(condition, locator, testData);
}
);

Then(/^User take screenshot with file name "(.*)"$/, async (name) => {
  await takeScreenshot(name);
});

Then(/^User scrolls up until he finds element "(.*)"$/, async (locator) => {
  await swipeUp(locator)
});

Then(/^User click based on coordinate "(.*)"$/, async (coordinate) => {
  await cickCoordinate(coordinate)
});
