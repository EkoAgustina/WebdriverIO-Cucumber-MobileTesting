import { config } from './wdio.conf.js';
import { join } from 'path';
import yargs from 'yargs';
const { argv } = yargs(process.argv);

config.capabilities = [
  {
    platformName: 'Android',
    'appium:deviceName': argv.deviceName,
    'appium:automationName': 'UIAutomator2',
    'appium:noReset': false,
    'appium:app': join(process.cwd(), './app/' + argv.app),
    'appium:appWaitDuration': 40000,
    'appium:appWaitActivity':
      'SplashActivity, SplashActivity,OtherActivity, *, *.SplashActivity',
    'appium:newCommandTimeout': 60,
  },
];

config.cucumberOpts.tagExpression = argv.cucumberTags;

const _config = config;
export { _config as config };
