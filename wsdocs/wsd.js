const WebSocket = require('ws');

const wsd = new WebSocket.Server({port:7811});

wsd.on("connection", function(ws) {
  ws.on('message', function(message){
    console.log('message ' + message);
  });
});
  