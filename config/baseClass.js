import { config } from './wdio.conf.js';
import { join } from 'path';
import { env } from 'process';

switch(env.platformType) {
  case 'android': {
    config.capabilities = [
      {
        platformName: 'android',
        'appium:deviceName': env.deviceName,
        'appium:automationName': 'UIAutomator2',
        'appium:noReset': false,
        'appium:app': join(process.cwd(), './app/' + env.apps),
        'appium:appWaitDuration': 40000,
        'appium:appWaitActivity':
          'SplashActivity, SplashActivity,OtherActivity, *, *.SplashActivity',
        'appium:newCommandTimeout': 60,
      },
    ];
  }
  break;
  case 'ios': {
    config.capabilities = [
      {
        platformName: 'iOS',
        'appium:deviceName': env.deviceName,
        'appium:udid': env.iosUdid,
        'appium:automationName': 'XCUITest',
        'appium:noReset': false,
        'appium:app': join(process.cwd(), './app/' + env.apps),
        'appium:appWaitDuration': 40000,
        'appium:appWaitActivity':
          'SplashActivity, SplashActivity,OtherActivity, *, *.SplashActivity',
        'appium:newCommandTimeout': 60,
      },
    ];
  }
  break;
  default: {
    throw new Error (`Your platform '${env.platformType}' not recognized`)
  }
}

config.cucumberOpts.tagExpression = env.cucumberTags;

const _config = config;
export { _config as config };
