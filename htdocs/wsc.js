const WebSocket = require('ws');

const wsdr = new WebSocket.Server({port:7811});

wsdr.on("connection", function(ws) {
  ws.on('message', function(message){
    var v = new Uint8Array(message);
    var dbg = '';
    for ( i=0 ; i<v.length ; i++ )
    {
      dbg += v[i] + ' ';
    }
    console.log(dbg);
    wsdw.send(v);
  });
});
  

const wsdw = new WebSocket.Server({port:7810});

wsdw.on("connection", function(ws) {
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
  