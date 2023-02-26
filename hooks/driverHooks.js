const sleep = require('sleep');
const allureReporter = require('@wdio/allure-reporter')
function hookAfterStep(){
    sleep.sleep(2)
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


