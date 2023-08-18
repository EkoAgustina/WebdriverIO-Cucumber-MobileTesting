import { Given, When, Then } from '@wdio/cucumber-framework';
import { takeScreenshot } from '../../helper/base_screen.js';
import { actionClick } from '../../helper/base_click.js';
import { element_displayed, equal_data } from '../../helper/base_expect.js';
import { actionFill } from '../../helper/base_fill.js';

When(/^User click "(.*)"$/, async (locator) => {
  await actionClick(locator);
});

Then(/^Element "(.*)" (is displayed|not displayed)$/, async (locator, condition) => {
    await element_displayed(locator, condition);
  }
);

Then(/^Fill "(.*)" with data "(.*)"$/, async (locator, local_data) => {
  await actionFill(locator, local_data);
});

Then(/^Element \"(.*)\" is (equal|not equal) with data \"(.*)\"$/, async (locator, condition, test_data) => {
    await equal_data(condition, locator, test_data);
  }
);

Then(/^User take screenshot with file name "(.*)"$/, async (name) => {
  await takeScreenshot(name);
});
