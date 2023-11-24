import { key_data, key_element } from '../mappings/mapper.js';
import { actionGetText } from './base_get.js';

/**
 * Used to verify whether an element is displayed or not displayed
 * @param {string} locator path element
 * @param {string} condition Conditions for assertions
 */
async function element_displayed(locator, condition) {
  switch (condition) {
    case 'is displayed':
      await $(key_element(locator)).waitUntil(
        async function () {
          return (await this.isDisplayed()) === true;
        },
        {
          timeout: 10000,
          timeoutMsg: `Element '${key_element(locator)}' not displayed not as expected`
        }
      );
    break;
    case 'not displayed':
      await $(key_element(locator)).waitUntil(
        async function () {
          return (await this.isDisplayed()) != true;
        },
        {
          timeout: 10000,
          timeoutMsg: `Element ${key_element(locator)} is displayed not as expected`
        }
      );
    break;
    default:
      throw new Error ('Unknown conditions')
  }
}

/**
 * Used to verify whether the value of the element matches the test data
 * @param {string} locator path element
 * @param {string} test_data path test data
 * @param {string} condition Conditions for assertions
 */
async function equal_data(condition, locator, test_data) {
  switch (condition) {
    case 'equal':
      await $(key_element(locator)).waitUntil(
        async function () {
          return (await this.getText()) === key_data(test_data);
        },
        {
          timeout: 10000,
          timeoutMsg:
            "Your element '" + (await actionGetText(locator)) + "' not equal with data '" + key_data(test_data) + "'",
        }
      );
      break;
    case 'not equal':
      await $(key_element(locator)).waitUntil(
        async function () {
          return (await this.getText()) !== key_data(test_data);
        },
        {
          timeout: 10000,
          timeoutMsg:
            "Your element '" + (await actionGetText(locator)) + "' is equal with data '" + key_data(test_data) + "'",
        }
      );
      break;
    default:
      throw new Error('Unknown conditions!');
  }
}

export { element_displayed, equal_data };
