const baseScreen = require('./base_screen');
const sleep = require('sleep');

/**
 * Used as a base function to provide a Click action on an Element
 * @param {string} locator path element
 */
async function actionClick(locator){
    await baseScreen.base_find(locator).click()
}

module.exports = {
    actionClick
}