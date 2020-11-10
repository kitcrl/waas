//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
////////////////////                              ////////////////////
////////////////////                              ////////////////////
////////////////////         DO NOT MODIFY        ////////////////////
////////////////////                              ////////////////////
////////////////////                              ////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function codeXWebSocket(ip,port,delay,callback)
{

  this.callback = callback;
  this.url = "ws://"+ip+":"+port;
  this.tmr;
  this.delay = delay;
  this.socket;
  _this = this;

  this.connect = function()
  {
    this.socket=new WebSocket(this.url);
    this.socket.onopen=function()
    {
      console.log('connect');
    };
    this.socket.onmessage=function(msg)
    {
      var rdr = new FileReader();
      rdr.readAsArrayBuffer(msg.data);
      rdr.onloadend = function()
      {
        callback(rdr.result, msg.data.size);
      };
    };
    this.socket.onclose=function()
    {
      clearTimeout(_this.tmr);
      _this.tmr=setTimeout(_this.connect.bind(_this.socket),_this.delay);			
      console.log('close');
    };
  };
}


/***
function zWebSocket_init(zws)
{
	//zWebSocket_setup(zws,ip, port);
	zWebSocket_connect(zws, zws.delay);
}


function zWebSocket_connect(zws, delay)
{
  try
  {
    //여기까진 다시옴
		zws.socket=new WebSocket(zws.url);
    zws.socket.onopen=function()
    {
      console.log('connect');
    }
    zws.socket.onmessage=function(msg)
    {
		  //console.log("1");//체크함
      zWebSocket_onread(zws,msg);
    }
    zws.socket.onclose=function()
    {
			//console.log("disconnected. It will reconnect websocket, after 4seconds");
			clearTimeout(zws.tmr);
      zws.tmr=setTimeout(zWebSocket_connect,delay,zws);			
      console.log('close');
		}
  }
  catch(exception){}
  return zws;
}

function zWebSocket_onread(zws,msg)
{
  var rdr = new FileReader();
  rdr.readAsArrayBuffer(msg.data);
  rdr.onloadend = function()
  {
    zws.callback(rdr.result, msg.data.size);
  }
}


/***
  connect = function()
  {
    this.socket = new WebSocket(this.url);
    console.log('connect');
  }

  this.socket.onopen=function()
  {
  }
  this.socket.onmessage=function(msg)
  {
    read(msg);
  }
  this.socket.onclose=function()
  {
    clearTimeout(this.tmr);
    this.tmr=setTimeout(this.connect,4000,this);			
    console.log('close');
  }
  read = function(msg)
  {
    //callback(msg.data, msg.data.size);
  }
  this.write = function(msg)
  {
    this.socket.send(msg);
  }
***/


//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

