import logger from '@wdio/logger';
import { key_element } from '../mappings/mapper.js';

function sleep(duration) {
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
      throw new Error ('Unknown conditions')
  }
}

/**
 * Used as a basic function to search for Elements
 * @param {string} locator path element
 */
const findeElement = async (locator) => {
  return new Promise (async (resolve,reject) => {
    await Promise.all([
      $(key_element(locator)).waitForExist({ timeout: 10000 }),
      $(key_element(locator)) 
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
async function takeScreenshot(name) {
  await driver.saveScreenshot('./screenshot/' + name + '.png');
}

export { findeElement, takeScreenshot, sleep, log };
