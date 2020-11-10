//// zwebsocket must be locasted before
/**********************************************************************
<script type="text/javascript" src="/lib/jquery.js"></script>
<script type="text/javascript" src="/zlib/zwebsocket.js"></script>
<script type="text/javascript" src="/zlib/zcontainer.js"></script>
<script type="text/javascript" src="your_new_script.js"></script>
***********************************************************************/


$(document).ready(function($){
	init_container();
});

var codeXwebsocket;
var codeXContainer_callback = new Array(); //// callback array
var codeXContainer_init = new Array();     //// init array

function codeXContainer_count()
{
  return codeXContainer_init.length;
}

function codeXwscallback(b, sz)
{
  var i = 0;
  for ( i=0 ; i<codeXContainer_callback.length ; i++ )
  {
    if ( codeXContainer_callback[i] )
    {
      codeXContainer_callback[i](b, sz);
    }
  }
}

function init_container()
{
  var i = 0;
  var _ip = $('#wss_ip').text();
  var _port = $('#wss_port').text();
  
  for ( i=0 ; i<codeXContainer_init.length ; i++ )
  {
    if ( codeXContainer_init[i] )
    {
      codeXContainer_init[i]();
    }
  }
	var codeXwebsocket = new codeXWebSocket(_ip, _port, 4000, codeXwscallback);
	codeXwebsocket.connect();
  //zWebSocket_connect(zwebsocket, 4000);

}

function get_codeXWebSocket()
{
  return codeXwebsocket;
}