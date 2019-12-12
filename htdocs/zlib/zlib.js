function popup(url){
  window.open(url,'__POPUP__7810___','width=900,height=500,menubar=no,resizable=yes,titlebar=yes,toolbar=no');
}

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

function PAD(n, width) {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join('0') + n;
}
function DEGREE(a)
{
  return (a * (Math.PI/180));
}
function RAD(a)
{
  return (a * (180/Math.PI));
}

function PCoord(a)
{
  return -1*a;

}

function COMMA(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
function loadFile(id, code, f, callback)
{
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function()
  {
    if ( (xhr.readyState == 4 ) )
    {
      if ( xhr.status == 200 )
      {
        if ( callback != null ) callback(id, code, this);
      }
    }
  }
  xhr.open("GET", f, true);
  xhr.send();
}
function pickColor(ctx, x, y)
{
  var imgData = ctx.getImageData(x, y, 1, 1)
  return '#' + PAD(imgData.data[0].toString(16), 2) + PAD(imgData.data[1].toString(16), 2) + PAD(imgData.data[2].toString(16), 2);
}


function getJSQuery()
{
  var script = document.getElementsByTagName('script');
  script = script[script.length-1].src.replace(/^[^\?]+\?/, '').replace(/#.+$/, '').split('&')

  var queries = new Array();
  var query;

  while(script.length)
  {
    query = script.shift().split('=');
    queries[query[0]] = (query[1]);
  } 
  return queries; 
}

function getQuery()
{
  var _url = window.location.search.substring(1);
  var _array = _url.split('&');

  var queries = new Array();
  var query;

  while(_array.length)
  {
    query = _array.shift().split('=');
    queries[query[0]] = (query[1]);
  } 
  return queries; 
}

function getXML(obj, title, xml)
{
	var i;
	var xmlDoc = xml.responseXML;
	obj = xmlDoc.getElementsByTagName(title)[0].firstChild.data;
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
