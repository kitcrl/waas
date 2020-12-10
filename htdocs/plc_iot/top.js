$(document).ready(function($) {
	init_board();
});

var zwebsocket = new zWebSocket();


function zsetup()
{
  
}

function zdisplay(id)
{
  
  
}

function zrefresh()
{
  
}

function init_board()
{
  zwebsocket.callback = zrefresh;
  //zWebSocket_connect(zwebsocket);

  zsetup();
	
  zdisplay(1);
 
}
