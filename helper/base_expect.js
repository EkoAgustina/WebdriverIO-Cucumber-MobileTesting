const baseScreen = require('./base_screen');
const { key_data } = require('../mappings/mapper');

/**
 * Used to verify if an element is displayed
 * @param {string} locator path element
 */
async function element_displayed(locator){
    await expect(baseScreen.base_find(locator)).toBeExisting()
}


/**
 * Used to verify if an element is displayed
 * @param {string} locator path element
 * @param {string} test_data path test data
 * @param {string} condition Conditions for assertions
 */
async function equal_data(condition,locator,test_data){
    switch (condition){
        case 'equal':
            await baseScreen.base_find(locator).waitUntil(async function () {
                return (await this.getText()) === key_data(test_data)
            }, {
                timeout: 5000,
                timeoutMsg: 'Your element \''+await baseScreen.base_find(locator).getText()+'\' not equal with data \''+key_data(test_data)+'\''
            })
        break
        case 'not equal':
            await baseScreen.base_find(locator).waitUntil(async function () {
                return (await this.getText()) !== key_data(test_data)
            }, {
                timeout: 5000,
                timeoutMsg: 'Your element \''+await baseScreen.base_find(locator).getText()+'\' is equal with data \''+key_data(test_data)+'\''
            })
        break
        default:
            throw new Error('Unknown conditions!')
    }
}

module.exports = {
    element_displayed,
    equal_data
}