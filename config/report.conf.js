let allureConfig = {
  outputDir: 'allure-results',
  disableWebdriverStepsReporting: true,
  disableWebdriverScreenshotsReporting: false,
  useCucumberStepReporter: true,
  addConsoleLogs: false,
};

let specConfig = {
  onlyFailures: false,
  addConsoleLogs: false,
  realtimeReporting: true,
  symbols: {
    passed: '[PASS]',
    skipped: '[SKIP]',
    failed: '[FAIL]'
  }
}
export { allureConfig, specConfig };
