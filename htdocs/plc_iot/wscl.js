$(document).ready(function($) {
	init_list();
});

var zwebsocket = new zWebSocket();
var mdb = new MongoDB();

function init_variables()
{
	$('#no').css('color', '#999999');
	$('#no').css('border', '0px solid #FF0000;');
	$('#no').css('text-align', 'center');
	$('#no').text('no');

	$('#tm').css('color', '#999999');
	$('#tm').css('border', '0px solid #FF0000;');
	$('#tm').css('text-align', 'center');
	$('#tm').text('time');

	$('#title').css('color', '#999999');
	$('#title').css('border', '0px solid #FF0000;');
	$('#title').css('text-align', 'center');
	$('#title').text('type');
	
	$('#L_H').css('color', '#999999');
	$('#L_H').css('border', '0px solid #FF0000;');
	$('#L_H').css('text-align', 'center');
	$('#L_H').text('L/H');

  $('#btn_delete').click(btn_delete_click);
}

function btn_delete_click()
{
  $.ajax({url: mdb.wurl,
          type: 'DELETE',
          dataType: 'jsonp',
          cache: false,
          jsonp: 'jsonp',
          crossDomain: 'true',
          success: page_result});
}

function page_view()
{
	$("#bbs_content_row").empty();
	var sz = mdb.obj.length;
	var i=0;
	var top_1 = 1;
	var _height = 23;
	var cid = "content";
	var _cid ;

	for ( i=0 ; i<sz ; i++ )
	{
		_cid = cid + i;
		$("#bbs_content_row").append("<div id='"+_cid+"' style='position:absolute;float:left;left:1px;top:"+ (top_1+(_height*i + top_1*i))+"px;width:100%;height:"+_height+"px;background-color:#EEEEEE;'>");
		$("#"+_cid).append("<div id='no"+i+"'    style='font-size:12pt;position:relative;float:left;text-align:center;width:8.5%;height:100%;'>"+((mdb.rows)-i-(((mdb.pno-1)*10)))+"</div>");
		$("#"+_cid).append("<div id='tm"+i+"'    style='font-size:12pt;position:relative;float:left;text-align:center;width:40%;height:100%;'>"+mdb.obj[sz-i-1].date+"</div>");
		$("#"+_cid).append("<div id='title"+i+"' style='font-size:12pt;position:relative;float:left;text-align:center;width:25%;height:100%;'>"+mdb.obj[sz-i-1].out+"</div>");
		$("#"+_cid).append("<div id='L_H"+i+"'   style='font-size:12pt;position:relative;float:left;text-align:center;width:25.4%;height:100%;'>"+mdb.obj[sz-i-1].highlow+"</div>");

		$("#bbs_content_row").append("</div>");
	}
}

function page_check(k, v)
{
	if ( k == "offset" )
	{
	}
	else if ( k == "rows" )
	{
		mdb.obj = v;
	}
	else if ( k == "total_rows" )
	{
	}
	else if ( k == "query" )
	{
	}
	else if ( k == "millis" )
	{
	}
}

function page_result(data)
{
  $.each(data, page_check);
  page_view();
}

function page_button(tp, sp, ep)
{
	var pager =  "";
	var i;
	var sp;
	var query_page;
	var qry;
	
	$("#page_list").empty();
	/*
	for ( i=1 ; i<tp+1 ; i++)
	{
		$("#i").remove();
	}
	*/
	if ( mdb.pno < 4)
	{
		for ( i = 1 ; i < 6 && i < tp+1 ; i++)
		{
			if ( i == mdb.pno )
			{
				pager += "<a type='BUTTON' onclick='page_display(" + i + ")'><b>"+ i +"</b></a>";
			}
			else
			{
				pager += "<a type='BUTTON' onclick='page_display(" + i + ")'>"+ i +"</a>";
			}
		}
		if ( tp > 5 )
		{
			pager += "<a type='BUTTON' onclick='page_display(" + (mdb.pno+1) + ")'>></a><a itype='BUTTON' onclick='page_display(" + tp + ")'>>></a>";
		}
	}
	else if ( mdb.pno > tp-3 )
	{
		if ( tp-4 > 1 )
		{
			pager += "<a type='BUTTON' onclick='page_display(1)'><<</a><a itype='BUTTON' onclick='page_display(" + (mdb.pno-1) + ")'><</a>";
		}
		data = [tp-4, 1]
		sp = Math.max.apply(null,data);
		for ( i = sp ; i < tp+1 ; i++)
		{
			if ( i == mdb.pno )
			{
				pager += "<a type='BUTTON' onclick='page_display(" + i + ")'><b>"+ i +"</b></a>";
			}
			else
			{
				pager += "<a type='BUTTON' onclick='page_display(" + i + ")'>"+ i +"</a>";
			}
		}
	}
	else
	{
		pager += "<a type='BUTTON' onclick='page_display(1)'><<</a><a itype='BUTTON' onclick='page_display(" + (mdb.pno-1) + ")'><</a>";
		for (  i = sp ; i < ep+1 ; i++ )
		{
			if ( i == mdb.pno )
			{
				pager += "<a type='BUTTON' onclick='page_display(" + i + ")'><b>"+ i +"</b></a>";
			}
			else
			{
				pager += "<a type='BUTTON' onclick='page_display(" + i + ")'>"+ i +"</a>";
			}
		}  
		pager += "<a type='BUTTON' onclick='page_display(" + (mdb.pno+1) + ")'>></a><a itype='BUTTON' onclick='page_display(" + tp + ")'>>></a>";
	}

  mdb.wurl += mdb.query;

	if ( mdb.pno == mdb.tpno && (mdb.rows)%10!=0 )
	{
		mdb.wurl += "&limit="+((mdb.rows)%10);
	}
	else
	{
		mdb.wurl += "&limit=10&skip=" + ((mdb.rows)-(10*mdb.pno));
	}
  $.ajax({url: mdb.wurl,
          type: 'GET',
          dataType: 'jsonp',
          cache: false,
          jsonp: 'jsonp',
          crossDomain: 'true',
          success: page_result});
  DebugPrint(mdb.wurl, 1);
	
	$("#page_list").append("<li>" + pager + "</li>");
}


function full_count_check(k, v)
{
	if ( k == "rows" )
	{
		mdb.tobj = v;
		mdb.spno = mdb.pno - 2;
		mdb.epno = mdb.pno + 2;
		mdb.rows = mdb.tobj[0].n;
		mdb.tpno = Math.ceil(mdb.rows/10);
	}
}

function filter_count_check(k, v)
{
	if ( k == "total_rows" )
	{
		mdb.spno = mdb.pno - 2;
		mdb.epno = mdb.pno + 2;
		mdb.rows = v;
		mdb.tpno = Math.ceil(mdb.rows/10);
	}
}

function filter_count_result(data)
{
	$.each(data, filter_count_check);
	page_button(mdb.tpno, mdb.spno, mdb.epno);
  DebugPrint("filter_count_result", 1);
}

function full_count_result(data)
{
	$.each(data, full_count_check);
	page_button(mdb.tpno, mdb.spno, mdb.epno);
  DebugPrint("full_count_result", 1);
}

function page_display(no)
{
  var mdb_url;
  var mdb_ret_func;

  mdb.query = "";
  var filter = document.getElementById("filter_out").value;
  if ( filter != "")
	{
	  mdb.query += "&filter_out=" + filter;
	}

  filter = document.getElementById("filter_l_h").value; 
  if ( filter != "")
  {
    mdb.query += "&filter_highlow=" + filter;
  }

  DebugPrint(mdb.query, 0);
  mdb.pno = no;

  mdb.wurl = "http://"+document.location.hostname+":" + mdb.port + "/" + mdb.dbname + "/" + mdb.collection + "/";
  mdb.wurl += "?callback=";

	mdb.curl = "http://"+document.location.hostname+":" + mdb.port + "/" + mdb.dbname + "/$cmd/?callback=&filter_count=cmds&limit=1";

  if ( mdb.query == "" )
  {
    mdb_url = mdb.curl;
    mdb_ret_func = full_count_result;
  }
  else
  {
    mdb_url = mdb.wurl+mdb.query+"&limit=0";
    mdb_ret_func = filter_count_result;
  }

  DebugPrint(mdb_url, 1);
  
  $.ajax({url: mdb_url,
          type: 'GET',
          dataType: 'jsonp',
          cache: false,
          jsonp: 'jsonp',
          crossDomain: 'true',
          success: mdb_ret_func});
}

function page_refresh(dat)
{
  if ( dat[1] == '1' )
  {
    if ( dat[2] == 'O' ) // ON
    {
      $('#button00').css('background-color', '#00FF00');//¹à
    }
    else
    {
      $('#button00').css('background-color', '#007700'); //¾îµÓ
    }
  }
  else if ( dat[1] == '2' )
  {
    if ( dat[2] == 'O' ) // ON
    {
      $('#button01').css('background-color', '#00FF00');//¹à
    }
    else
    {
      $('#button01').css('background-color', '#007700'); //¾îµÓ
    }
  }
  else if ( dat[1] == '3' )
  {
    if ( dat[2] == 'O' ) // ON
    {
      $('#button02').css('background-color', '#00FF00');//¹à
    }
    else
    {
      $('#button02').css('background-color', '#007700'); //¾îµÓ
    }
  }
  else if ( dat[1] == '4' )
  {
    if ( dat[2] == 'O' ) // ON
    {
      $('#button03').css('background-color', '#00FF00');//¹à
    }
    else
    {
      $('#button03').css('background-color', '#007700'); //¾îµÓ
    }
  }
  
}
function ret_button(id)
{
	$(id).css('background-color', '#FFFFFF');
}

function init_list()
{
  zwebsocket.callback = page_refresh;
  zWebSocket_connect(zwebsocket);

  init_variables();
	
  page_display(1);
 
}
