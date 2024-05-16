@IF  "%1"=="start" (
mongodb.start.bat
mysql.start.bat
apache.start.bat
tomcat.start.bat
rem node service.install.js
)

@IF  "%1"=="stop" (
mysql.stop.bat
mongodb.stop.bat
apache.stop.bat
tomcat.stop.bat
rem node service.uninstall.js
)
