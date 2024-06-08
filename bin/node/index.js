///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
////////////////////////////////              /////////////////////////////////
////////////////////////////////              /////////////////////////////////
////////////////////////////////              /////////////////////////////////
////////////////////////////////              /////////////////////////////////
///////////////////////////                         ///////////////////////////
////////////////////////////                      /////////////////////////////
//////////////////////////////                  ///////////////////////////////
////////////////////////////////              /////////////////////////////////
//////////////////////////////////          ///////////////////////////////////
////////////////////////////////////     //////////////////////////////////////
////////////////////////////////////// ////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
let req_method = "";
var _wsd_periodic_proc;
var _wsd_client_fd = 0;
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
//////                                                                   //////
//////                                                                   //////
//////                           Entry Point                             //////
//////                                                                   //////
//////                                                                   //////
///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////
/*****************************************************************************/
/*****************************************************************************/
/*********************************        ************************************/
/*********************************        ************************************/
/*********************************        ************************************/
/*****************************                ********************************/
/*******************************            **********************************/
/*********************************        ************************************/
/************************************   **************************************/
/************************************* ***************************************/
/*****************************************************************************/
var common = require("./__common.js");



// var httpd = require("./out/liteio_httpd_x86_64.node");
// console.log("################################################################################");
// console.log("#                                                                              #");
// console.log("#                                                                              #");
// console.log("#                                httpd START                                   #");
// console.log("#                                                                              #");
// console.log("#                                                                              #");
// console.log("################################################################################");
// //httpd_fd = httpd.open("--httpd_port 80 --httpd_home /opt/htdocs --httpd_index index.html --httpd_size_of_buffer 1024", httpd_callback);


// console.log("################################################################################");
// console.log("################################################################################");
// console.log("################################################################################");
// console.log("################################################################################");
// console.log("################################################################################");

var wsd = require("./out/liteio_websocket_x86_64.node");
console.log("################################################################################");
console.log("#                                                                              #");
console.log("#                                                                              #");
console.log("#                               websocket START                                #");
console.log("#                                                                              #");
console.log("#                                                                              #");
console.log("################################################################################");
wsd_fd = wsd.open("--websocket_url http://127.0.0.1:8901/ --websocket_cstype SERVER --websocket_size_of_buffer 1024", wsd_callback);


var sck = require("./out/liteio_socket_x86_64.node");
console.log("################################################################################");
console.log("#                                                                              #");
console.log("#                                                                              #");
console.log("#                               socket START                                   #");
console.log("#                                                                              #");
console.log("#                                                                              #");
console.log("################################################################################");
//sck_fd = sck.open("--socket_ip 127.0.0.1 --socket_port 49243 --socket_cstype CLENT --socket_protocol TCP --socket_casttype UNICAST --socket_size_of_buffer 2048", sck_callback);
sck_fd = sck.open("--socket_ip 127.0.0.1 --socket_port 8800 --socket_cstype SERVER --socket_protocol TCP --socket_casttype UNICAST --socket_size_of_buffer 2048", sck_callback);


function toHex(v)
{
  var _v = 0;
  if ( v < 0 ) _v = 0xFFFFFFFF + v + 1;
  //return _v.toString(16).toUpperCase();
  return _v;
}

function httpd_callback(fd, buf, sz)
{

  console.log("\r\n\r\n\r\n\r\nhttpd_callback :", sz, ", ", toHex(sz));
  if ( sz <=0 )
  {
    if ( toHex(sz) == "E000FDAA" )
    {
    }
  }
  else
  {
    console.log("httpd_callback :", buf);

    html  = "HTTP/1.1 200 OK\r\n";
    html += "\r\n";

    httpd.write(fd, html, html.length);
  }
  return;
}


function wsd_callback(fd, buf, sz)
{
  console.log("\r\n\r\n\r\n\r\nwsd_callback :", sz, ", ", toHex(sz).toString(16).toUpperCase(), ", ", fd, ":", wsd_fd);

  if ( sz <=0 )
  {
    //if ( toHex(sz) == "E000FDAA" )
    if ( toHex(sz) == 0xE000FDAA )
    {
      _wsd_client_fd = fd;
    }
  }
  else
  {
    var str = "";
    buf.forEach(function(byte) {                
                  str += ('0' + (byte & 0xFF).toString(16)).slice(-2) + " ";
              });

    console.log('wsd_callback -> ', sz ,':', str);
  }
}


function sck_callback(fd, buf, sz)
{
  console.log("\r\n\r\n\r\n\r\nsck_callback :", sz, ", ", toHex(sz).toString(16).toUpperCase(), ", ", fd, ":", sck_fd);

  if ( sz <=0 )
  {
    //if ( toHex(sz) == "E000FDAA" )
    if ( toHex(sz) == 0xE000FDAA )
    {
      _wsd_client_fd = fd;
    }
  }
  else
  {
    var str = "";
    buf.forEach(function(byte) {                
                  str += ('0' + (byte & 0xFF).toString(16)).slice(-2) + " ";
              });

    console.log('sck_callback -> ', sz ,':', str);
  }
}




function wsd_periodic_proc(obj)
{
  if ( _wsd_client_fd <=  0 ) return;

  console.log("write to websocket");

  var  wsFrame = new Uint8Array(128);
  var  i = 0;
  wsFrame[i] = 0x02; i++;
  wsFrame[i] = 0x01; i++;
  wsFrame[i] = 0x04; i++;

  wsFrame[i] = 0x05; i++;
  wsFrame[i] = 0x09; i++;

  wsFrame[i] = 0xFF; i++;
  wsFrame[i] = 0xFF; i++;
  wsFrame[i] = 0xFF; i++;
  wsFrame[i] = 0xFF; i++;

  wsFrame[i] = 0x0F; i++;
  wsFrame[i] = 0xFF; i++;

  wsFrame[i] = 0x00; i++;
  wsFrame[i] = 0x4C; i++;

  wsFrame[i] = 0x02; i++;
  wsFrame[i] = 0x15; i++;
  wsFrame[i] = 0x10; i++;

  wsFrame[i] = 0xFF; i++;
  wsFrame[i] = 0xFF; i++;
  wsFrame[i] = 0xFF; i++;
  wsFrame[i] = 0xFF; i++;

  wsFrame[i] = 0x00; i++;


  wsFrame[i] = 0x00; i++;
  wsFrame[i] = 0x00; i++;

  wsFrame[i] = Math.floor(Math.random()*10)<<4 | Math.floor(Math.random()*10); i++;
  wsFrame[i] = Math.floor(Math.random()*10)<<4 | Math.floor(Math.random()*10); i++;

  wsFrame[i] = 0x00; i++;


  console.log("wsd.write");

  //var err = wsd.write(_wsd_client_fd, "Hello World", 11);
  var err = wsd.write(_wsd_client_fd, wsFrame.buffer, i);
  console.log(err, " = wsd.write : ", _wsd_client_fd);

  clearTimeout(_wsd_periodic_proc)
  _wsd_periodic_proc = setTimeout(wsd_periodic_proc, 1000, obj);
}

console.log("################################################################################");
console.log("#                                                                              #");
console.log("#                                                                              #");
console.log("#                             PERIODIC START                                   #");
console.log("#                                                                              #");
console.log("#                                                                              #");
console.log("################################################################################");
_wsd_periodic_proc = setTimeout(wsd_periodic_proc, 4000, 0);
