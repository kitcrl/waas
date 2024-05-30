
call wenv.bat


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
