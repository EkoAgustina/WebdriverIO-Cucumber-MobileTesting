const { Given, When ,Then } = require('@wdio/cucumber-framework');
const baseScreen = require('../../helper/base_screen');
const {actionClick} = require('../../helper/base_click');
const assertion = require('../../helper/base_expect');
const {actionFill} = require('../../helper/base_fill')

When(/^User click "(.*)"$/, async (locator) =>{
    await actionClick(locator)
});

Then(/^Element "(.*)" (is displayed|not displayed)$/, async (locator,condition) =>{
    await assertion.element_displayed(locator,condition)
});

Then(/^Fill "(.*)" with data "(.*)"$/, async (locator,local_data) =>{
    await actionFill(locator,local_data)
});

Then(/^Element \"(.*)\" is (equal|not equal) with data \"(.*)\"$/, async (locator,condition,test_data) =>{
    await assertion.equal_data(condition,locator,test_data)
});

Then(/^User take screenshot with file name "(.*)"$/, async (name) =>{
    await baseScreen.takeScreenshot(name)
});
