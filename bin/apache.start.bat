@%HOME_PATH%\apache\bin\httpd.exe -k install -n %SERVICE_TITLE%_APACHE -f %HOME_PATH%\apache\conf\httpd.conf
@%HOME_PATH%\apache\bin\httpd.exe -k start -n %SERVICE_TITLE%_APACHE -f %HOME_PATH%\apache\conf\httpd.conf
