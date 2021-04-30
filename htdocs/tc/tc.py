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

#/*****************************************************************************/
#/*                                                                           */
#/*                                                                           */
#/*                            Global Constant                                */
#/*                                                                           */
#/*                                                                           */
#/*****************************************************************************/
cgitb.enable();
sys.stdout=codecs.getwriter("UTF-8")(sys.stdout.detach());
os.environ['TZ'] = 'GMT+0'
datetime=time.strftime('%y%m%d')+'T'+time.strftime('%H%M%S')+'Z'

accesskey = "3e033dec-c94d-4c1c-905f-56158bf53590"
secretkey = "1a6e2f193eeefa1f4adc9225e75b6e96cfb6247e"


#/*****************************************************************************/
#/*                                                                           */
#/*                                                                           */
#/*                               Get Method values                           */
#/*                                                                           */
#/*                                                                           */
#/*****************************************************************************/
form = cgi.FieldStorage();
id = form.getvalue('id');
sdate = form.getvalue('sdate');
edate = form.getvalue('edate');
rjson = None;
gbody = None;



#/*****************************************************************************/
#/*                                                                           */
#/*                                                                           */
#/*                                 Coupang                                   */
#/*                                                                           */
#/*                                                                           */
#/*****************************************************************************/
def call_Coupang(mthd, sdate, edate) :
    method = mthd;
    path = '/v2/providers/travel_backbone_api/apis/ticket-api/v1/mock-up/purchasers';
    query = 'searchStartDateTime='+sdate+'000000&searchEndDateTime='+edate+'000000&offset=0&limit=100';
    message = datetime+method+path+query
    signature=hmac.new(secretkey.encode('UTF-8'),message.encode('UTF-8'),hashlib.sha256).hexdigest()
    authorization  = "CEA algorithm=HmacSHA256, access-key="+accesskey+", signed-date="+datetime+", signature="+signature
    #/*****************************************************************************/
    #/*                             Setup Request                                 */
    #/*                                                                           */
    url = "https://api-gateway.coupang.com"+path+"?"+query
    req = urllib.request.Request(url)

    req.add_header("Content-type","application/json;charset=UTF-8")
    req.add_header("Authorization",authorization)

    req.get_method = lambda: method

    ctx = ssl.create_default_context()
    ctx.check_hostname = False
    ctx.verify_mode = ssl.CERT_NONE

    #/*****************************************************************************/
    #/*                                Request                                    */
    #/*                                                                           */
    rsp = urllib.request.urlopen(req,context=ctx)
    body = rsp.read().decode(rsp.headers.get_content_charset())
    result=json.loads(body);
    return result;
#/*****************************************************************************/
#/*                                                                           */
#/*                                                                           */
#/*                              End of Coupang                               */
#/*                                                                           */
#/*                                                                           */
#/*****************************************************************************/
if id is not None :
    rjson=call_Coupang("GET", sdate='20210401', edate='20210501');




#/*****************************************************************************/
#/*                                                                           */
#/*                                                                           */
#/*                                ListView                                   */
#/*                                                                           */
#/*                                                                           */
#/*****************************************************************************/
def list(json) :
    print(json);
    print('''
    <div style='float:left;position:relative;width:100%;height:20px;background-color:transparent'></div>
    ''');
    print('''
    <div style='float:left;position:relative;width:100%;height:20px;background-color:#eeeeee'>
        <div id='title_no'           style='float:left;position:relative;width:120px;height:20px;text-align-last:center;vertical-align:middle;background-color:#ff0000;border:"1px soild red";'>no</div>
        <div id='title_social'       style='float:left;position:relative;width:150px;height:20px;text-align-last:center;vertical-align:middle;background-color:#f0f000;border:"1px solid red";'>판매자</div>
        <div id='title_ticket_no'    style='float:left;position:relative;width:350px;height:20px;text-align-last:center;vertical-align:middle;background-color:#fff000;border:"1px solid red";'>티켓번호</div>
        <div id='title_ticket_uname' style='float:left;position:relative;width:150px;height:20px;text-align-last:center;vertical-align:middle;background-color:#f00f0f;border:"1px solid red";'>구매자 이름</div>
        <div id='title_ticket_uname' style='float:left;position:relative;width:250px;height:20px;text-align-last:center;vertical-align:middle;background-color:#f0ff0f;border:"1px solid red";'>구매자 연락처</div>
        <div id='title_ticket_uname' style='float:left;position:relative;width:150px;height:20px;text-align-last:center;vertical-align:middle;background-color:#f0fff0;border:"1px solid red";'>사용 승인</div>
    </div>
    ''');


#/*****************************************************************************/
#/*                                                                           */
#/*                                                                           */
#/*                              End of ListView                              */
#/*                                                                           */
#/*                                                                           */
#/*****************************************************************************/





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
print('''
<html>
<head>
<title>Ticket Checker</title> 
<link rel="stylesheet" href="http://code.jquery.com/ui/1.8.18/themes/base/jquery-ui.css" type="text/css" /> 
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script> 
<script src="http://code.jquery.com/ui/1.8.18/jquery-ui.min.js"></script> 
<script src="cal.js"></script> 
</head>
''');


print('''
<body>
<div style='float:left;position:relative;with:900px;height:640px;background-color:#eeeeff;'>
''');

print('''
<div style='float:left;position:relative;width:100%;height:20px;background-color:#eeeeee'>
<form method='post' action='/tc/tc.py?id=0'>
''');

print('''
    <input type='text' id='sdate' name='sdate' style='float:left;position:relative;width:120px' onclick="javascript:nDatePicker(this);">
    <div style='float:left;position:relative;width:10px;'>~</div>
    <input type='text' id='edate' name='edate' style='float:left;position:relative;width:120px' onclick="javascript:nDatePicker(this);">
''');


print('''
    <div style='float:left;position:relative;width:20px;'>&nbsp;</div>
    <select name='social' style='float:left;position:relative;width:80px;text-align-last:center;vertical-align:middle;'>
    <option value='all'>모두</option>
    <option value='coupang.com'>쿠팡</option> 
    <option value='tmon.co.kr'>티몬</option> 
    <option value='wemakeprice.com'>위메프</option> 
    <option value='yanolja.com'>야놀자</option>
    </select>
''');



print('''
    <div style='float:left;position:relative;width:20px;'>&nbsp;</div>
    <div style='float:left;position:relative;width:50px;text-align-last:right;vertical-align:middle;font-size:12px;'>이름 : </div>
    <input type='text' id='uname' style='float:left;position:relative;width:120px'>
    <div style='float:left;position:relative;width:20px;'>&nbsp;</div>
    <div style='float:left;position:relative;width:50px;text-align-last:right;vertical-align:middle;font-size:12px;'>연락처 : </div>
    <input type='text' id='uphone' style='float:left;position:relative;width:120px'>
''');

print('''
    <div style='float:left;position:relative;width:20px;'>&nbsp;</div>
    <input type='submit' style='float:left;position:relative;width:120px' value='조 회'>
''');


print('''
</form>
</div>
''');



print('''
<div style='float:left;position:relative;width:100%;height:620px;'>
''');

if sdate is not None:
    print('''
        <script type="text/javascript">
            $('#sdate').val(''' + sdate + ''');
        </script>
    ''');

if edate is not None:
    print('''
        <script type="text/javascript">
            $('#edate').val(''' + edate + ''');
        </script>
    ''');

if rjson is not None :
    list(rjson);


print('''
</div>
''');


print('''
</div>
</body> 
</html>
''');




