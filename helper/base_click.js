import { env } from 'process';
import { findElement } from './base_screen.js';
import { keyData } from '../mappings/mapper.js';

/**
 * Used as a base function to provide a Click action on an Element
 * @param {string} locator path element
 */
async function actionClick (locator) {
  await (await findElement(locator)).click()
}

/**
 * Used as a base function to provide a Click action on an Element with coordinate
 * @param {string} coordinate
 */
async function cickCoordinate (coordinate) {
  const coordinateData = keyData(coordinate)
  let coordinateX;
  let coordinateY;
  if (env.platformType === 'ios') {
    const iosCoordinateData = coordinateData.ios
    coordinateX = iosCoordinateData.x
    coordinateY = iosCoordinateData.y
  } else if (env.platformType === 'android') {
    const androidCoordinateData = coordinateData.android
    coordinateX = androidCoordinateData.x
    coordinateY = androidCoordinateData.y
  }
  await driver.touchAction({
    action: 'tap', x: coordinateX, y: coordinateY
  })
}

export { actionClick, cickCoordinate };
