import { env } from 'process';
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
  var coordinate_x;
  var coordinate_y;
  if(env.platformType === 'ios'){
    var ios_coordinateData = coordinateData.ios
    coordinate_x = ios_coordinateData.x
    coordinate_y = ios_coordinateData.y
  }
  else if(env.platformType === 'android'){
    var android_coordinateData = coordinateData.android
    coordinate_x = android_coordinateData.x
    coordinate_y = android_coordinateData.y
  }
  await driver.touchAction({
    action: 'tap', x:coordinate_x, y:coordinate_y
  })
}

export { actionClick, cickCoordinate };
