import { sleep } from '../helper/base_screen.js';
import allureReporter from '@wdio/allure-reporter';
function hookAfterStep(result, step) {
  if (result.passed) {
    console.log(`\x1b[33m ✓ ${step.text} is passed \x1b[0m`);
    sleep(2);
  }
}
async function hooksAfterScenario(result) {
  if (result.error) {
    await driver.takeScreenshot();
  }
}

var stdoutAnsiColor = (color, message) => {
  if (color === 'red') {
    return '\x1b[31m' + message + '\x1b[0m';
  } else if (color === 'yellow') {
    return '\x1b[33m' + message + '\x1b[0m';
  }
};

export { hookAfterStep, hooksAfterScenario, stdoutAnsiColor };
