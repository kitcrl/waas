#!d:\waas\python\python.exe
#-*- coding: UTF-8 -*-
import sys
import codecs
import cgi
import cgitb
import os
import time
import hmac, hashlib
import urllib.parse
import urllib.request
import ssl
import json

cgitb.enable();

#/*****************************************************************************/
#/*                                                                           */
#/*                                                                           */
#/*                                Variable                                   */
#/*                                                                           */
#/*                                                                           */
#/*****************************************************************************/
sys.stdout=codecs.getwriter("UTF-8")(sys.stdout.detach());

os.environ['TZ'] = 'GMT+0'

datetime=time.strftime('%y%m%d')+'T'+time.strftime('%H%M%S')+'Z'
method = "GET"
#replace with your own vendorId
path = '/v2/providers/travel_backbone_api/apis/ticket-api/v1/mock-up/purchasers';
query = 'searchStartDateTime=20210401000000&searchEndDateTime=20210501000000&offset=0&limit=100';

message = datetime+method+path+query

#replace with your own accesskey
accesskey = "3e033dec-c94d-4c1c-905f-56158bf53590"
#replace with your own secretKey
secretkey = "1a6e2f193eeefa1f4adc9225e75b6e96cfb6247e"


#/*****************************************************************************/
#/*                                                                           */
#/*                                                                           */
#/*                                 Logic                                     */
#/*                                                                           */
#/*                                                                           */
#/*****************************************************************************/

#********************************************************#
#authorize, demonstrate how to generate hmac signature here
signature=hmac.new(secretkey.encode('UTF-8'),message.encode('UTF-8'),hashlib.sha256).hexdigest()
authorization  = "CEA algorithm=HmacSHA256, access-key="+accesskey+", signed-date="+datetime+", signature="+signature
#print out the hmac key
#print(authorization)
#********************************************************#

# ************* SEND THE REQUEST *************
url = "https://api-gateway.coupang.com"+path+"?"+query
req = urllib.request.Request(url)

req.add_header("Content-type","application/json;charset=UTF-8")
req.add_header("Authorization",authorization)

req.get_method = lambda: method

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE




#/******************************************************************************/
#/*                                                                            */
#/*                                                                            */
#/*                                  Request                                   */
#/*                                                                            */
#/*                                                                            */
#/******************************************************************************/
rsp = urllib.request.urlopen(req,context=ctx)
body = rsp.read().decode(rsp.headers.get_content_charset())
rjson = json.loads(body);

#/******************************************************************************/
#/*                                                                            */
#/*                                                                            */
#/*                                    HTML                                    */
#/*                                                                            */
#/*                                                                            */
#/******************************************************************************/


print("Content-type: text/html;charset=UTF-8\r\n");
#/******************************************************************************/
#/*                                   HEAD                                     */
#/******************************************************************************/
html_head='''
<html>
<head>
<title>Ticket Checker</title> 
<link rel="stylesheet" href="http://code.jquery.com/ui/1.8.18/themes/base/jquery-ui.css" type="text/css" /> 
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script> 
<script src="http://code.jquery.com/ui/1.8.18/jquery-ui.min.js"></script> 
<script src="cal.js"></script> 
</head>
''';


html_body='''
<body>
''';

html_body+='''
<div style='float:left;position:relative;with:1500px;height:20px;background-color:#eeeeee'>
''';

html_body+='''
    <input type='text' id='startDate' style='float:left;position:relative;width:200px' onclick="javascript:nDatePicker(this);">
    <div style='float:left;position:relative;width:10px;'>~</div>
    <input type='text' id='endDate' style='float:left;position:relative;width:200px' onclick="javascript:nDatePicker(this);">
''';


html_body+='''
    <div style='float:left;position:relative;width:50px;'>&nbsp;</div>
    <select name='social' style='float:left;position:relative;width:120px;text-align-last:center;vertical-align:middle;'>
    <option value='all'>모두</option>
    <option value='coupang.com'>쿠팡</option> 
    <option value='tmon.co.kr'>티몬</option> 
    <option value='wemakeprice.com'>위메프</option> 
    <option value='yanolja.com'>야놀자</option>
    </select>
''';



html_body+='''
    <div style='float:left;position:relative;width:50px;'>&nbsp;</div>
    <div style='float:left;position:relative;width:50px;text-align-last:right;vertical-align:middle;font-size:12px;'>이름 : </div>
    <input type='text' id='uname' style='float:left;position:relative;width:200px'>
    <div style='float:left;position:relative;width:50px;'>&nbsp;</div>
    <div style='float:left;position:relative;width:80px;text-align-last:right;vertical-align:middle;font-size:12px;'>연락처 : </div>
    <input type='text' id='uphone' style='float:left;position:relative;width:200px'>
''';

html_body+='''
    <div style='float:left;position:relative;width:50px;'>&nbsp;</div>
    <input type='button' style='float:left;position:relative;width:120px' value='조 회'>
''';


html_body+='''
</div>
''';


html_body+='''
<hr>
</body> 
</html>
''';

htmls = html_head + html_body;
#htmls = htmls.decoding('cp949').encoding('utf-8');

print(htmls);




