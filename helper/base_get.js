import { findElement } from './base_screen.js';

/**
 * Used as base get function
 * @param {string} locator path element
 */
async function actionGetText (locator) {
  const textValue = await (await findElement(locator)).getText()

  if (textValue === '' || textValue === null) {
    throw new Error('Text Not Found');
  } else {
    return textValue;
  }
}

export { actionGetText };
