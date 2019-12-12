function StringToBytes(arr, sz)
{
  var bytes = new Uint8Array(sz);
  var i;
  for ( i=0 ; i<sz ; i++ )
  {
    bytes[i] = arr.charCodeAt(i);
    //console.log(bytes[i].toString(16) + "," + arr.charCodeAt(i).toString(16));
  }
  return bytes;
}

function getQuery()
{
  var script = document.getElementsByTagName('script');
  script = script[script.length-1].src.replace(/^[^\?]+\?/, '').replace(/#.+$/, '').split('&')

  var queries = new Array();
  var query;

  while(script.length)
  {
    query = script.shift().split('=');
    queries[query[0]] = query[1];
  } 
  return queries; 
} 

var debug_msg = "";
function DebugPrint(arg,m)
{
  if ( m == 1 )
  {
    debug_msg += arg;
    debug_msg += " | "
  }
  else
  {
    debug_msg = arg;
  }
  $('#debug').text(debug_msg);
}
