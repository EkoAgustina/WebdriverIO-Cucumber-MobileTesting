@ECHO OFF

tskill node

timeout /t 1 /nobreak > NUL

::================================Configuration=============================================
set apps=wdio.apk

set deviceName=127.0.0.1:21503

set tags=@validAccount
::==========================================================================================

if defined deviceName (
    if defined apps (
        if defined tags (
            call npm run wdio -- --app="%apps%" --deviceName="%deviceName%" --cucumberTags="%tags%"
        ) else (
            echo TAGS IS REQUIRED!
            timeout /t 3 /nobreak > NUL
        )
    ) else (
        echo APPS IS REQUIRED!
        timeout /t 3 /nobreak > NUL
    )
) else (
    echo DEVICE NAME IS REQUIRED!
    timeout /t 3 /nobreak > NUL
)

timeout /t 2 /nobreak > NUL

tskill node
