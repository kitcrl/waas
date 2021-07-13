@set HOME_PATH=C:\waas
@set JAVA_HOME=D:\programs\jdk-16.0.1
@set JRE_HOME=D:\programs\jdk-16.0.1
@set SERVICE_TITLE=WAAS

@set DOC_ROOT=%HOME_PATH%\htdocs
@set APACHE_HOME=%HOME_PATH%\apache
@set TOMCAT_HOME=%HOME_PATH%\tomcat
@set CATALINA_HOME=%HOME_PATH%\tomcat
@set CATALINA_BASE=%HOME_PATH%\tomcat
@set CLASSPATH=.;%TOMCAT_HOME%/bin/bootstrap.jar;%TOMCAT_HOME%/bin/tomcat-juli.jar
@set PATH=%PATH%;%JAVA_HOME%\bin;%JRE_HOME%\bin
@set MONGODB_HOME=%HOME_PATH%\mongodb\bin
@set PHP_HOME=%HOME_PATH%\php

@IF  "%1"=="config" (
@if not exist then mkdir %HOME_PATH%\htdocs
@if not exist then mkdir %HOME_PATH%\apache\logs
@if not exist then mkdir %HOME_PATH%\mongodb\log
@if not exist then mkdir %HOME_PATH%\mongodb\data
@if not exist then mkdir %HOME_PATH%\mongodb\data\diagnostic.data
@if not exist then mkdir %HOME_PATH%\mongodb\data\journal
@if not exist then mkdir %HOME_PATH%\mysql\data
apache.config.bat
tomcat.config.bat
mongodb.config.bat
mysql.config.bat
)

@IF  "%1"=="start" (
mongodb.start.bat
mysql.start.bat
apache.start.bat
tomcat.start.bat
)

@IF  "%1"=="stop" (
mysql.stop.bat
mongodb.stop.bat
apache.stop.bat
tomcat.stop.bat
)
