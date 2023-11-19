import { base_find } from './base_screen.js';
import { key_element } from '../mappings/mapper.js';
import { element_displayed } from './base_expect.js';

/**
 * Used as a base function to provide a Click action on an Element
 * @param {string} locator path element
 */
async function swipeUp(locator) {
    const windowSize = await driver.getWindowSize();
    const coordinateX = windowSize.width * 0.5
    const coordinateY = windowSize.height * 0.5
    const endCoordinate = windowSize.height * 0.25

    while (!await base_find(locator).isDisplayed()){
        await driver.touchAction([
            { action: 'longPress', x: coordinateX+50, y: coordinateY+50 },
            { action: 'moveTo', x: coordinateX+50, y: endCoordinate },
            'release'
        ])
    }
}

async function testSwipe(locator) {
    await base_find(locator).touchAction('moveTo')
}

export { swipeUp, testSwipe };
