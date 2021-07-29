const WebSocket = require('ws');

const wsd = new WebSocket.Server({port:7811});

wsd.on("connection", function(ws) {
  ws.on('message', function(message){
    var v = new Uint8Array(message);
    var dbg = '';
    for ( i=0 ; i<v.length ; i++ )
    {
      dbg += v[i] + ' ';
    }
    console.log(dbg);

  });
});
  