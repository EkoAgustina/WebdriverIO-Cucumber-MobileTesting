import { sleep } from '../helper/base_screen.js';
import { log } from '../helper/base_screen.js';
function hookAfterStep(result, step) {
  if (result.passed) {
    log('INFO',`\x1b[33m ✓ ${step.text} is passed \x1b[0m`)
    sleep(2);
  }
}
async function hooksAfterScenario(result) {
  if (result.error) {
    await driver.takeScreenshot();
  }
}
export { hookAfterStep, hooksAfterScenario };
