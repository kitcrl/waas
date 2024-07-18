#!C:\\python310\\python.exe

import os;
import numpy as np;
import tensorflow as tf;


print("content-type:text/html; charset=UTF-8\r\n\r\n");


if ( os.getenv("QUERY_STRING") != None ):
    os.getenv("QUERY_STRING");


html  = """
<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8'>
</head>

<body>

Hello
""";




html += "</body>";





print(html);