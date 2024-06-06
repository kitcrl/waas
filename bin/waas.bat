call wenv.bat

@IF  "%1"=="config" (
call config.bat
)



@IF  "%1"=="start" (
call mongodb.start.bat
call mysql.start.bat
call apache.start.bat
call tomcat.start.bat
rem node service.install.js
)

@IF  "%1"=="stop" (
call mysql.stop.bat
call mongodb.stop.bat
call apache.stop.bat
call tomcat.stop.bat
rem node service.uninstall.js
)
