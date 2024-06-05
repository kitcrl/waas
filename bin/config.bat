call wenv.bat


@if not exist then mkdir %HOME_PATH%\htdocs
@if not exist then mkdir %HOME_PATH%\apache\logs
@if not exist then mkdir %HOME_PATH%\mongodb\log
@if not exist then mkdir %HOME_PATH%\mongodb\data
@if not exist then mkdir %HOME_PATH%\mongodb\data\diagnostic.data
@if not exist then mkdir %HOME_PATH%\mongodb\data\journal
@if not exist then mkdir %HOME_PATH%\mysql\data

echo "apache configuration"
call apache.config.bat


echo "php configuration"
call php.config.bat


echo "tomcat configuration"
call tomcat.config.bat


echo "mongodb configuration"
call mongodb.config.bat


echo "mysql configuration"
call mysql.config.bat
