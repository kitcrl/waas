echo ^<?xml version="1.0" encoding="UTF-8"?^>                                                    > %TOMCAT_HOME%\conf\server.xml
echo ^<Server port="8005" shutdown="SHUTDOWN"^>                                                 >> %TOMCAT_HOME%\conf\server.xml
echo   ^<!--                                                                                    >> %TOMCAT_HOME%\conf\server.xml
echo   ^<Listener className="org.apache.catalina.startup.VersionLoggerListener" /^>             >> %TOMCAT_HOME%\conf\server.xml
echo   --^>                                                                                     >> %TOMCAT_HOME%\conf\server.xml
echo   ^<Listener className="org.apache.catalina.core.AprLifecycleListener" SSLEngine="on" /^>  >> %TOMCAT_HOME%\conf\server.xml
echo   ^<Listener className="org.apache.catalina.core.JreMemoryLeakPreventionListener" /^>      >> %TOMCAT_HOME%\conf\server.xml
echo   ^<Listener className="org.apache.catalina.mbeans.GlobalResourcesLifecycleListener" /^>   >> %TOMCAT_HOME%\conf\server.xml
echo   ^<Listener className="org.apache.catalina.core.ThreadLocalLeakPreventionListener" /^>    >> %TOMCAT_HOME%\conf\server.xml
echo   ^<GlobalNamingResources^>                                                                >> %TOMCAT_HOME%\conf\server.xml
echo     ^<Resource name="UserDatabase" auth="Container"                                        >> %TOMCAT_HOME%\conf\server.xml
echo               type="org.apache.catalina.UserDatabase"                                      >> %TOMCAT_HOME%\conf\server.xml
echo               description="User database that can be updated and saved"                    >> %TOMCAT_HOME%\conf\server.xml
echo               factory="org.apache.catalina.users.MemoryUserDatabaseFactory"                >> %TOMCAT_HOME%\conf\server.xml
echo               pathname="conf/tomcat-users.xml" /^>                                         >> %TOMCAT_HOME%\conf\server.xml
echo   ^</GlobalNamingResources^>                                                               >> %TOMCAT_HOME%\conf\server.xml
echo   ^<Service name="Catalina"^>                                                              >> %TOMCAT_HOME%\conf\server.xml
echo     ^<Connector port="8080" protocol="HTTP/1.1"                                            >> %TOMCAT_HOME%\conf\server.xml
echo                connectionTimeout="20000"                                                   >> %TOMCAT_HOME%\conf\server.xml
echo                redirectPort="8443" /^>                                                     >> %TOMCAT_HOME%\conf\server.xml
echo     ^<Connector port="8009" protocol="AJP/1.3" redirectPort="8443" /^>                     >> %TOMCAT_HOME%\conf\server.xml
echo     ^<Engine name="Catalina" defaultHost="localhost"^>                                     >> %TOMCAT_HOME%\conf\server.xml
echo       ^<Realm className="org.apache.catalina.realm.LockOutRealm"^>                         >> %TOMCAT_HOME%\conf\server.xml
echo         ^<Realm className="org.apache.catalina.realm.UserDatabaseRealm"                    >> %TOMCAT_HOME%\conf\server.xml
echo                resourceName="UserDatabase"/^>                                              >> %TOMCAT_HOME%\conf\server.xml
echo       ^</Realm^>                                                                           >> %TOMCAT_HOME%\conf\server.xml
echo       ^<Host name="localhost"  appBase="%DOC_ROOT%"                                        >> %TOMCAT_HOME%\conf\server.xml
echo             unpackWARs="true" autoDeploy="true"^>                                          >> %TOMCAT_HOME%\conf\server.xml
echo       ^<Context path="" docBase="." reloadable="true" /^>                                  >> %TOMCAT_HOME%\conf\server.xml
echo       ^<!--Valve className="org.apache.catalina.valves.AccessLogValve" directory="logs"    >> %TOMCAT_HOME%\conf\server.xml
echo            prefix="localhost_access_log" suffix=".txt"                                     >> %TOMCAT_HOME%\conf\server.xml
echo            pattern="%%h %%l %%u %%t &quot;%%r&quot; %%s %%b" /--^>                         >> %TOMCAT_HOME%\conf\server.xml
echo       ^</Host^>                                                                            >> %TOMCAT_HOME%\conf\server.xml
echo     ^</Engine^>                                                                            >> %TOMCAT_HOME%\conf\server.xml
echo   ^</Service^>                                                                             >> %TOMCAT_HOME%\conf\server.xml
echo ^</Server^>                                                                                >> %TOMCAT_HOME%\conf\server.xml
