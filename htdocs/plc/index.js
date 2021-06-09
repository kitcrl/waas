var WebSocketServer;
var gidx = codeXContainer_count();
codeXContainer_init[gidx] = index_init;
codeXContainer_callback[gidx] = index_callback;


function debug_log(dat, sz)
{
  var dbg = ' ';
  var v = new Uint8Array(dat);

  for ( i=0 ; i<sz ; i++ )
  {
    dbg += PAD(v[i].toString(16), 2) + ' ';
  }
  $('#debug').text(dbg);
	console.log(dbg);
}

function index_init()
{
	WebSocketServer = get_codeXWebSocket();

	WebSocketServer.write(0x01020304);

}

function index_callback(dat, sz)
{
  // 02 01 01 02 03 02 01 01 02 03 02 01 01 02 03
  var v = new Uint8Array(dat);

  debug_log(dat,sz);

	//if ( WebSocketServer == null ) $('#dmsg').text('null');
}
