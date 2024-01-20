import { keyData, keyElement } from '../mappings/mapper.js';
import { actionGetText } from './base_get.js';
import { findeElement } from './base_screen.js'

/**
 * Used to verify whether an element is displayed or not displayed
 * @param {string} locator path element
 * @param {string} condition Conditions for assertions
 */
async function elementDisplayed (locator, condition) {
  const elDisplayed = await (await findeElement(locator)).isDisplayed()
  switch (condition) {
    case 'is displayed':
      if (!elDisplayed) {
        throw new Error(`Element '${keyElement(locator)}' is not displayed!`)
      }
      break;
    case 'not displayed':
      if (elDisplayed) {
        throw new Error(`Element '${keyElement(locator)}' is displayed, not as expected!`)
      }
      break;
    default:
      throw new Error('Unknown conditions')
  }
}

/**
 * Used to verify whether the value of the element matches the test data
 * @param {string} locator path element
 * @param {string} test_data path test data
 * @param {string} condition Conditions for assertions
 */
async function equalData (condition, locator, testData) {
  switch (condition) {
    case 'equal':
      await $(keyElement(locator)).waitUntil(
        async function () {
          return (await this.getText()) === keyData(testData);
        },
        {
          timeout: 10000,
          timeoutMsg:
            "Your element '" + (await actionGetText(locator)) + "' not equal with data '" + keyData(testData) + "'"
        }
      );
      break;
    case 'not equal':
      await $(keyElement(locator)).waitUntil(
        async function () {
          return (await this.getText()) !== keyData(testData);
        },
        {
          timeout: 10000,
          timeoutMsg:
            "Your element '" + (await actionGetText(locator)) + "' is equal with data '" + keyData(testData) + "'"
        }
      );
      break;
    default:
      throw new Error('Unknown conditions!');
  }
}

export { elementDisplayed, equalData };
