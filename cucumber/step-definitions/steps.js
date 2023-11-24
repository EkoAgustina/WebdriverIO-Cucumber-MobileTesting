import { Given, When, Then } from '@wdio/cucumber-framework';
import { takeScreenshot } from '../../helper/base_screen.js';
import { actionClick, cickCoordinate } from '../../helper/base_click.js';
import { element_displayed, equal_data } from '../../helper/base_expect.js';
import { actionFill } from '../../helper/base_fill.js';
import { swipeUp } from '../../helper/base_swipe.js';

When(/^User click "(.*)"$/, async (locator) => {
  await actionClick(locator);
});

Then(/^Element "(.*)" (is displayed|not displayed)$/, async (locator, condition) => {
  try {
    await element_displayed(locator, condition);
  } 
  catch(err) {
    throw err
  } 
  }
);

Then(/^Fill "(.*)" with data "(.*)"$/, async (locator, local_data) => {
  try {
    await actionFill(locator, local_data);
  }
  catch (err) {
    throw err
  }
});

Then(/^Element \"(.*)\" is (equal|not equal) with data \"(.*)\"$/, async (locator, condition, test_data) => {
    try {
      await equal_data(condition, locator, test_data);
    }
    catch (err) {
      throw err
    }
  }
);

Then(/^User take screenshot with file name "(.*)"$/, async (name) => {
  try {
    await takeScreenshot(name);
  }
  catch (err) {
    throw err
  }
});

Then(/^User scrolls up until he finds element "(.*)"$/, async (locator) => {
  try {
    await swipeUp(locator)
  }
  catch (err) {
    throw err
  }
});

Then(/^User click based on coordinate "(.*)"$/, async (coordinate) => {
  try {
    await cickCoordinate(coordinate)
  }
  catch (err) {
    throw err
  }
});
