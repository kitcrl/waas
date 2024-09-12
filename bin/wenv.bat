li@echo off
rem -----------------------------
rem
rem   please reconfigure below variables
rem
rem -----------------------------
@set HOME_PATH=D:\waas
@set JAVA_HOME=D:\programs\jdk-16.0.1
@set JRE_HOME=D:\programs\jdk-16.0.1
@set SERVICE_TITLE=WAAS


rem -----------------------------
rem
rem   Do NOT modify..!!!!!!
rem
rem -----------------------------
@set DOC_ROOT=%HOME_PATH%\htdocs
@set APACHE_HOME=%HOME_PATH%\apache
@set TOMCAT_HOME=%HOME_PATH%\tomcat
@set CATALINA_HOME=%HOME_PATH%\tomcat
@set CATALINA_BASE=%HOME_PATH%\tomcat
@set CLASSPATH=.;%TOMCAT_HOME%/bin/bootstrap.jar;%TOMCAT_HOME%/bin/tomcat-juli.jar
@set PATH=%PATH%;%JAVA_HOME%\bin;%JRE_HOME%\bin
@set MONGODB_HOME=%HOME_PATH%\mongodb\bin
@set PHP_HOME=%HOME_PATH%\php
