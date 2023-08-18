import { key_element } from '../mappings/mapper.js';

/**
 * Used as a basic function to search for Elements
 * @param {string} locator path element
 */
const base_find = (locator) => {
  try {
    return $(key_element(locator));
  } catch (err) {
    throw err;
  }
};

/**
 * Used as a basic function to take screenshot
 * @param {string} name screenshot name
 */
async function takeScreenshot(name) {
  await driver.saveScreenshot('./screenshot/' + name + '.png');
}

function sleep(duration) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < duration * 1000);
}

var stdoutAnsiColor = (color, message) => {
  if (color === 'red') {
    return '\x1b[31m' + message + '\x1b[0m';
  } else if (color === 'yellow') {
    return '\x1b[33m' + message + '\x1b[0m';
  }
};

export { base_find, takeScreenshot, sleep, stdoutAnsiColor };
