//// zwebsocket must be locasted before
/**********************************************************************
<script type="text/javascript" src="lib/jquery.js"></script>
<script type="text/javascript" src="zlib/zwebsocket.js"></script>
<script type="text/javascript" src="zlib/zcontainer.js"></script>
<script type="text/javascript" src="your_new_script.js"></script>
***********************************************************************/
$(document).ready(function($){
	init_container();
});

var zwebsocket;
var zContainer_callback = new Array(); //// callback array
var zContainer_init = new Array();     //// init array

function zwscallback(ab, sz)
{
  var i = 0;
  for ( i=0 ; i<zContainer_callback.length ; i++ )
  {
    if ( zContainer_callback[i] )
    {
      zContainer_callback[i](ab, sz);
    }
  }
}

function init_container()
{
  var i = 0;
  var _ip = $('#wss_ip').text();
  var _port = $('#wss_port').text();
  
  for ( i=0 ; i<zContainer_init.length ; i++ )
  {
    if ( zContainer_init[i] )
    {
      zContainer_init[i]();
    }
  }
	zwebsocket = new zWebSocket();

	zWebSocket_init(zwebsocket, _ip, _port, zwscallback);
}

