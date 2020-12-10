function zWebSocket()
{
  this.host;
  this.url;
  this.socket;
  this.port = "7810";
  this.tmr;
  this.callback;
}

function zWebSocket_connect(zws)
{
  try
  {
    var loc = location.href;
    var __url = new Array();
    var _uri = new Array();

    __url = loc.split("/");
    _uri = __url[2].split(":");

    zws.host = _uri[0];
    zws.url = "ws://" + _uri[0] + ":" + zws.port;

    zws.socket = new WebSocket(zws.url);
    zws.socket.onopen = function()
    {
    }
    zws.socket.onmessage = function(msg)
    {
      var rmsg = new Array(36);
      rmsg = msg.data;
      zWebSocket_onread(zws, rmsg);
    }

    zws.socket.onclose = function()
    {
      clearTimeout(zws.tmr);
      zws.tmr = setTimeout("zWebSocket_connect()", 4000);
    }
  }
  catch(exception)
  {
  }
  return zws;
}

function zWebSocket_onread(zws, rmsg)
{
  if ( zws.callback )
  {
    zws.callback(rmsg);
  }
}

