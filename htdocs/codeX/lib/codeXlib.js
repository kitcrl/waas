function popup(url){
  window.open(url,'__POPUP__7810___','width=900,height=500,menubar=no,resizable=yes,titlebar=yes,toolbar=no');
}

function GetNumberPart(str)
{
  var rstr = '';
  for ( i=0 ; i < str.length ; i++ )
  {
    if ( (str.substring(i, i+1) >= '0') && (str.substring(i, i+1) <= '9') )
    {
      rstr += str.substring(i, i+1);
    }
  }
  return parseInt(rstr);
}
function GetNonNumberPart(str)
{
  var rstr = '';
  for ( i=0 ; i < str.length ; i++ )
  {
    if ( ! ( (str.substring(i, i+1) >= '0') && (str.substring(i, i+1) <= '9') ) )
    {
      rstr += str.substring(i, i+1);
    }
  }
  return (rstr);
}

function Utf8ArrayToStr(array)
{
  var out, i, len, c;
  var char2, char3;

  out = "";
  len = array.length;
  i = 0;

  while(i < len)
  {
    c = array[i++];
    switch(c >> 4)
    { 
      case 0: case 1: case 2: case 3: case 4: case 5: case 6: case 7:
        // 0xxxxxxx
        out += String.fromCharCode(c);
        break;
      case 12: case 13:
        // 110x xxxx   10xx xxxx
        char2 = array[i++];
        out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
        break;
      case 14:
        // 1110 xxxx  10xx xxxx  10xx xxxx
        char2 = array[i++];
        char3 = array[i++];
        out += String.fromCharCode(((c & 0x0F) << 12) |
        ((char2 & 0x3F) << 6) |
        ((char3 & 0x3F) << 0));
        break;
    }
  }
  return out;
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

  try
  {
    xhr.onreadystatechange = function()
    {
      if ( (xhr.readyState === 4 ) )
      {
        if ( xhr.status === 200 )
        {
          if ( callback != null ) callback(id, code, this);
        }
      }
    }
    xhr.open("GET", f, true);
    xhr.send();
  }
  catch(e)
  {
  }
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

function valueRotate(index, max, inc_dec)
{
  return index = (((index+inc_dec)+(max+1))%(max+1))
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
