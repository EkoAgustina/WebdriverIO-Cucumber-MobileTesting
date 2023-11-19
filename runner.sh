platform=${1}

# Android setup
# apps='swaglabs.apk'
# deviceName='Pixel4_12'

# iOS setup
apps='swaglabs.app'
deviceName='iPhone_15'
iosUdid='EC865F6C-9547-4290-9942-B2A83F91B81C'

#Cucumber tags
cucumberTags='@invalidAccount'

export platformType=${platform}
export deviceName=${deviceName}
export apps=${apps}
export iosUdid=${iosUdid}
export cucumberTags=${cucumberTags}

npm run wdio
