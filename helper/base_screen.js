import logger from '@wdio/logger';
import { keyElement } from '../mappings/mapper.js';

function sleep (duration) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < duration * 1000);
}

/**
 * Used as a basic functions for logging information using the loglevel package
 * @param {string} level log level
 * @param {string} message log message
 */
const log = (level, message) => {
  switch (level) {
    case 'WARNING':
      logger('WARNING').warn(message)
      break;
    case 'INFO':
      logger('INFO').info(message)
      break;
    case 'ERROR':
      logger('ERROR').info(message)
      break;
    default:
      throw new Error('Unknown conditions')
  }
}

async function elForExist (locator) {
  try {
    await $(keyElement(locator)).waitForExist({ timeout: 6500 })
  } catch (err) {
    log('WARNING', err.message)
    sleep(2)
  }
}

/**
 * Used as a basic function to search for Elements
 * @param {string} locator path element
 */
const findElement = async (locator) => {
  return new Promise(async (resolve, reject) => {
    await Promise.all([
      elForExist(locator),
      $(keyElement(locator))
    ])
      .then((element) => {
        resolve(element[1])
      })
      .catch((err) => {
        reject(err)
      })
  })
}

/**
 * Used as a basic function to take screenshot
 * @param {string} name screenshot name
 */
async function takeScreenshot (name) {
  await driver.saveScreenshot('./screenshot/' + name + '.png');
}

export { findElement, takeScreenshot, sleep, log };
