var gidx = codeXContainer_count();
codeXContainer_init[gidx] = index_init;
codeXContainer_callback[gidx] = index_callback;

var timer_proc;
var wsd;
var count = 4;

function index_timer_proc(obj)
{
	console.log("index_timer_proc " + count);
	count--;
	if ( count == 0 )
	{
		wsd.write("Hello" + count);
		console.log("wsd.write Hello");
		count = 4;
	}
  clearTimeout(timer_proc)
  timer_proc = setTimeout(index_timer_proc, 1000, obj);
}

function index_init()
{
	wsd = get_codeXWebSocket();
	console.log("index_init");
  timer_proc = setTimeout(index_timer_proc, 1000, 0);
}

function index_callback(dat, sz)
{
  var v = new Uint8Array(dat);
	console.log("index_callback");

  return;

}
