#!D:\\waas\\python\\python.exe

import os;

print("content-type:text/html; charset=UTF-8\r\n\r\n");

html  = "<!DOCTYPE html>\n";
html += "<html>\n";
html += "<head>\n";
html += "<meta charset='utf-8'>";
html += "</head>";

html += "<body>";

if ( os.getenv("QUERY_STRING") != None ):
    html += os.getenv("QUERY_STRING");




html += "</body>";





print(html);