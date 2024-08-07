@%TOMCAT_HOME%\bin\tomcat9.exe //IS//%SERVICE_TITLE%_TOMCAT ^
  --Description="%SERVICE_TITLE%_TOMCAT" ^
  --DisplayName="%SERVICE_TITLE%_TOMCAT" ^
  --Install="%TOMCAT_HOME%\bin\tomcat9.exe" ^
  --Classpath="%CLASSPATH%" ^
  --StartPath="%CATALINA_HOME%" ^
  --StopPath="%CATALINA_HOME%" ^
  --StartClass=org.apache.catalina.startup.Bootstrap ^
  --StartParams=start ^
  --StopClass=org.apache.catalina.startup.Bootstrap ^
  --StopParams=stop ^
  --Startup=auto ^
  --StartMode=jvm ^
  --StopMode=jvm ^
  --Jvm="%JAVA_HOME%\bin\server\jvm.dll" ^
  --JvmOptions="-Dcatalina.home=%CATALINA_HOME%;-Dcatalina.base=%CATALINA_BASE%;-Djava.io.tmpdir=%CATALINA_BASE%\temp" ^
  --JvmMs=512m ^
  --JvmMx=512m
@sc start %SERVICE_TITLE%_TOMCAT