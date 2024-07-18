#!C:\\python310\\python.exe

import os;
import base64;
import Query;



def main():
    html  = """
    <!DOCTYPE html>
    <html>
    <head>
    <meta charset='utf-8'>
    </head>

    <body>
    """;

    print("content-type:text/html; charset=UTF-8\r\n\r\n");
    if ( os.getenv("QUERY_STRING") != None ):
        qrr = Query.CQuery()
        qrr.parsing_query(os.getenv("QUERY_STRING"))
        print(qrr.qid);
        print(qrr.qry);
        
    html += "</body>";

    print(html);


if __name__ == "__main__" :
    main();