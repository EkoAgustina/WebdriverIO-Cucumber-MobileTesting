platform=${1}

apps='swaglabs.app'

# Setup for android platform
androidName='Pixel4_12'

# Setup for iOS platforms
iosName='iPhone_15'
iosUdid='EC865F6C-9547-4290-9942-B2A83F91B81C'

# Cucumber Tags
cucumberTags='@invalidAccount'


#############################################################
if [ -z "$apps" ]; then
    echo "Error: 'apps' cannot be empty!"
    exit 1
fi
if [ -z "$cucumberTags" ]; then
    echo "Error: 'cucumberTags' cannot be empty!"
    exit 1
fi

# Check based on the platform
if [ "$platform" == "android" ]; then
    # Check if androidName is not empty
    if [ -z "$androidName" ]; then
        echo "Error: 'androidName' cannot be empty for Android platform!"
        exit 1
    fi
elif [ "$platform" == "ios" ]; then
    # Check if iosName and iosUdid are not empty
    if [ -z "$iosName" ]; then
        echo "Error: 'iosName' cannot be empty for iOS platform!"
        exit 1
    fi
    if [ -z "$iosUdid" ]; then
        echo "Error: 'iosUdid' cannot be empty for iOS platform!"
        exit 1
    fi
else
    echo "Error: Unsupported platform. Please provide 'android' or 'ios'."
    exit 1
fi
#############################################################

export platformType=${platform}
export apps=${apps}
export androidName=${androidName}
export iosName=${iosName}
export iosUdid=${iosUdid}
export cucumberTags=${cucumberTags}

yarn test
