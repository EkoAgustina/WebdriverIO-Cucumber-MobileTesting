const sleep = require('sleep');
const allureReporter = require('@wdio/allure-reporter')
function hookAfterStep(result,step){
    if(result.passed){
        console.log(`\x1b[33m ✓ ${step.text} is passed \x1b[0m`);
        sleep.sleep(2)
    }
}
async function hooksAfterScenario(result){
    if(result.error){
        await driver.takeScreenshot()
    }
}
module.exports = {
    hookAfterStep,
    hooksAfterScenario
}


