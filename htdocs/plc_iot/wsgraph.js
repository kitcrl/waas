$(document).ready(function($) {
  init_graph();
});
var zwebsocket = new zWebSocket();
var mdb = new MongoDB();
var plcv = new plcValue();

function plcValue()
{
  this.hv   = new Array(4);
  this.lv   = new Array(4);
}


function func_alert()
{
	plcv.hv = [0,0,0,0];
	plcv.lv = [0,0,0,0];
	var i = 0;
	var j =0;
	var sz = mdb.obj.length;
	for(i =0; i<sz;i++)
	{
		for(j =1; j<5; j++)
		{
      DebugPrint(mdb.obj[i].out);
			if(mdb.obj[i].out == "OUT"+j)
			{
				if(mdb.obj[i].highlow == "HIGH")
				{
					plcv.hv[j-1]++;
				}
				
				else if(mdb.obj[i].highlow == "LOW")
				{
					plcv.lv[j-1]++;
				}
			}	
		}
	}
	zGraph(plcv.hv, plcv.lv);
}

function mdb_check(jkey, jval)
{

	if(jkey == "rows")	
	{

		mdb.obj = jval;
		func_alert();
	}
}

function mdb_result(data)
{
	$.each(data, mdb_check);
}

function graph_display()
{

  mdb.wurl = "http://"+document.location.hostname+":" + mdb.port + "/" + mdb.dbname + "/" + mdb.collection + "/";
  mdb.wurl += "?callback=";
	mdb.wurl += "&limit=0";

	DebugPrint(mdb.wurl, 0);


  $.ajax({url: mdb.wurl,
          type: 'GET',
          dataType: 'jsonp',
          cache: false,
          jsonp: 'jsonp',
          crossDomain: 'true',
          success: mdb_result});

}


function page_refresh(dat)
{
  if ( dat[1] == '1' )
  {
    if ( dat[2] == 'O' ) // ON
    {
      $('#button00').css('background-color', '#00FF00');//밝
    }
    else
    {
      $('#button00').css('background-color', '#007700'); //어둡
    }
  }
  else if ( dat[1] == '2' )
  {
    if ( dat[2] == 'O' ) // ON
    {
      $('#button01').css('background-color', '#00FF00');//밝
    }
    else
    {
      $('#button01').css('background-color', '#007700'); //어둡
    }
  }
  else if ( dat[1] == '3' )
  {
    if ( dat[2] == 'O' ) // ON
    {
      $('#button02').css('background-color', '#00FF00');//밝
    }
    else
    {
      $('#button02').css('background-color', '#007700'); //어둡
    }
  }
  else if ( dat[1] == '4' )
  {
    if ( dat[2] == 'O' ) // ON
    {
      $('#button03').css('background-color', '#00FF00');//밝
    }
    else
    {
      $('#button03').css('background-color', '#007700'); //어둡
    }
  }
  graph_display();
}
function init_graph()
{
  zwebsocket.callback = page_refresh;
  zWebSocket_connect(zwebsocket);

	$.jqplot.config.enablePlugins = true;

  graph_display();
}

//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
function zGraph(hv, lv)
{
  $("#dcanvas").empty();
  $("#dcanvas").append( "<div id='chart' style='float:left;margin:10px 10px 10px 10px;width:740px;height:400px;'></div>" );
	var values = [hv[0],hv[1],hv[2],hv[3]]; //high
	var values2 = [lv[0],lv[1],lv[2],lv[3]]; //low
	var ticks = ['OUT1','OUT2','OUT3','OUT4'];
	
 
	var plot = $.jqplot ('chart', [values2,values],//,values2
		{
			title:'SUM',
			//seriesColors:['#FFBEC3','#FFE650','#EA9A56','#8F7CEE'],//,'#FF8E99','#FFC314','#D27D32','#7E6ECD'],
			seriesDefaults:{
				renderer:$.jqplot.BarRenderer,
				rendererOptions:{
					fillToZero: true
					// barPadding:7,
					// shadowDepth:2,
					// varyBarColor:true
				},
				pointLabels: {
					show:true,
					//seriesLabelIndex:true
				}
			},
			series:[
				{label:'LOW'},
				{label:'HIGH'}
			],
			legend:{
				show:true,
				placement:'insideGrid'
			},
			axes: {
				xaxis:{
					renderer: $.jqplot.CategoryAxisRenderer,
					label: "Type",
					ticks: ticks
				},
				yaxis:{
					label: "Count"
				}
			},
			highlighter: {
				show: true,
				showMarker : true,
				showTooltip: true,
				formatString: '<table class = "jqplot-highlighter">\
					<tr><td>Type: OUT%s</td></tr>\
					<tr><td>Count: %s</td></tr></table>',
			}

		}
	)
	plot.replot(values);
	plot.replot(values2);
	plot = null;
	values = null;
	values2 = null;
	ticks = null;
	//setTimeout(mdb_read,1000);
}
