const {config} = require('./wdio.conf');
const path = require('path');
const args = require('yargs').argv;

config.capabilities = [
    {
       "platformName": "Android",
       "appium:deviceName": args.deviceName,
       "appium:automationName": "UIAutomator2",
       "appium:noReset": false,
       "appium:app": path.join(process.cwd(),"./app/"+args.app),
       "appium:appWaitDuration": 40000,
       "appium:appWaitActivity": "SplashActivity, SplashActivity,OtherActivity, *, *.SplashActivity",
       "appium:newCommandTimeout": 60
    }
];


config.cucumberOpts.tagExpression = args.cucumberTags;

exports.config = config;