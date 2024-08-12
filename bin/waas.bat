call wenv.bat

@IF  "%1"=="config" (
call config.bat
)



@IF  "%1"=="start" (
call lite.srt.start.bat
call mongodb.start.bat
call mysql.start.bat
call apache.start.bat
call tomcat.start.bat
rem node service.install.js %HOME_PATH%
)

@IF  "%1"=="stop" (
call lite.srt.stop.bat
call mysql.stop.bat
call mongodb.stop.bat
call apache.stop.bat
call tomcat.stop.bat
rem node service.uninstall.js %HOME_PATH%
)
