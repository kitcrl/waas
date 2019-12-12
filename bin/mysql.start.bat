@%HOME_PATH%\mysql\bin\mysqld.exe --initialize-insecure --default-authentication-plugin=mysql_native_password --default-password-lifetime=0 2> nul
@%HOME_PATH%\mysql\bin\mysqld.exe --install %SERVICE_TITLE%_SQL --no-defaults 2> nul
@net start %SERVICE_TITLE%_SQL