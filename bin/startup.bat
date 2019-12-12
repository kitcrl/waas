@if not exist @%HOME_PATH%\mysql\data then @%HOME_PATH%\mysql\bin\mysqld.exe --initialize-insecure
@%HOME_PATH%\mysql\bin\mysqld.exe --install %SERVICE_TITLE%_SQL --defaults-file=%HOME_PATH%\mysql\my.ini
@net start %SERVICE_TITLE%_SQL