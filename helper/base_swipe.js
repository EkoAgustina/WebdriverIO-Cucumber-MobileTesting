import { findeElement } from './base_screen.js';

/**
 * Used as a function to swipe up by element
 * @param {string} locator element
 */
async function swipeUp (locator) {
  const windowSize = await driver.getWindowSize();
  const coordinateX = windowSize.width * 0.5
  const coordinateY = windowSize.height * 0.5
  const endCoordinate = windowSize.height * 0.25

  while (!await (await findeElement(locator)).isDisplayed()) {
    await driver.touchAction([
      { action: 'longPress', x: coordinateX + 50, y: coordinateY + 50 },
      { action: 'moveTo', x: coordinateX + 50, y: endCoordinate },
      'release'
    ])
  }
}

export { swipeUp };
