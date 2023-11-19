import { base_find } from './base_screen.js';
import { key_data } from '../mappings/mapper.js';

/**
 * Used as a base function to provide a Click action on an Element
 * @param {string} locator path element
 */
async function actionClick(locator) {
  await base_find(locator).click();
}

/**
 * Used as a base function to provide a Click action on an Element with coordinate
 * @param {string} coordinate 
 */
async function cickCoordinate(coordinate) {
  var coordinateData = key_data(coordinate)
  await driver.touchAction({
    action: 'tap', x: coordinateData.x, y:coordinateData.y
  })
}

export { actionClick, cickCoordinate };
