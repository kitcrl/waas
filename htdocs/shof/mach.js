/******
 2020.11.11.17.58
*******/
var TOTAL = 1000;
function displayValues()
{
  this.total = TOTAL;
  this.processing = 0;
  this.bad = 0;
  this.sucess = 0;
  this.fail = 0;
  this.prevalue = 0;

  this.name = 0;
  this.msg = 0;
  this.xml =
  {
    name : 0,
    img : 0,
    amount : 0,
    msg : 0,
    idx : 0,
    work : [
    {"time" : 0, "manager" : 0, "worker" : 0 },
    {"time" : 0, "manager" : 0, "worker" : 0 },
    {"time" : 0, "manager" : 0, "worker" : 0 },
    ],
  };
  this.design = 'A';
  this.runTimeStatus = "<div id='runTimeStatus' class='top' style='width:700px;height:210px;'></div>";

}

var d = 0;
var dp = new displayValues();
var XMLInfo = new Array();
var wtime = new Array();
var dtime = new Array();
var q = getQuery();
var g_rfid_idx = 0;
var g_dtm = 0;
var gKey = codeXContainer_count();
codeXContainer_init[gKey] = mach_init;
codeXContainer_callback[gKey] = mach_callback;
var  mach_proc_XX = new Array(22);

function set_mach_proc_XX()
{
  var i = 0;
  mach_proc_XX[i][0] = mach_proc_00;
  mach_proc_XX[i][1] = 0;
  mach_proc_XX[i][2] = 0;
  mach_proc_XX[i][3] = 0;
  i++;

  mach_proc_XX[i][0] = mach_proc_01;
  mach_proc_XX[i][1] = 0;
  mach_proc_XX[i][2] = 0;
  mach_proc_XX[i][3] = 0;
  i++;

  mach_proc_XX[i][0] = mach_proc_02;
  mach_proc_XX[i][1] = 0;
  mach_proc_XX[i][2] = 0;
  mach_proc_XX[i][3] = 0;
  i++;

  mach_proc_XX[i][0] = mach_proc_03;
  mach_proc_XX[i][1] = 0;
  mach_proc_XX[i][2] = 0;
  mach_proc_XX[i][3] = 0;
  i++;

  mach_proc_XX[i][0] = mach_proc_04;
  mach_proc_XX[i][1] = 0;
  mach_proc_XX[i][2] = 0;
  mach_proc_XX[i][3] = 0;
  i++;

  mach_proc_XX[i][0] = mach_proc_05;
  mach_proc_XX[i][1] = 0;
  mach_proc_XX[i][2] = 0;
  mach_proc_XX[i][3] = 0;
  i++;

  mach_proc_XX[i][0] = mach_proc_06;
  mach_proc_XX[i][1] = mach_proc_06;
  mach_proc_XX[i][2] = mach_proc_06;
  mach_proc_XX[i][3] = 0;
  i++;

  mach_proc_XX[i][0] = mach_proc_07;
  mach_proc_XX[i][1] = 0;
  mach_proc_XX[i][2] = 0;
  mach_proc_XX[i][3] = 0;
  i++;

  mach_proc_XX[i][0] = mach_proc_08;
  mach_proc_XX[i][1] = 0;
  mach_proc_XX[i][2] = 0;
  mach_proc_XX[i][3] = 0;
  i++;

  mach_proc_XX[i][0] = mach_proc_09;
  mach_proc_XX[i][1] = 0;
  mach_proc_XX[i][2] = 0;
  mach_proc_XX[i][3] = 0;
  i++;

  mach_proc_XX[i][0] = mach_proc_10;
  mach_proc_XX[i][1] = 0;
  mach_proc_XX[i][2] = 0;
  mach_proc_XX[i][3] = 0;
  i++;

  mach_proc_XX[i][0] = mach_proc_11;
  mach_proc_XX[i][1] = 0;
  mach_proc_XX[i][2] = 0;
  mach_proc_XX[i][3] = 0;
  i++;

  mach_proc_XX[i][0] = mach_proc_12;
  mach_proc_XX[i][1] = 0;
  mach_proc_XX[i][2] = 0;
  mach_proc_XX[i][3] = 0;
  i++;

  mach_proc_XX[i][0] = mach_proc_13;
  mach_proc_XX[i][1] = 0;
  mach_proc_XX[i][2] = 0;
  mach_proc_XX[i][3] = 0;
  i++;

  mach_proc_XX[i][0] = mach_proc_14;
  mach_proc_XX[i][1] = 0;
  mach_proc_XX[i][2] = 0;
  mach_proc_XX[i][3] = 0;
  i++;

  mach_proc_XX[i][0] = mach_proc_15;
  mach_proc_XX[i][1] = 0;
  mach_proc_XX[i][2] = 0;
  mach_proc_XX[i][3] = 0;
  i++;

  mach_proc_XX[i][0] = mach_proc_16;
  mach_proc_XX[i][1] = 0;
  mach_proc_XX[i][2] = 0;
  mach_proc_XX[i][3] = 0;
  i++;

  mach_proc_XX[i][0] = mach_proc_17;
  mach_proc_XX[i][1] = 0;
  mach_proc_XX[i][2] = 0;
  mach_proc_XX[i][3] = 0;
  i++;

  mach_proc_XX[i][0] = mach_proc_18;
  mach_proc_XX[i][1] = 0;
  mach_proc_XX[i][2] = 0;
  mach_proc_XX[i][3] = 0;
  i++;

  mach_proc_XX[i][0] = mach_proc_19;
  mach_proc_XX[i][1] = 0;
  mach_proc_XX[i][2] = 0;
  mach_proc_XX[i][3] = 0;
  i++;

  mach_proc_XX[i][0] = mach_proc_20;
  mach_proc_XX[i][1] = 0;
  mach_proc_XX[i][2] = 0;
  mach_proc_XX[i][3] = 0;
  i++;

  mach_proc_XX[i][0] = mach_proc_21;
  mach_proc_XX[i][1] = 0;
  mach_proc_XX[i][2] = 0;
  mach_proc_XX[i][3] = 0;
  i++;
}
function window_resize()
{
  var _w = 1220;
  var _h = 660;

  var w = screen.availWidth;
  var h = screen.availHeight;
  self.moveTo( (w-_w)/2, (h-_h)/2 )
  self.resizeTo(_w, _h);
}



function mach_init()
{
  window_resize();

  for ( i=0; i<mach_proc_XX.length ; i++ )
  {
    mach_proc_XX[i] = new Array(5);
  }
	set_mach_proc_XX();

  wtime[0] = wtime[1] = 0;
  dtime[0] = dtime[1] = 0;
  dp.prevalue = 0;

  setStatus();


}


function mach_init_complete()
{
  var doc = "";
  var i;

  //if ( dp.xml.amount == 0 ) alert('load error');
  for ( i=0 ; i<dp.xml.amount ; i++ )
  {
    doc += '<div style="width:100%;background-color:transparent;border:0px solid #F0FF00;cursor:pointer;" ';
    doc += 'onclick=\"';
    doc += 'window.open(\'mach.html?key=';
    doc += q.key;
    doc += '&skey=0&sid=';
    doc += i;
    doc += '\','
    doc += '\'_self\');\" >';
      doc += '<div style="float:left;position:relative;width:60%;background-color:transparent;border:0px solid #F0FF00;">';
        doc += '<div id="mach_id';
        doc += i;
        doc += '" style="float:left;width:100%;height:80px;text-align:center;background:';
        doc += 'url('+dp.xml.img+') no-repeat center;';
        doc += 'background-size:contain;';
        doc += 'background-color:transparent';
        doc += '">';
        doc += '</div>';
        doc += '<div id="mach_title';
        doc += i;
        doc += '"><b>';
        doc += dp.xml.name;
        if ( dp.xml.amount >1 )
        {
          doc += " ";
          doc += i+1;
        }
        doc += '</b>';
        doc += '</div>';
      doc += '</div>';
      doc += '<div id="tab_title"';
      doc += i;
      doc += ' style="float:left;position:relative;width:30%;height:100%;vertical-align:middle;background-color:transparent;margin:40px 0px 0px 0px">';
      if ( q.sid == i )
      {
        doc += '<div style=color:#22FF22>';
        doc += "Connected";
        doc += '</div>';
      }
      else
      {
        doc += "Disonnected";
      }
      doc += '</div>';
    doc += '</div>';
    doc += '<div style="float:left;position:relative;width:100%;height:10px;"></div>';

  }

  $('#mach_info').html(doc).show();

  if ( dp.xml.msg != '' )
    $('#M_text00').text(dp.xml.msg);

  DrawBackgroundGraph();

}


function DrawBackgroundGraph()
{
  if ( q.key == 0 )
  {
    DrawCWGraph('GraphCW');
    DrawCCWGraph('GraphCCW');
  }
  else if ( q.key == 1 )
  {
  }
  else if ( q.key == 2 )
  {
    DrawVisionStatusGraph('RTR');
  }
  else if ( q.key == 3 )
  {
    DrawCutterStatusAcceptGraph('RTR');
    DrawCutterStatusDefectGraph('RTL');
  }
  else if ( q.key == 4 )
  {
    DrawRobotStatusDiagram00('RTL00');
    DrawRobotStatusDiagram01('RTL01');
    DrawRobotStatusDiagram02('RTL02');
  
    DrawRobotStatusDiagram10('RTL10');
    DrawRobotStatusDiagram11('RTL11');
    DrawRobotStatusDiagram12('RTL12');
  }
  else if ( q.key == 5 )
  {
    DrawC3DPrintProgress0('RTR0');
    DrawC3DPrintProgress1('RTR1');
    DrawC3DPrintProgress2('RTR2');
    DrawC3DPrintProgress3('RTR3');
  }
  else if ( q.key == 6 )
  {
    DrawStorageStatusGraph('RTR');
    DrawStorageNodeStatusGraph('RTL');
  }
  else if ( q.key == 7 )
  {
    DrawPressureStatusGraph('RTR');
    DrawPressureStatusGraphQuard('RTL');
  }
  else if ( q.key == 8 )
  {
    DrawCWGraph('GraphCW');
    DrawCCWGraph('GraphCCW');
  }
  else if ( q.key == 9 )
  {
    DrawCWGraph('GraphCW');
    DrawCCWGraph('GraphCCW');
  }


  else if ( q.key == 1000 )
  {
  }
  else if ( q.key == 1001 )
  {
  }
  else if ( q.key == 1002 )
  {
  }
  else if ( q.key == 1003 )
  {
  }
  else if ( q.key == 1004 )
  {
  }
  else if ( q.key == 1005 )
  {
    DrawPunchingStatusGraph('RTR');
    DrawPunchingStatusGraphQuard('RTL');
  }
  else if ( q.key == 1006 )
  {
  }
  else if ( q.key == 1007 )
  {
  }
  else if ( q.key == 1008 )
  {
  }
  else if ( q.key == 1009 )
  {
    DrawMultiGraph('RT00');
    DrawMultiQuantityGraph('RT01');
  }
  else if ( q.key == 1010 )
  {
    DrawVisionStatusGraph('RTR');
  }
  else if ( q.key == 1011 )
  {
    DrawGoodPrdGraph('RTR');
    DrawBadPrdGraph('RTL');
    $('#M_text00').css('font-size', '20px');
  }
}




function DrawStrorageStatusDiagram(id, stop_count)
{
  var doc = '';
  for ( i=0 ; i<5 ; i++ )
  {
    doc += '<div style="float:left;position:relative;width:100%;height:5px;"></div>';
    doc += '<div style="float:left;position:relative;width:100%;height:40px;">';
    for ( j=0 ; j<5 ; j++ )
    {
      doc += '<div style="float:left;position:relative;width:5px;height:100%;background-color:transparent"></div>';
      doc += '<div style="float:left;position:relative;width:40px;height:100%;">';
        doc += '<div id="storage_status_' + PAD(i+j,2) + '" ';
        doc += 'style="float:left;position:relative;width:100%;height:100%;border-radius:15px;';
        if ( stop_count > (i+j) )
        {
          doc += 'background-color:#FFAAAA;">';
        }
        else
        {
          doc += 'background-color:#AAFFAA;">';
        }
        doc += '</div>';
      doc += '</div>';
      doc += '<div style="float:left;position:relative;width:5px;height:100%;background-color:transparent"></div>';
    }
    doc += '</div>';
    if ( i<7 )
      doc += '<div style="float:left;position:relative;width:100%;height:5px;"></div>';
  }
  $('#' + id).html(doc).show();
}

function onLoadHTML(id, code, a)
{
  $('#' + id).html(a.responseText).show();
}

function onLoadXML(id, code, a)
{
  var xml = a.responseXML;

  try
  {
    dp.xml.name = xml.getElementsByTagName(id)[0].getElementsByTagName('name')[0].firstChild.data;
    dp.xml.img = xml.getElementsByTagName(id)[0].getElementsByTagName('image')[0].firstChild.data;
    dp.xml.msg = xml.getElementsByTagName(id)[0].getElementsByTagName('message')[0].firstChild.data;
    dp.xml.amount = xml.getElementsByTagName(id)[0].getElementsByTagName('amount')[0].firstChild.data;
    dp.xml.work[0]['time']    = xml.getElementsByTagName(id)[0].getElementsByTagName('work')[0].getElementsByTagName('time')[0].firstChild.data;
    dp.xml.work[0]['manager'] = xml.getElementsByTagName(id)[0].getElementsByTagName('work')[0].getElementsByTagName('manager')[0].firstChild.data;
    dp.xml.work[0]['worker']  = xml.getElementsByTagName(id)[0].getElementsByTagName('work')[0].getElementsByTagName('worker')[0].firstChild.data;
    dp.xml.work[1]['time']    = xml.getElementsByTagName(id)[0].getElementsByTagName('work')[1].getElementsByTagName('time')[0].firstChild.data;
    dp.xml.work[1]['manager'] = xml.getElementsByTagName(id)[0].getElementsByTagName('work')[1].getElementsByTagName('manager')[0].firstChild.data;
    dp.xml.work[1]['worker']  = xml.getElementsByTagName(id)[0].getElementsByTagName('work')[1].getElementsByTagName('worker')[0].firstChild.data;
    dp.xml.work[2]['time']    = xml.getElementsByTagName(id)[0].getElementsByTagName('work')[2].getElementsByTagName('time')[0].firstChild.data;
    dp.xml.work[2]['manager'] = xml.getElementsByTagName(id)[0].getElementsByTagName('work')[2].getElementsByTagName('manager')[0].firstChild.data;
    dp.xml.work[2]['worker']  = xml.getElementsByTagName(id)[0].getElementsByTagName('work')[2].getElementsByTagName('worker')[0].firstChild.data;
  
    dp.xml.amount = Number(dp.xml.amount);
  }
  catch(exp)
  {

  }
}

function changeDesign(n)
{
  if( n == 1 )
  {
      dp.design = 'A';
      $('#runTimeStatus').css('visibility' , 'visible');
  }
  else if( n == 2 )
  {
      dp.design = 'C';
      $('#runTimeStatus').css('visibility' , 'hidden');
  }
  else if( n == 3 )
  {
      dp.design = 'C';
      $('#runTimeStatus').css('visibility' , 'hidden');
  }
}

function drawRightPane(id, key, a)
{
  var xml = a.responseXML;
  var i=0;
  var ii=0;
  var limit=1;
  var menu = '<div>';

  if ( key < 1000 )
  {
    for ( i=0 ; i<8 ;i++ )
    {
      if ( i==6 ) limit = 3;
      else limit = 1;

      for ( ii=0 ; ii<limit ; ii++ )
      {
        name = xml.getElementsByTagName('mach' + i + '_' + ii)[0].getElementsByTagName('name')[0].firstChild.data;
        menu += "<div class='menu1'";
        if ( q.key == i && q.skey == ii ) menu += " style='opacity:1.0'";
        else   menu += " style='opacity:0.5'";
        menu += " onclick='window.open(\"mach.html?key=" + i + "&skey=" + ii + "&sid=0\", \"_self\");'>" + name +"</div>";
      }
    }
  }
  else
  {
    for ( i=1000 ; i<1012 ;i++ )
    {
      name = xml.getElementsByTagName('mach' + i + '_' + ii )[0].getElementsByTagName('name')[0].firstChild.data;
      menu += "<div class='menu2'";
      if ( q.key == i ) menu += " style='opacity:1.0'";
      else   menu += " style='opacity:0.5'";
      menu += " onclick='window.open(\"mach.html?key=" + i + "&skey=" + ii + "&sid=0\", \"_self\");'>" + name +"</div>";
    }
  }
  menu += '</div>';
  $('#' + id).html(menu).show();
  mach_init_complete();

}




function setStatus()
{
  var fname = "mach";
  var i = q.key;
  var ii = q.skey;
  if ( q.key >= 1000 ) i = q.key - 990;

  loadFile("mach" + q.key + '_' + ii, 0, fname + ".xml", onLoadXML);
  loadFile("centerPaneContent", 0, fname + "_" + i +".html", onLoadHTML);
  loadFile("runTimeStatus", 0, fname + "_" + i + "_" + ii +".html", onLoadHTML);
  loadFile('rightPaneMenu', q.key , "mach.xml", drawRightPane);
  $('#design00').text('디자인' + dp.design);
}

/**************************************************************************
function setWorkingTime(sr)
{
  dtime[1] = new Date();


  if ( dtime[0] == 0 ) dtime[0] = dtime[1];

  hour = dtime[1].getHours();
  min = dtime[1].getMinutes();
  sec = dtime[1].getSeconds();

  if ( wtime[0] == 0 )
  {
    wtime[0] = PAD(hour,2) + ':' + PAD(min,2) + ':' + PAD(sec,2);
  }
  wtime[1] = PAD(hour,2) + ':' + PAD(min,2) + ':' + PAD(sec,2);

  if ( sr == 0x00 ) $('#times3').text( wtime[1] );
  if ( sr == 0x02 ) $('#times2').text( wtime[0] );

  wtime[0] = wtime[1];

  g_dtm = Math.round((dtime[1].getTime() - dtime[0].getTime())/1000)*1000;

  tm = new Date( g_dtm );


  hour = tm.getHours()-9;
  min = tm.getMinutes();
  sec = tm.getSeconds();

  $('#times4').text( PAD(hour,2) + ':' + PAD(min,2) + ':' + PAD(sec,2) );

  //console.log(g_dtm + ', ' + PAD(hour,2) + ':' + PAD(min,2) + ':' + PAD(sec,2));

  //console.log(  $('#times4').text( PAD(hour,2) + ':' + PAD(min,2) + ':' + PAD(sec,2) ) );



  dtime[0] = dtime[1];

}
*********************************************************************************/
function setWorkingTime(sr)
{
  if ( sr == 0x00 )
  {
    dtime[0] = new Date();
    hour = dtime[0].getHours();
    min = dtime[0].getMinutes();
    sec = dtime[0].getSeconds();
    wtime[0] = PAD(hour,2) + ':' + PAD(min,2) + ':' + PAD(sec,2);
    $('#times3').text( wtime[0] );
  }
  else if ( sr == 0x02 )
  {
    dtime[1] = new Date();
    hour = dtime[1].getHours();
    min = dtime[1].getMinutes();
    sec = dtime[1].getSeconds();
    wtime[1] = PAD(hour,2) + ':' + PAD(min,2) + ':' + PAD(sec,2);
    $('#times2').text( wtime[1] );

    $('#times3').text( "00:00:00" );
    $('#times4').text( "00:00:00" );

    dtime[0] = 0;
  }

  if ( (dtime[0]!=0) && (dtime[1]!=0) )
  {
    g_dtm = Math.round((dtime[0].getTime() - dtime[1].getTime())/1000)*1000;
    tm = new Date( g_dtm );
    hour = tm.getHours()-9;
    min = tm.getMinutes();
    sec = tm.getSeconds();

    if ( hour >= 0 ) $('#times4').text( PAD(hour,2) + ':' + PAD(min,2) + ':' + PAD(sec,2) );
    else $('#times4').text( PAD(0,2) + ':' + PAD(0,2) + ':' + PAD(0,2) );
  }
}


///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

function debug_log(dat, sz)
{
  var dbg = ' ';
  var v = new Uint8Array(dat);

  for ( i=0 ; i<sz ; i++ )
  {
    dbg += PAD(v[i].toString(16), 2) + ' ';
  }
  console.log(dbg);
}

function is_changed_prod_rate(v, i, ii)
{
  dp.success = 0.0;
  dp.fail = 0.0;
  dp.processing = v[4]*256 + v[5];
  dp.bad = v[15]*256 + v[16];
  dp.total = dp.processing + dp.bad;

  if( dp.total == 0 ) dp.fail = 0;
  else dp.fail = (dp.bad/TOTAL)*100;

  if( dp.total == 0 ) dp.total = 0;
  else dp.success = ( dp.processing/TOTAL)*100; 


  return v[17];


  /****
  if ( dp.prevalue != dp.processing )
  {
    dp.prevalue = dp.processing;
    r = true;
  }
  ****/
}

  

function mach_proc_00(v, i, ii)
{
  if ( q.key != i ) return;

  if ( (q.key==0) && (q.sid==0) && ( v[1] == 0x0B ) )
  {
    r = is_changed_prod_rate(v, i, ii);
    setWorkingTime(r);

    $('#tbox00_tb_01').text(dp.processing + " EA" ); //진행중인 생산량
    $('#tbox00_tb_02').text(dp.bad + " EA" ); //불량
    $('#tbox00_tb_00').text( dp.total + " EA" ); //하루 총생산량
    $('#tbox00_tb_04').text(dp.fail.toFixed(1) + " %" );   /// 불량률
    $('#tbox00_tb_03').text(dp.success.toFixed(1) + " %" );

    if ( v[12] <= 60 && v[12] >= 0 )
    {
      GraphCW.value.v = v[12];
      GraphCCW.value.v = 0;
    }
    else
    {
      GraphCW.value.v = 0;
      GraphCCW.value.v = 257 - (-1*(~v[12]));
    }
  }
  else if ( (q.key==0) && (q.sid==1) && ( v[1] == 0x0C ) )
  {
    r = is_changed_prod_rate(v, i, ii);
    setWorkingTime(r);

    $('#tbox00_tb_01').text(dp.processing + " EA" ); //진행중인 생산량
    $('#tbox00_tb_02').text(dp.bad + " EA" ); //불량
    $('#tbox00_tb_00').text( dp.total + " EA" ); //하루 총생산량
    $('#tbox00_tb_04').text(dp.fail.toFixed(1) + " %" );   /// 불량률
    $('#tbox00_tb_03').text(dp.success.toFixed(1) + " %" );

    if ( v[12] <= 60 && v[12] >= 0 )
    {
      GraphCW.value.v = v[12];
      GraphCCW.value.v = 0;
    }
    else
    {
      GraphCW.value.v = 0;
      GraphCCW.value.v = 257 - (-1*(~v[12]));
    }
  }
  else if ( (q.key==0) && (q.sid==2) && ( v[1] == 0x0D ) )
  {
    r = is_changed_prod_rate(v, i, ii);
    setWorkingTime(r);

    $('#tbox00_tb_01').text(dp.processing + " EA" ); //진행중인 생산량
    $('#tbox00_tb_02').text(dp.bad + " EA" ); //불량
    $('#tbox00_tb_00').text( dp.total + " EA" ); //하루 총생산량
    $('#tbox00_tb_04').text(dp.fail.toFixed(1) + " %" );   /// 불량률
    $('#tbox00_tb_03').text(dp.success.toFixed(1) + " %" );

    if ( v[12] <= 60 && v[12] >= 0 )
    {
      GraphCW.value.v = v[12];
      GraphCCW.value.v = 0;
    }
    else
    {
      GraphCW.value.v = 0;
      GraphCCW.value.v = 257 - (-1*(~v[12]));
    }
  }
  else if ( (q.key==0) && (q.sid==3) && ( v[1] == 0x0E ) )
  {
    r = is_changed_prod_rate(v, i, ii);
    setWorkingTime(r);

    $('#tbox00_tb_01').text(dp.processing + " EA" ); //진행중인 생산량
    $('#tbox00_tb_02').text(dp.bad + " EA" ); //불량
    $('#tbox00_tb_00').text( dp.total + " EA" ); //하루 총생산량
    $('#tbox00_tb_04').text(dp.fail.toFixed(1) + " %" );   /// 불량률
    $('#tbox00_tb_03').text(dp.success.toFixed(1) + " %" );

    if ( v[12] <= 60 && v[12] >= 0 )
    {
      GraphCW.value.v = v[12];
      GraphCCW.value.v = 0;
    }
    else
    {
      GraphCW.value.v = 0;
      GraphCCW.value.v = 257 - (-1*(~v[12]));
    }
  }



  return;
}

function mach_proc_01(v, i, ii)
{
  if ( q.key != i ) return;
  r = is_changed_prod_rate(v, i, ii);
  setWorkingTime(r);

  return;
}
function mach_proc_02(v, i, ii)
{
  if ( q.key != i ) return;
  r = is_changed_prod_rate(v, i, ii);
  setWorkingTime(r);
  GraphVisionStatus.value.v = v[17];

  return;
}
function mach_proc_03(v, i, ii)
{
  if ( q.key != i ) return;

  r = is_changed_prod_rate(v, i, ii);
  setWorkingTime(r);
  $('#tbox00_tb_01').text(dp.processing + " EA" ); //진행중인 생산량
  $('#tbox00_tb_02').text(dp.bad + " EA" ); //불량
  $('#tbox00_tb_00').text(dp.total + " EA" ); //하루 총생산량
  if ( dp.fail != null ) $('#tbox00_tb_04').text(dp.fail.toFixed(1) + " %" );   /// 불량률

  GraphCutterStatusDefect.value.v = dp.fail;
  GraphCutterStatusAccept.value.v = dp.success;

  if ( dp.success != null ) $('#tbox00_tb_03').text(dp.success.toFixed(1) + " %" );

  return;
}
function mach_proc_04(v, i, ii)
{
  if ( q.key != i ) return;

  r = is_changed_prod_rate(v, i, ii);
  setWorkingTime(r);
  GraphRobotStatus00.value.v=0;
  GraphRobotStatus01.value.v=0;
  GraphRobotStatus02.value.v=0;
  GraphRobotStatus10.value.v=0;
  GraphRobotStatus11.value.v=0;
  GraphRobotStatus12.value.v=0;


  if ( v[9] == 0x01 )
  {
    GraphRobotStatus00.value.v=v[12];
  }
  else if ( v[9] == 0x02 )
  {
    GraphRobotStatus01.value.v=v[12];
  }
  else if ( v[9] == 0x03 )
  {
    GraphRobotStatus02.value.v=v[12];
  }
  else if ( v[9] == 0x04 )
  {
    GraphRobotStatus10.value.v=v[12];
  }
  else if ( v[9] == 0x05 )
  {
    GraphRobotStatus11.value.v=v[12];
  }
  else if ( v[9] == 0x06 )
  {
    GraphRobotStatus12.value.v=v[12];
  }

  return;s
}
function mach_proc_05(v, i, ii)
{
  if ( q.key != i ) return;

  r = is_changed_prod_rate(v, i, ii);
  setWorkingTime(r);

  var tm = new Date(parseInt(g_dtm));
 
  C3DPrintProgress0.value.v = Math.floor((tm.getSeconds()/3600)*100) + '%';
  C3DPrintProgress0.value.realv = C3DPrintProgress0.value.v;
  C3DPrintProgress1.value.v = Math.floor((v[9]/0xFF)*100) + '%';
  C3DPrintProgress1.value.realv = v[9] + '℃/210℃'; 
  C3DPrintProgress2.value.v = Math.floor((v[7]/110)*100) + '%';
  C3DPrintProgress2.value.realv = v[7] + '℃/70℃';
  C3DPrintProgress3.value.v = Math.floor(((v[4] + v[5]/100)/60)*100) + '%';
  C3DPrintProgress3.value.realv = (v[4] + v[5]/100).toFixed(2) + 'mm/s';
  return;
}
function mach_proc_06(v, i, ii)
{

  if ( q.key != i ) return;
  if ( q.skey != ii ) return;

  r = is_changed_prod_rate(v, i, ii);
  setWorkingTime(r);

  if ( ii == 0 )
  {
    GraphStorageStatus.value.v[0] = GraphStorageNodeStatus.value.v = v[11];
    GraphStorageStatus.value.v[1] = GraphStorageNodeStatus.value.v = v[12];
  }
  else if ( ii == 1 )
  {
    GraphStorageStatus.value.v[0] = GraphStorageNodeStatus.value.v = v[13];
    GraphStorageStatus.value.v[1] = GraphStorageNodeStatus.value.v = v[14];
  }
  else if ( ii == 2 )
  {
    GraphStorageStatus.value.v[0] = GraphStorageNodeStatus.value.v = v[9];
    GraphStorageStatus.value.v[1] = GraphStorageNodeStatus.value.v = v[10];
  }
  return;
}
function mach_proc_07(v, i, ii)
{
  if ( q.key != i ) return;

  r = is_changed_prod_rate(v, i, ii);
  setWorkingTime(r);

  if ( v[12]>=0 && v[12]<=100 )
  {
    GraphPressureStatus.value.v = v[12];
    GraphPressureStatusQuard.value.v = v[12];
  }

  return;
}
function mach_proc_08(v, i, ii)
{
  if ( q.key != i ) return;

  if ( (q.key==8) && (q.sid==0) && ( v[1] == 0x33 ) )
  {
    r = is_changed_prod_rate(v, i, ii);
    setWorkingTime(r);

    if ( v[11] == 0 )
    {
      GraphCW.value.v = 0
      GraphCCW.value.v = v[12];
    }
    else
    {
      GraphCW.value.v = v[12];
      GraphCCW.value.v = 0;//257 - (-1*(~v[12]));
    }
  }
  return;

}

function mach_proc_09(v, i, ii)
{
  if ( q.key != i ) return;

  if ( (q.key==9) && (q.sid==0) && ( v[1] == 0x5B ) )
  {
    r = is_changed_prod_rate(v, i, ii);
    setWorkingTime(r);

    if ( v[11] == 0 )
    {
      GraphCW.value.v = 0
      GraphCCW.value.v = v[12];
    }
    else
    {
      GraphCW.value.v = v[12];
      GraphCCW.value.v = 0;//257 - (-1*(~v[12]));
    }
  }
  return;
}

function mach_proc_10(v, i, ii)
{
  if ( q.key != i ) return;

  r = is_changed_prod_rate(v, i, ii);
  setWorkingTime(r);
  return;
}
function mach_proc_11(v, i, ii)
{
  if ( q.key != i ) return;

  r = is_changed_prod_rate(v, i, ii);
  setWorkingTime(r);

  return;
}
function mach_proc_12(v, i, ii)
{
  if ( q.key != i ) return;

  r = is_changed_prod_rate(v, i, ii);
  setWorkingTime(r);

  return;
}
function mach_proc_13(v, i, ii)
{
  if ( q.key != i ) return;

  r = is_changed_prod_rate(v, i, ii);
  setWorkingTime(r);

  return;
}
function mach_proc_14(v, i, ii)
{
  if ( q.key != i ) return;

  r = is_changed_prod_rate(v, i, ii);
  setWorkingTime(r);

  return;
}
function mach_proc_15(v, i, ii)
{
  if ( q.key != i ) return;

  r = is_changed_prod_rate(v, i, ii);
  setWorkingTime(r);

  if ( v[12]>=0 && v[12]<=100 )
  {
    GraphPunchingStatus.value.v = v[12];
    GraphPunchingStatusQuard.value.v = v[12];
  }

  return;
}
function mach_proc_16(v, i, ii)
{
  if ( q.key != i ) return;

  r = is_changed_prod_rate(v, i, ii);
  setWorkingTime(r);

  return;
}

function mach_proc_17(v, i, ii)
{
  if ( q.key != i ) return;

  r = is_changed_prod_rate(v, i, ii);
  setWorkingTime(r);

  return;
}
function mach_proc_18(v, i, ii)
{
  if ( q.key != i ) return;

  r = is_changed_prod_rate(v, i, ii);
  setWorkingTime(r);

  return;
}
function mach_proc_19(v, i, ii)
{
  if ( q.key != i ) return;

  r = is_changed_prod_rate(v, i, ii);
  setWorkingTime(r);

  GraphMultiStatus.value.v = v[12];
  GraphMultiQuantityStatus.value.v = v[4]*256 + v[5];
  GraphMultiColorStatus.value.v = v[7];
  return;
}
function mach_proc_20(v, i, ii)
{
  if ( q.key != i ) return;
  r = is_changed_prod_rate(v, i, ii);
  setWorkingTime(r);
  GraphVisionStatus.value.v = v[17];

  return;
}
function mach_proc_21(v, i, ii)
{
  if ( q.key != i ) return;

  r = is_changed_prod_rate(v, i, ii);
  setWorkingTime(r);
  $('#tbox00_tb_01').text(dp.processing + " EA" ); //진행중인 생산량
  $('#tbox00_tb_02').text(dp.bad + " EA" ); //불량
  $('#tbox00_tb_00').text(dp.total + " EA" ); //하루 총생산량
  $('#tbox00_tb_04').text(dp.fail.toFixed(1) + " %" );   /// 불량률
  $('#tbox00_tb_03').text(dp.success.toFixed(1) + " %" );


  GraphGoodPrd.value.v = ((dp.processing/TOTAL)*100).toFixed(1);
  GraphBadPrd.value.v = ((dp.fail/TOTAL)*100).toFixed(1);
  return;
}
/***
function mach_proc_08(v, idx)
{
  var id = null;
  if ( is_changed_prod_rate(v, idx) == true )
  {
    setWorkingTime();
  }

  if ( v[1] == 0x0B ) id = "ms00";  // 니트직조기
  else if ( v[1] == 0x15 ) id = "ms03";  //니트 후가공
  else if ( v[1] == 0x1F ) id = "ms01"; // 재단기
  else if ( v[1] == 0x29 ) id = "ms06"; // 비전검사
  else if ( v[1] == 0x3D ) id = "ms07"; // 이송로봇
  else if ( v[1] == 0x47 ) id = "ms02"; // 적재창고 (자동창고)
  else if ( v[1] == 0x51 ) id = "ms04"; //3D 프린터
  else if ( v[1] == 0x65 ) id = "ms05"; // 노소프레스

////////////////////////////////재봉공정/////////////////////////////////
  else if ( v[1] == 0x6F ) id = "ms10"; //에어건 스프레이
  else if ( v[1] == 0x79 ) id = "ms11"; //1본침 재봉기
  else if ( v[1] == 0x83 ) id = "ms12"; //2본침 재봉기
  else if ( v[1] == 0x8D ) id = "ms13"; //지그재그 재봉기
  else if ( v[1] == 0x97 ) id = "ms14"; //해머
  else if ( v[1] == 0xA1 ) id = "ms15"; //펀칭기
  else if ( v[1] == 0xAB ) id = "ms16"; //백카운터몰딩기
  else if ( v[1] == 0xB5 ) id = "ms17"; //게더링 재봉기
  else if ( v[1] == 0xBF ) id = "ms18"; //스트로벨기
  else if ( v[1] == 0xC9 ) id = "ms19"; //3컬러 멀티재봉기
  else if ( v[1] == 0xD3 ) id = "ms20"; //비전검사기(재봉검사)

  //console.log(id + ", " + v[3] + ", " + v[17]);

  
  return;
}
***/
function DebugConsole(b, sz)
{
  var dbg = '';
  var i;
  var v = new Uint8Array(b);

  for ( i=0 ; i<sz ; i++ )
  {
    dbg += PAD(v[i].toString(16), 2) + ',';
  }
  console.log(dbg);
}


function mach_proc_value(v, i, ii)
{
  var idx = i;
  if ( i >=10 ) idx = i+990;
  //set_common_value(v, idx, ii);
  mach_proc_XX[i][ii](v, idx, ii);
}

function mach_callback_proc(dat, sz)
{
  // 02 01 01 02 03 02 01 01 02 03 02 01 01 02 03
  var v = new Uint8Array(dat);
  var i = 0;
  var ii = 0;
////////////////////////////////재봉준비공정/////////////////////////////////
  if      ( (v[1]==0x0B) || (v[1]==0x0C) || (v[1]==0x0D) || (v[1]==0x0E) )// 니트직조기
  {
    i = 0;
    ii = 0;
  }
  else if ( (v[1]==0x15) ) //니트 후가공
  {
    i = 1;
    ii = 0;
  }
  else if ( (v[1]==0x1F) )// 재단기
  {
    i = 3;
    ii = 0;
  }
  else if ( (v[1]==0x29) )// 비전검사
  {
    i = 2;
    ii = 0;
  }
  else if ( (v[1]==0x3D) )// 이송로봇
  {
    i = 4;
    ii = 0;
  }
  else if ( (v[1]==0x47) )// 적재창고 (자동창고)
  {
    i = 6;
    ii = 0;
    mach_proc_value(v, i, ii);
    i = 6;
    ii = 1;
    mach_proc_value(v, i, ii);
    i = 6;
    ii = 2;
  }
  else if ( (v[1]==0x51) || (v[1]==0x52) || (v[1]==0x53) || (v[1]==0x54) ) //3D 프린터
  {
    i = 5;
    ii = 0;
  }
  else if ( (v[1]==0x65) )// 노소프레스
  {
    i = 7;
    ii = 0;
  }
  else if ( (v[1]==0x33) ) // 투입컨베이어
  {
    i = 8;
    ii = 0;
  }
  else if ( (v[1]==0x5B) ) // 배출컨베이어
  {
    i = 9;
    ii = 0;
  }
////////////////////////////////재봉공정/////////////////////////////////
  else if ( (v[1]==0x6F) || (v[1]==0x70) )//에어건 스프레이
  {
    i = 10;
    ii = 0;
  }
  else if ( (v[1]==0x79) || (v[1]==0x7A) )//1본침 재봉기
  {
    i = 11;
    ii = 0;
  }
  else if ( (v[1]==0x83) )//2본침 재봉기
  {
    i = 12;
    ii = 0;
  }
  else if ( (v[1]==0x8D) || (v[1]==0x8E) )//지그재그 재봉기
  {
    i = 13;
    ii = 0;
  }
  else if ( (v[1]==0x97) || (v[1]==0x98) )//해머
  {
    i = 14;
    ii = 0;
  }
  else if ( (v[1]==0xA1) || (v[1]==0xA2) )//펀칭기
  {
    i = 15;
    ii = 0;
  }
  else if ( (v[1]==0xAB) ) //백카운터몰딩기
  {
    i = 16;
    ii = 0;
  }
  else if ( (v[1]==0xB5) ) //게더링 재봉기
  {
    i = 17;
    ii = 0;
  }
  else if ( (v[1]==0xBF) )//스트로벨기
  {
    i = 18;
    ii = 0;
  }
  else if ( (v[1]==0xC9) ) //3컬러 멀티재봉기
  {
    i = 19;
    ii = 0;
  }
  else if ( (v[1]==0xD3) )//비전검사기(재봉검사)
  {
    i = 20;
    ii = 0;
  }
  else if ( (v[1]==0xDD) ) // 갑피 RFID (RFID 바구니)
  {
    i = 21;
    ii = 0;
  }

  mach_proc_value(v, i, ii);
  return;

}

function mach_callback(arr, sz)
{
  //debug_log(arr, sz);
  mach_callback_proc(arr, sz);
  nowTime();


  return;
}

///////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////시계////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

function today()
{
    now = new Date();
    year = now.getFullYear();
    month = now.getMonth()+1;
    date = now.getDate();        
    print00 = year + " . " + PAD(month,2) + " . " + PAD(date,2) ;

}

function times()
{
  now = new Date();
  hour = now.getHours();
  min = now.getMinutes();
  var idx = 0;
 
  print01 = PAD(hour,2) + ":" + PAD(min,2);


  if( (hour>=8)&&(hour<16) ) //08:00-16:00
  {
    idx = 0;
  }
  else if( (hour>=16)&&(hour<=23) ) //16:00-00:00
  {
    idx = 1;
  }
  else if( (hour>=0)&&(hour<=8) ) //00:00-08:00
  {
    idx = 2;
  }
  $('#manager').text(dp.xml.work[idx]['manager']);
  $('#worker').text(dp.xml.work[idx]['worker']);
}

function nowTime()
{
    today();
    times();

    document.getElementById("today").innerHTML = print00;
    document.getElementById("times1").innerHTML = print01;
}
function start_time()
{
    document.getElementById("times2").innerHTML = print02;
}
function end_time()
{
    document.getElementById("times3").innerHTML = print02;
}

  //setInterval(function(){nowTime();}, 1000);
  //utimes();

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
////////// Key=0 모터 진행 현황
var GraphCW = new codeXchart();

function DrawCWGraph(id)
{
  GraphCW.InitChart(id, 'RADIAL');
  GraphCW.PeriodicDrawChart(id,GraphCW.attr.tmr.period);
}
GraphCW.InitChart = function(id, type)
{
  var _v;
  this.attr.scale = 1;
  this.attr.type = type;
  this.attr.id = id + "Canvas";  /// do not modify
  this.attr.position[0] = 0;  /// do not modify
  this.attr.position[1] = 0;  /// do not modify
  _v = $('#'+id).css('width').split('px');
  this.attr.width = _v[0];
  _v = $('#'+id).css('height').split('px');
  this.attr.height = _v[0];
  this.attr.dim = '2d';

  this.attr.border.color = 'transparent';
  this.attr.border.type = 'dotted';
  this.attr.border.thick=1;
  this.attr.background.color = 'transparent';

  this.attr.tmr.period = 1;

  this.axis.thick =10;
  this.axis.color = '#0182FF';
  this.axis.radial.center[0] = this.attr.width/2;
  this.axis.radial.center[1] = this.attr.height/2-10;
  this.axis.radial.radius[0] = this.attr.height/2;
  this.axis.radial.radius[1] = this.attr.height/2;
  this.axis.radial.mradius[0] = ((this.axis.radial.radius[0]<=this.axis.radial.radius[1])?this.axis.radial.radius[0]:this.axis.radial.radius[1]);
  this.axis.radial.mradius[1] = ((this.axis.radial.radius[0]>this.axis.radial.radius[1])?this.axis.radial.radius[0]:this.axis.radial.radius[1]);

  this.axis.radial.ccw[0] = (3/4)*Math.PI;
  this.axis.radial.ccw[1] = (1/4)*Math.PI;
  this.axis.radial.gradient.callback = this.DrawGradient;

  this.face.thick = 1;
  this.face.color = '#FFFFFF';
  this.face.background.color = '#FFFFFF';

  this.value.ratio = 2.7;
  this.value.max = 100;

  this.value.delta[0] = this.value.delta[1] = 0;
}
GraphCW.DrawGradient = function(obj)
{
  var spectrum_offset = 20;
  var grd = obj.context.createLinearGradient(obj.X(obj.axis.radial.center[0])-obj.axis.radial.radius[0]-spectrum_offset, 0, obj.X(obj.axis.radial.center[0])+obj.axis.radial.radius[0]+spectrum_offset, 0);
  grd.addColorStop(0, "#70FF00");
  grd.addColorStop(0.5, "#FFFF00");
  grd.addColorStop(1, "#FF0000");
  obj.context.strokeStyle = grd;

  obj.SetText( obj.x( (obj.axis.radial.radius[0]-5)*Math.cos(DEGREE(225))), obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(225))), 20, 0,   '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-5)*Math.cos(DEGREE(198))), obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(198))), 20, 10,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-7)*Math.cos(DEGREE(171))), obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(171))), 20, 20,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-5)*Math.cos(DEGREE(144))), obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(144))), 20, 30,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-5)*Math.cos(DEGREE(117))), obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(117))), 20, 40,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-5)*Math.cos(DEGREE(90))),  obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(90))),  20, 50,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-20)*Math.cos(DEGREE(63))),  obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(63))),  20, 60,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-20)*Math.cos(DEGREE(36))),  obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(36))),  20, 70,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-18)*Math.cos(DEGREE(9))),   obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(9))),   20, 80,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-20)*Math.cos(DEGREE(342))), obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(342))), 20, 90,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-30)*Math.cos(DEGREE(315))), obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(315))), 20, 100, '#FFFFFF', "bold 12px Arial");
}
GraphCW.DrawValue = function()
{
  var r = DEGREE(this.value.v*this.value.ratio);
  if ( this.value.curr <= this.value.v*this.value.ratio )
  {
    this.value.curr+=this.value.delta[0];
  }
  else
  {
    this.value.curr-=this.value.delta[1];
  }
  if ( this.value.curr <= 0 ) this.value.curr = 0;
  r = DEGREE(this.value.curr);

  

  if ( (this.value.delta[0]==0) || (this.value.delta[1]==0) )
  {
    this.value.curr = this.value.v*this.value.ratio;
  }

  $('#GraphCWTitle').text( ((this.value.curr*this.value.max)/RAD(Math.PI*(3/2))).toFixed(0) + ' RPM' );

  this.context.beginPath();
  this.context.arc(this.x(0), this.y(0), 5, 0, Math.PI*2);
  this.context.strokeStyle = this.face.color;
  this.context.fillStyle = this.face.background.color;
  this.context.lineWidth = this.face.thick;
  this.context.fill();
  this.context.stroke();

  this.context.beginPath();
  this.context.moveTo(this.x( 3*Math.cos(r+DEGREE(90))), this.y( 3*Math.sin(r-DEGREE(90))));
  this.context.lineTo(this.x( 3*Math.cos(r-DEGREE(90))), this.y( 3*Math.sin(r+DEGREE(90))));
  this.context.lineTo(this.x((this.axis.radial.mradius[0]) * Math.cos( DEGREE(224)-r ) ), this.y((this.axis.radial.mradius[0]) * Math.sin(DEGREE(224)-r)));
  this.context.closePath();
  this.context.lineWidth = this.face.thick;
  this.context.strokeStyle = this.face.color;
  this.context.fillStyle = this.face.background.color;
  this.context.fill();
  this.context.stroke();
  var color = pickColor(this.context, this.x(this.axis.radial.radius[0] * Math.cos( DEGREE(224)-r ) ), this.y(this.axis.radial.radius[0] * Math.sin( DEGREE(224)-r)));

  //$('#CWV').css('background-color', color);
}

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
var GraphCCW = new codeXchart();
function DrawCCWGraph(id)
{
  GraphCCW.InitChart(id, 'RADIAL');
  GraphCCW.PeriodicDrawChart(id,GraphCCW.attr.tmr.period);
}

GraphCCW.InitChart = function(id, type)
{
  var _v;
  this.attr.scale = 1;
  this.attr.type = type;
  this.attr.id = id + "Canvas";  /// do not modify
  this.attr.position[0] = 0;  /// do not modify
  this.attr.position[1] = 0;  /// do not modify

  _v = $('#'+id).css('width').split('px');
  this.attr.width = _v[0];
  _v = $('#'+id).css('height').split('px');
  this.attr.height = _v[0];
  this.attr.dim = '2d';

  this.attr.border.color = 'transparent';
  this.attr.border.type = 'dotted';
  this.attr.border.thick=1;
  this.attr.background.color = 'transparent';

  this.axis.thick =10;
  this.axis.color = '#0182FF';
  this.axis.radial.center[0] = this.attr.width/2;
  this.axis.radial.center[1] = this.attr.height/2-10;
  this.axis.radial.radius[0] = this.attr.height/2;
  this.axis.radial.radius[1] = this.attr.height/2;
  this.axis.radial.mradius[0] = ((this.axis.radial.radius[0]<=this.axis.radial.radius[1])?this.axis.radial.radius[0]:this.axis.radial.radius[1]);
  this.axis.radial.mradius[1] = ((this.axis.radial.radius[0]>this.axis.radial.radius[1])?this.axis.radial.radius[0]:this.axis.radial.radius[1]);
  this.axis.radial.ccw[0] = (3/4)*Math.PI;
  this.axis.radial.ccw[1] = (1/4)*Math.PI;
  this.axis.radial.gradient.callback = this.DrawGradient;

  this.face.thick = 1;
  this.face.color = '#ffffff';
  this.face.background.color = '#FFFFFF';


  this.value.ratio = 2.7;
  this.value.max = 100;
  this.value.delta[0] = this.value.delta[1] = 0;
}
GraphCCW.DrawGradient = function(obj)
{
  var spectrum_offset = 20;
  var grd = obj.context.createLinearGradient(obj.X(obj.axis.radial.center[0])-obj.axis.radial.radius[0]-spectrum_offset, 0, obj.X(obj.axis.radial.center[0])+obj.axis.radial.radius[0]+spectrum_offset, 0);
  grd.addColorStop(0, "#70FF00");
  grd.addColorStop(0.5, "#FFFF00");
  grd.addColorStop(1, "#FF0000");
  obj.context.strokeStyle = grd;

  obj.SetText( obj.x( (obj.axis.radial.radius[0]-5)*Math.cos(DEGREE(225))), obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(225))), 20, 0,   '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-5)*Math.cos(DEGREE(198))), obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(198))), 20, 10,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-7)*Math.cos(DEGREE(171))), obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(171))), 20, 20,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-5)*Math.cos(DEGREE(144))), obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(144))), 20, 30,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-5)*Math.cos(DEGREE(117))), obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(117))), 20, 40,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-5)*Math.cos(DEGREE(90))),  obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(90))),  20, 50,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-20)*Math.cos(DEGREE(63))),  obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(63))),  20, 60,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-20)*Math.cos(DEGREE(36))),  obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(36))),  20, 70,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-18)*Math.cos(DEGREE(9))),   obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(9))),   20, 80,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-20)*Math.cos(DEGREE(342))), obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(342))), 20, 90,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-30)*Math.cos(DEGREE(315))), obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(315))), 20, 100, '#FFFFFF', "bold 12px Arial");

}
GraphCCW.DrawValue = function()
{
  var r = DEGREE(this.value.v*this.value.ratio);

  if ( this.value.curr <= this.value.v*this.value.ratio )
  {
    this.value.curr+=this.value.delta[0];
  }
  else
  {
    this.value.curr-=this.value.delta[1];
  }

  if ( (this.value.delta[0]==0) || (this.value.delta[1]==0) )
  {
    this.value.curr = this.value.v*this.value.ratio;
  }

  //console.log("CCW -> " + this.value.v + ", " + this.value.curr);

  if ( this.value.curr <= 0 ) this.value.curr = 0;
  r = DEGREE(this.value.curr);


  $('#GraphCCWTitle').text( ((this.value.curr*this.value.max)/RAD(Math.PI*(3/2))).toFixed(0) + ' RPM' );
  //$('#GraphCCWTitle').text( ((this.value.curr*60)/RAD(Math.PI)).toFixed(0) + ' RPM' );
  //$('#GraphCCWTitle').text( (this.value.curr/this.value.ratio).toFixed(0) + ' EA' );


  this.context.beginPath();
  this.context.arc(this.x(0), this.y(0), 5, 0, Math.PI*2);
  this.context.strokeStyle = this.face.color;
  this.context.fillStyle = this.face.background.color;
  this.context.lineWidth = this.face.thick;
  this.context.fill();
  this.context.stroke();

  this.context.beginPath();
  this.context.moveTo(this.x( 3*Math.cos(r+DEGREE(90))), this.y( 3*Math.sin(r-DEGREE(90))));
  this.context.lineTo(this.x( 3*Math.cos(r-DEGREE(90))), this.y( 3*Math.sin(r+DEGREE(90))));
  this.context.lineTo(this.x((this.axis.radial.mradius[0]) * Math.cos( DEGREE(224)-r ) ), this.y((this.axis.radial.mradius[0]) * Math.sin(DEGREE(224)-r)));
  this.context.lineWidth = this.face.thick;
  this.context.strokeStyle = this.face.color;
  this.context.fillStyle = this.face.background.color;
  this.context.fill();
  this.context.stroke();

  var color = pickColor(this.context, this.x(this.axis.radial.radius[0] * Math.cos( DEGREE(224)-r ) ), this.y(this.axis.radial.radius[0] * Math.sin(DEGREE(224)-r)));
  //$('#CCWV').css('background-color', color);

}

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
var GraphGoodPrd = new codeXchart();
function DrawGoodPrdGraph(id)
{
  GraphGoodPrd.InitChart(id, 'RADIAL');
  GraphGoodPrd.PeriodicDrawChart(id,GraphGoodPrd.attr.tmr.period);
}

GraphGoodPrd.InitChart = function(id, type)
{
  var _v;
  this.attr.scale = 1;
  this.attr.type = type;
  this.attr.id = id + "Canvas";  /// do not modify
  this.attr.position[0] = 0;  /// do not modify
  this.attr.position[1] = 0;  /// do not modify

  _v = $('#'+id).css('width').split('px');
  this.attr.width = _v[0];
  _v = $('#'+id).css('height').split('px');
  this.attr.height = _v[0];
  this.attr.dim = '2d';

  this.attr.border.color = '#FFFFFF';
  this.attr.border.type = 'dotted';
  this.attr.border.thick=0;
  this.attr.background.color = 'transparent';

  this.attr.tmr.period = 1;

  this.axis.thick =15;
  this.axis.color = '#303030';
  this.axis.radial.center[0] = this.attr.width/2;
  this.axis.radial.center[1] = this.attr.height/2 + 10;
  this.axis.radial.radius[0] = this.axis.radial.radius[1] = this.attr.height/5.0;
  this.axis.radial.ccw[0] = 0*Math.PI;
  this.axis.radial.ccw[1] = 2*Math.PI;
  this.axis.radial.gradient.callback = this.DrawText;

  this.face.thick = this.axis.thick - 1;
  this.face.color = '#1234FF';
  this.face.background.color = '#FFFFFF';
  this.face.font.family = 'Courier New';
  this.face.font.size  = 18;
  this.face.font.color = '#FFFFFF';


  this.value.ratio = 3.6;
  this.value.max = 100;
  this.value.delta[0] = this.value.delta[1] = 0;
}
GraphGoodPrd.DrawText = function(obj)
{
  obj.SetText(obj.x(-150), obj.y(50), 80, "총생산량", '#FFFFFF', "bold 12px Arial");
  obj.SetText(obj.x(-95), obj.y(51), 20, "(P)", '#999999', "bold 12px Arial");

  obj.SetText(obj.x(-130), obj.y(-80), 50, "지시량:", '#999999', "bold 12px Arial");
  obj.SetText(obj.x(-80), obj.y(-80), 50, COMMA(TOTAL), '#FFFFFF', "bold 24px Arial");

  obj.SetText(obj.x(30), obj.y(-80), 50, "양품량:", '#999999', "bold 12px Arial");
  obj.SetText(obj.x(80), obj.y(-80), 200, COMMA(dp.processing), '#55AA33', "bold 24px Arial");
}

GraphGoodPrd.DrawValue = function()
{
  var r = DEGREE( (this.value.v*this.value.ratio));   //// DEGREE TO RADIAN
  if ( this.value.curr < this.value.v*this.value.ratio )
  {
    this.value.curr+=this.value.delta[0];
  }
  else
  {
    this.value.curr-=this.value.delta[1];
  }
  if ( this.value.curr <= 0 ) this.value.curr = 0;
  else if ( this.value.curr >= (this.value.max*this.value.ratio) ) this.value.curr = (this.value.max*this.value.ratio);
  r = DEGREE(this.value.curr);

  if ( (this.value.delta[0]==0) || (this.value.delta[1]==0) )
  {
    this.value.curr = this.value.v*this.value.ratio;
  }

  /// inner circle
  this.context.beginPath();
  this.context.arc(this.x(0), this.y(0), this.axis.radial.radius[0]-15, 0, Math.PI*2);
  this.context.strokeStyle = this.axis.color;
  this.context.lineWidth = 1;
  this.context.stroke();


  /// value domain
  this.context.lineCap = 'round';
  this.context.beginPath();
  var grd = this.context.createLinearGradient(this.x(0), this.y(this.axis.radial.radius[0]), this.x(-this.axis.radial.radius[0]), this.y(-this.axis.radial.radius[0]));
  grd.addColorStop(0, "#FFFF00");
  grd.addColorStop(1, "#70FF00");
  this.context.strokeStyle = grd;
  //this.context.arc(this.x(0), this.y(0), this.axis.radial.radius[0], DEGREE(0), DEGREE(PCoord(90)) );
  //this.Polarcw(this.x(0), this.y(0), this.axis.radial.radius[0], DEGREE(0), DEGREE(270));
  this.Clarck(this.x(0), this.y(0), this.axis.radial.radius[0], r);
  //this.context.strokeStyle = this.face.color;
  this.context.lineWidth = this.face.thick;
  this.context.stroke();


  this.SetText( this.x(-25), this.y(-5), this.axis.radial.radius[0], (this.value.curr/this.value.ratio).toFixed(1) + "%", this.face.font.color, "bold 16px Arial");

}

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
var GraphBadPrd = new codeXchart();
function DrawBadPrdGraph(id)
{
  GraphBadPrd.InitChart(id, 'RADIAL');
  GraphBadPrd.PeriodicDrawChart(id,GraphBadPrd.attr.tmr.period);
}

GraphBadPrd.InitChart = function(id, type)
{
  var _v;
  this.attr.scale = 1;
  this.attr.type = type;
  this.attr.id = id + "Canvas";  /// do not modify
  this.attr.position[0] = 0;  /// do not modify
  this.attr.position[1] = 0;  /// do not modify

  _v = $('#'+id).css('width').split('px');
  this.attr.width = _v[0];
  _v = $('#'+id).css('height').split('px');
  this.attr.height = _v[0];
  this.attr.dim = '2d';

  this.attr.border.color = 'transparent';
  this.attr.border.type = 'dotted';
  this.attr.border.thick=0;
  this.attr.background.color = 'transparent';

  this.attr.tmr.period = 1;

  this.axis.thick =1;
  this.axis.color = '#303030';
  this.axis.radial.center[0] = this.attr.width/2;
  this.axis.radial.center[1] = this.attr.height/2 + 10;
  this.axis.radial.radius[0] = this.axis.radial.radius[1] = this.attr.height/5.0;
  this.axis.radial.ccw[0] = 0*Math.PI;
  this.axis.radial.ccw[1] = 2*Math.PI;
  this.axis.radial.gradient.callback = this.DrawText;

  this.face.thick = this.axis.thick - 1;
  this.face.color = '#1234FF';
  this.face.background.color = '#FFFFFF';
  this.face.font.family = 'Courier New';
  this.face.font.size  = 18;
  this.face.font.color = '#FFFFFF';


  this.value.ratio = 3.6;
  this.value.max = 100;
  this.value.delta[0] = this.value.delta[1] = 0;
}
GraphBadPrd.DrawText = function(obj)
{
  obj.SetText(obj.x(-150), obj.y(50), 80, "총생산량", '#FFFFFF', "bold 12px Arial");
  obj.SetText(obj.x(-95), obj.y(51), 20, "(P)", '#999999', "bold 12px Arial");

  obj.SetText(obj.x(-130), obj.y(-80), 50, "지시량:", '#999999', "bold 12px Arial");
  obj.SetText(obj.x(-80), obj.y(-80), 50, COMMA(TOTAL), '#FFFFFF', "bold 24px Arial");

  obj.SetText(obj.x(30), obj.y(-80), 50, "불량:", '#999999', "bold 12px Arial");
  obj.SetText(obj.x(70), obj.y(-80), 200, COMMA(dp.bad), '#AA1233', "bold 24px Arial");

}


GraphBadPrd.DrawValue = function()
{
  var r = DEGREE( (this.value.v*this.value.ratio));   //// DEGREE TO RADIAN
  if ( this.value.curr < this.value.v*this.value.ratio )
  {
    this.value.curr+=this.value.delta[0];
  }
  else
  {
    this.value.curr-=this.value.delta[1];
  }
  if ( this.value.curr <= 0 ) this.value.curr = 0;
  else if ( this.value.curr >= (this.value.max*this.value.ratio) ) this.value.curr = (this.value.max*this.value.ratio);
  r = DEGREE(this.value.curr);

  if ( (this.value.delta[0]==0) || (this.value.delta[1]==0) )
  {
    this.value.curr = this.value.v*this.value.ratio;
  }

  /// inner circle
  this.context.beginPath();
  this.context.arc(this.x(0), this.y(0), this.axis.radial.radius[0]-15, 0, Math.PI*2);
  this.context.strokeStyle = this.axis.color;
  this.context.lineWidth = 1;
  this.context.stroke();

  /// value domain
  this.context.lineCap = 'round';
  this.context.beginPath();
  var grd = this.context.createLinearGradient(this.x(0), this.y(this.axis.radial.radius[0]), this.x(-this.axis.radial.radius[0]), this.y(-this.axis.radial.radius[0]));
  grd.addColorStop(0, "#FFFF00");
  grd.addColorStop(1, "#FF0A00");
  this.context.strokeStyle = grd;
  //this.context.arc(this.x(0), this.y(0), this.axis.radial.radius[0], DEGREE(0), DEGREE(PCoord(90)) );
  //this.Polarcw(this.x(0), this.y(0), this.axis.radial.radius[0], DEGREE(0), DEGREE(270));
  this.Clarck(this.x(0), this.y(0), this.axis.radial.radius[0], r);
  //this.Polarcw(this.x(0), this.y(0), this.axis.radial.radius[0], DEGREE(120), DEGREE(200));
  //this.context.strokeStyle = this.face.color;
  this.context.lineWidth = this.face.thick;
  this.context.stroke();

  this.SetText( this.x(-25), this.y(-5), this.axis.radial.radius[0], (this.value.curr/this.value.ratio).toFixed(1) + "%", this.face.font.color, "bold 16px Arial");

}

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
////////// Key=6, 적재창고
var GraphStorageStatus = new codeXchart();
function DrawStorageStatusGraph(id)
{
  GraphStorageStatus.InitChart(id, 'QUADRANT');
  GraphStorageStatus.PeriodicDrawChart(id,GraphStorageNodeStatus.attr.tmr.period);
}

GraphStorageStatus.InitChart = function(id, type)
{
  var _v;
  this.attr.scale = 1;
  this.attr.type = type;
  this.attr.id = id + "Canvas";  /// do not modify
  this.attr.position[0] = 0;  /// do not modify
  this.attr.position[1] = 0;  /// do not modify

  //// calculate the size of div
  _v = $('#'+id).css('width').split('px');
  this.attr.width = _v[0];
  _v = $('#'+id).css('height').split('px');
  this.attr.height = _v[0];
  this.attr.dim = '2d';

  this.attr.border.color = 'transparent';
  this.attr.border.type = 'dotted';
  this.attr.border.thick=0;
  this.attr.background.color = 'transparent';

  this.attr.update.period = 1;
  this.attr.tmr.period = 1;
  this.attr.drawing.continuous = false;

  this.axis.thick = 0;
  this.axis.color = 'transparent';

  
  this.axis.quadrant.bgn[0] = 20;
  this.axis.quadrant.bgn[1] = 20;
  this.axis.quadrant.end[0] = 290;
  this.axis.quadrant.end[1] = 320;

  this.axis.quadrant.x.color = 'transparent'
  this.axis.quadrant.x.bias.use = 0;
  this.axis.quadrant.y.color = 'transparent';
  this.axis.quadrant.y.bias.use = 0;

  this.axis.quadrant.x.strong.use = 0;
  this.axis.quadrant.y.strong.use = 0;

  this.axis.quadrant.x.unit.ratio = 10;
  this.axis.quadrant.y.unit.ratio = 10;

  this.axis.quadrant.x.elapsed = 10;

  this.face.thick = 1;
  this.face.color = '#FFFFFF';
  this.face.background.color = 'transparent';
  this.face.font.family = 'Courier New';
  this.face.font.size  = 18;
  this.face.font.color = '#FFFFFF';


  this.value.v = new Array();
  this.value.ratio = 1.0;
  this.value.max = 100;
  this.value.delta[0] = this.value.delta[1] = 0;

	this.value.curr = new Array();

	this.value.running = 0;

  this.callback = this.Callback;

}

GraphStorageStatus.Callback = function(obj, ecode)
{

}




GraphStorageStatus.DrawValue = function(obj)
{
  ibgn = 3;
  jbgn = 83;

  iofst = 16;
  jofst = 16;


	if ( this.value.v == "" )
	{
		for ( j=0 ; j<6 ; j++)
		{
			for ( i=0 ; i<4 ; i++)
			{
				//if ( this.value.curr[(j*4)+i] == "" )
				{
					this.value.curr[(j*4)+i] = '#FFAAAA';
				}
			}
		}
	}
	else
	{
		v = this.value.v[0] - 1;
		y = parseInt(v / 4);
		x = (v % 4);

		for ( j=0 ; j<6 ; j++)
		{
			for ( i=0 ; i<4 ; i++)
			{
				if ( x==i && y==j )
				{
					if ( this.value.v[1] == 1 )
					{
						this.value.curr[(j*4)+i] = '#AAFFAA';
					}
					else
					{
						this.value.curr[(j*4)+i] = '#FFAAAA';
					}
				}
			}
		}
	}
  for ( j=0 ; j<6 ; j++)
  {
    for ( i=0 ; i<4 ; i++)
    {
			this.DrawPoint([ibgn+i*iofst+15,jbgn-j*jofst],19,this.value.curr[(j*4)+i]);
    }
  }


		this.value.running = 0;

		for ( j=0 ; j<6 ; j++)
		{
			for ( i=0 ; i<4 ; i++)
			{
				if ( this.value.curr[(j*4)+i] == '#AAFFAA' ) this.value.running ++;
			}
		}



  //this.DrawLine([0,0], [1,1], 2);
  //this.DrawRectLine([0,0],[1,1],true);
  //this.DrawRectLine([1,1],[3,5],true);
  //this.DrawRectLine([2,1],[4,3],true);

  //this.DrawDPulse([0,20], 2);
  //this.DrawDPulse([4,20], 2);


  //this.DrawPoint([this.value.coord.xy[0],60],1,'#FFFFFF');


  //v -= this.axis.quadrant.x.unit.ratio;
  //this.DrawPoint([20,10],1,'#FFFFFF');
  //this.DrawPoint([50,50],1,'#FFFFFF');

  
  /*****   suna
  for ( j=0 ; j<6 ; j++, y++ )
  {
    for ( i=0 ; i<4 ; i++, x++ )
    {
      if ( this.value.v <= x )
      {
        this.DrawPoint([ibgn+i*iofst+15,jbgn-j*jofst],19,'#FFAAAA');
      }
      else
      {
        this.DrawPoint([ibgn+i*iofst+15,jbgn-j*jofst],19,'#AAFFAA');
      }
    }
  }
  *****/
}

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
var GraphStorageNodeStatus = new codeXchart();
function DrawStorageNodeStatusGraph(id)
{
  GraphStorageNodeStatus.InitChart(id, 'RADIAL');
  GraphStorageNodeStatus.PeriodicDrawChart(id,GraphStorageNodeStatus.attr.tmr.period);
}

GraphStorageNodeStatus.InitChart = function(id, type)
{
  var _v;
  this.attr.scale = 1;
  this.attr.type = type;
  this.attr.id = id + "Canvas";  /// do not modify
  this.attr.position[0] = 0;  /// do not modify
  this.attr.position[1] = 0;  /// do not modify

  _v = $('#'+id).css('width').split('px');
  this.attr.width = _v[0];
  _v = $('#'+id).css('height').split('px');
  this.attr.height = _v[0];
  this.attr.dim = '2d';

  this.attr.border.color = 'transparent';
  this.attr.border.type = 'dotted';
  this.attr.border.thick=0;
  this.attr.background.color = 'transparent';

  this.attr.tmr.period = 1;

  this.axis.thick =5;
  this.axis.color = '#303030';
  this.axis.radial.center[0] = this.attr.width/2 + 70;
  this.axis.radial.center[1] = this.attr.height/2 + 7;
  this.axis.radial.radius[0] = this.axis.radial.radius[1] = this.attr.height/(1.2+(1.25*1.27));
  this.axis.radial.ccw[0] = 0*Math.PI;
  this.axis.radial.ccw[1] = 2*Math.PI;
  this.axis.radial.gradient.callback = this.DrawText;

  this.face.thick = this.axis.thick - 1;
  this.face.color = '#1234FF';
  this.face.background.color = '#FFFFFF';
  this.face.font.family = 'Courier New';
  this.face.font.size  = 18;
  this.face.font.color = '#FFFFFF';


  this.value.ratio = 4.0;
  this.value.max = 24;
  this.value.delta[0] = this.value.delta[1] = 0;
}
GraphStorageNodeStatus.DrawText = function(obj)
{
  var left = -270;

  var total = 24;
  var stop = total - GraphStorageStatus.value.running;
  var running = total - stop;

  obj.SetText(obj.x(left), obj.y(50),  80, "ALL", '#FFFFFF', "bold 16px Arial");
  obj.SetText(obj.x(left+100), obj.y(50),  80, total, '#FFFFFF', "bold 24px Arial");

  obj.SetText(obj.x(left), obj.y(00),  80, "STOP", '#FFAAAA', "bold 16px Arial");
  obj.SetText(obj.x(left+100), obj.y(00),  80, stop, '#FFAAAA', "bold 24px Arial");

  obj.SetText(obj.x(left), obj.y(-50), 80, "RUNNING", '#AAFFAA', "bold 16px Arial");
  obj.SetText(obj.x(left+100), obj.y(-50),  80, running, '#AAFFAA', "bold 24px Arial");

  //obj.SetText(obj.x(-95), obj.y(51), 20, "45", '#AAFFAA', "bold 12px Arial");
  /***

  obj.SetText(obj.x(-130), obj.y(-80), 50, "지시량:", '#999999', "bold 12px Arial");
  obj.SetText(obj.x(-80), obj.y(-80), 50, COMMA(TOTAL), '#FFFFFF', "bold 24px Arial");

  obj.SetText(obj.x(30), obj.y(-80), 50, "불량:", '#999999', "bold 12px Arial");
  obj.SetText(obj.x(70), obj.y(-80), 200, COMMA(dp.bad), '#AA1233', "bold 24px Arial");
  ****/
}


GraphStorageNodeStatus.DrawValue = function()
{
  var total = 24;

	this.value.v = GraphStorageStatus.value.running;
  var stop = total - GraphStorageStatus.value.running;
  var running = total - stop;


  var r = DEGREE( (this.value.v*this.value.ratio));   //// DEGREE TO RADIAN
  if ( this.value.curr < this.value.v*this.value.ratio )
  {
    this.value.curr+=this.value.delta[0];
  }
  else
  {
    this.value.curr-=this.value.delta[1];
  }
  if ( this.value.curr <= 0 ) this.value.curr = 0;
  else if ( this.value.curr >= (this.value.max*this.value.ratio) ) this.value.curr = (this.value.max*this.value.ratio);
  r = DEGREE(this.value.curr);

  if ( (this.value.delta[0]==0) || (this.value.delta[1]==0) )
  {
    this.value.curr = this.value.v*this.value.ratio;
  }

  /// outer circle
  this.context.beginPath();
  this.context.arc(this.x(0), this.y(0), this.axis.radial.radius[0]+15, 0, Math.PI*2);
  this.context.strokeStyle = '#FFFFFF';
  this.context.lineWidth = 5;
  this.context.stroke();


  /// value circle #2
  this.context.beginPath();
  this.Polarcw(this.x(0), this.y(0), this.axis.radial.radius[0]-10, ((Math.PI/2)-(r*4)), (-3*Math.PI)/2);
  this.context.strokeStyle = '#FFAAAA';
  this.context.lineWidth = 5;
  this.context.stroke();



  /// value domainthis.context.lineCap = 'round';
  this.context.beginPath();
  //this.context.arc(this.x(0), this.y(0), this.axis.radial.radius[0], DEGREE(0), DEGREE(PCoord(90)) );
  //this.Polarcw(this.x(0), this.y(0), this.axis.radial.radius[0], DEGREE(0), DEGREE(270));
  this.Clarck(this.x(0), this.y(0), this.axis.radial.radius[0], r*4);
  //this.Polarcw(this.x(0), this.y(0), this.axis.radial.radius[0], DEGREE(120), DEGREE(200));
  this.context.strokeStyle = '#AAFFAA'
  this.context.lineWidth = 5;
  this.context.stroke();

  //this.SetText( this.x(-25), this.y(-5), this.axis.radial.radius[0], (this.value.curr/this.value.ratio).toFixed(1) + "%", this.face.font.color, "bold 16px Arial");
  this.SetText( this.x(-20), this.y(-10), this.axis.radial.radius[0], total, '#FFFFFF', "bold 32px Arial");
  this.SetText( this.x(-35), this.y(-24), this.axis.radial.radius[0], 'NODE ALL', '#FFFFFF', "bold 12px Arial");

  
}

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
//////////////////////////////////                         ////////////////////////////////////
///////////////////////////////////                      //////////////////////////////////////
/////////////////////////////////////                  ////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
/////////////////////////////////////////          ////////////////////////////////////////////
///////////////////////////////////////////     ///////////////////////////////////////////////
///////////////////////////////////////////// /////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
////////// Key=4, 이송 로봇 현형
var GraphRobotStatus00 = new codeXchart();
function DrawRobotStatusDiagram00(id)
{
  GraphRobotStatus00.InitChart(id, 'RADIAL');
  GraphRobotStatus00.PeriodicDrawChart(id,GraphRobotStatus00.attr.tmr.period);
}
GraphRobotStatus00.InitChart = function(id, type)
{
  var _v;
  this.attr.scale = 1;
  this.attr.type = type;
  this.attr.id = id + "Canvas";  /// do not modify
  this.attr.position[0] = 0;  /// do not modify
  this.attr.position[1] = 0;  /// do not modify

  //// calculate the size of div
  _v = $('#'+id).css('width').split('px');
  this.attr.width = _v[0];
  _v = $('#'+id).css('height').split('px');
  this.attr.height = _v[0];
  this.attr.dim = '2d';

  this.attr.border.color = 'transparent';
  this.attr.border.type = 'dotted';
  this.attr.border.thick=0;
  this.attr.background.color = 'transparent';

  this.attr.tmr.period = 1;

  this.axis.thick =15;
  this.axis.color = '#FFFF00';

  //// Coordination of Origin the graph

  this.axis.radial.center[0] = this.attr.width/2;
  this.axis.radial.center[1] = this.attr.height/2;
  this.axis.radial.radius[0] = this.axis.radial.radius[1] = this.attr.height/5.0*2;
  this.axis.radial.ccw[0] = 1*Math.PI;
  this.axis.radial.ccw[1] = 2*Math.PI;
  if ( id == 'RTL00' )    this.axis.radial.gradient.callback = this.DrawText00;
  else                    this.axis.radial.gradient.callback = this.DrawText10;



  this.axis.radial.mradius[0] = ((this.axis.radial.radius[0]<=this.axis.radial.radius[1])?this.axis.radial.radius[0]:this.axis.radial.radius[1]);
  this.axis.radial.mradius[1] = ((this.axis.radial.radius[0]>this.axis.radial.radius[1])?this.axis.radial.radius[0]:this.axis.radial.radius[1]);



  this.face.thick = 1;
  this.face.color = '#FFFFFF';
  this.face.background.color = '#FFFFFF';
  this.face.font.family = 'Courier New';
  this.face.font.size  = 18;
  this.face.font.color = '#FFFFFF';


  this.value.ratio = 1.8;
  this.value.max = 100;
  this.value.delta[0] = this.value.delta[1] = 0;


}
GraphRobotStatus00.DrawText00 = function(obj)
{
  obj.SetText(obj.x(-20), obj.y(-50), 40 , "Input"            , '#FFFFFF', "bold 16px Arial");
}
GraphRobotStatus00.DrawText10 = function(obj)
{
  obj.SetText(obj.x(-65), obj.y(-50), 130, "Order UpperLeader", '#FFFFFF', "bold 16px Arial");


  /****
  obj.SetText(obj.x(left), obj.y(50),  80, "ALL", '#AAFFAA', "bold 16px Arial");
  obj.SetText(obj.x(left+120), obj.y(50),  80, "45", '#AAFFAA', "bold 24px Arial");

  obj.SetText(obj.x(left), obj.y(00),  80, "STOP", '#FF5523', "bold 16px Arial");
  obj.SetText(obj.x(left+120), obj.y(00),  80, "45", '#FF5523', "bold 24px Arial");

  obj.SetText(obj.x(left), obj.y(-50), 80, "RUNNING", '#2355FF', "bold 16px Arial");
  obj.SetText(obj.x(left+120), obj.y(-50),  80, "45", '#2355FF', "bold 24px Arial");
  ****/

  //obj.SetText(obj.x(-95), obj.y(51), 20, "45", '#AAFFAA', "bold 12px Arial");
  /***

  obj.SetText(obj.x(-130), obj.y(-80), 50, "지시량:", '#999999', "bold 12px Arial");
  obj.SetText(obj.x(-80), obj.y(-80), 50, COMMA(TOTAL), '#FFFFFF', "bold 24px Arial");

  obj.SetText(obj.x(30), obj.y(-80), 50, "불량:", '#999999', "bold 12px Arial");
  obj.SetText(obj.x(70), obj.y(-80), 200, COMMA(dp.bad), '#AA1233', "bold 24px Arial");
  ****/
}


GraphRobotStatus00.DrawValue = function()
{
  var r = DEGREE( (this.value.v*this.value.ratio));   //// DEGREE TO RADIAN
  if ( this.value.curr < this.value.v*this.value.ratio )
  {
    this.value.curr+=this.value.delta[0];
  }
  else
  {
    this.value.curr-=this.value.delta[1];
  }
  if ( this.value.curr <= 0 ) this.value.curr = 0;
  else if ( this.value.curr >= (this.value.max*this.value.ratio) ) this.value.curr = (this.value.max*this.value.ratio);
  r = DEGREE(this.value.curr);

  if ( (this.value.delta[0]==0) || (this.value.delta[1]==0) )
  {
    this.value.curr = this.value.v*this.value.ratio;
  }



  //$('#GraphCCWTitle').text( ((this.value.curr*this.value.max)/RAD(Math.PI*(3/2))).toFixed(0) + ' RPM' );
  //$('#GraphCCWTitle').text( ((this.value.curr*60)/RAD(Math.PI)).toFixed(0) + ' RPM' );
  //$('#GraphCCWTitle').text( (this.value.curr/this.value.ratio).toFixed(0) + ' EA' );


  this.context.beginPath();
  this.context.arc(this.x(0), this.y(0), 2, 0, Math.PI*2);
  this.context.strokeStyle = this.face.color;
  this.context.fillStyle = this.face.background.color;
  this.context.lineWidth = this.face.thick;
  this.context.fill();
  this.context.stroke();  this.context.beginPath();
  this.context.arc(this.x(0), this.y(0), 2, 0, Math.PI*2);
  this.context.strokeStyle = this.face.color;
  this.context.fillStyle = this.face.background.color;
  this.context.lineWidth = this.face.thick;
  this.context.fill();
  this.context.stroke();
  
  this.context.beginPath();
  this.context.moveTo(this.x( 1*Math.cos(r+DEGREE(90))), this.y( 1*Math.sin(r-DEGREE(90))) );
  this.context.lineTo(this.x( 1*Math.cos(r-DEGREE(90))), this.y( 1*Math.sin(r+DEGREE(90))) );
  this.context.lineTo(this.x((this.axis.radial.mradius[0]) * Math.cos( DEGREE(180)-r ) ), this.y((this.axis.radial.mradius[0]) * Math.sin(DEGREE(180)-r)));
  this.context.lineWidth = this.face.thick;
  this.context.strokeStyle = this.face.color;
  this.context.fillStyle = this.face.background.color;
  this.context.fill();
  this.context.stroke();


  //var color = pickColor(this.context, this.x(this.axis.radial.radius[0] * Math.cos( DEGREE(180)-r ) ), this.y(this.axis.radial.radius[0] * Math.sin(DEGREE(180)-r)));
  this.SetText( this.x(-25), this.y(-25), this.axis.radial.radius[0], (this.value.curr/this.value.ratio).toFixed(1) + " RPM", this.face.font.color, "bold 16px Arial");
  //$('#CCWV').css('background-color', color);

  ///////////////////////////////////////////////////////////////////////////////////////////
  //// extra circle  ////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  /****
  /// outer circle
  this.context.beginPath();
  this.context.arc(this.x(0), this.y(0), this.axis.radial.radius[0]+15, 0, Math.PI*2);
  this.context.strokeStyle = '#AAFFAA';
  this.context.lineWidth = 5;
  this.context.stroke();

  /// value circle #1
  this.context.beginPath();
  this.context.arc(this.x(0), this.y(0), this.axis.radial.radius[0], 0, Math.PI*2);
  this.context.strokeStyle = '#2355FF';
  this.context.lineWidth = 5;
  this.context.stroke();

  /// value circle #2
  this.context.beginPath();
  this.context.arc(this.x(0), this.y(0), this.axis.radial.radius[0]-10, 0, Math.PI*2);
  this.context.strokeStyle = '#FF5523';
  this.context.lineWidth = 5;
  this.context.stroke();
  ****/
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////



}
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// /////////////////////////////////////////////////
///////////////////////////////////////////     ///////////////////////////////////////////////
/////////////////////////////////////////          ////////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
/////////////////////////////////////                  ////////////////////////////////////////
///////////////////////////////////                      //////////////////////////////////////
//////////////////////////////////                         ////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
//////////////////////////////////                         ////////////////////////////////////
///////////////////////////////////                      //////////////////////////////////////
/////////////////////////////////////                  ////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
/////////////////////////////////////////          ////////////////////////////////////////////
///////////////////////////////////////////     ///////////////////////////////////////////////
///////////////////////////////////////////// /////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
var GraphRobotStatus01 = new codeXchart();
function DrawRobotStatusDiagram01(id)
{
  GraphRobotStatus01.InitChart(id, 'RADIAL');
  GraphRobotStatus01.PeriodicDrawChart(id,GraphRobotStatus01.attr.tmr.period);
}
GraphRobotStatus01.InitChart = function(id, type)
{
  var _v;
  this.attr.scale = 1;
  this.attr.type = type;
  this.attr.id = id + "Canvas";  /// do not modify
  this.attr.position[0] = 0;  /// do not modify
  this.attr.position[1] = 0;  /// do not modify

  //// calculate the size of div
  _v = $('#'+id).css('width').split('px');
  this.attr.width = _v[0];
  _v = $('#'+id).css('height').split('px');
  this.attr.height = _v[0];
  this.attr.dim = '2d';

  this.attr.border.color = 'transparent';
  this.attr.border.type = 'dotted';
  this.attr.border.thick=0;
  this.attr.background.color = 'transparent';

  this.attr.tmr.period = 1;

  this.axis.thick =15;
  this.axis.color = '#2233FF';

  //// Coordination of Origin the graph
  this.axis.radial.center[0] = this.attr.width/2;
  this.axis.radial.center[1] = this.attr.height/2;
  this.axis.radial.radius[0] = this.axis.radial.radius[1] = this.attr.height/5.0*2;
  this.axis.radial.ccw[0] = 1*Math.PI;
  this.axis.radial.ccw[1] = 2*Math.PI;
  if ( id == 'RTL01' )    this.axis.radial.gradient.callback = this.DrawText01;
  else                    this.axis.radial.gradient.callback = this.DrawText11;


  this.axis.radial.mradius[0] = ((this.axis.radial.radius[0]<=this.axis.radial.radius[1])?this.axis.radial.radius[0]:this.axis.radial.radius[1]);
  this.axis.radial.mradius[1] = ((this.axis.radial.radius[0]>this.axis.radial.radius[1])?this.axis.radial.radius[0]:this.axis.radial.radius[1]);



  this.face.thick = 1;
  this.face.color = '#FFFFFF';
  this.face.background.color = '#FFFFFF';
  this.face.font.family = 'Courier New';
  this.face.font.size  = 18;
  this.face.font.color = '#FFFFFF';


  this.value.ratio = 1.8;
  this.value.max = 100;
  this.value.delta[0] = this.value.delta[1] = 0;

}
GraphRobotStatus01.DrawText01 = function(obj)
{
  obj.SetText(obj.x(-65), obj.y(-50), 130, "Subsidiary Materials", '#FFFFFF', "bold 16px Arial");
}
GraphRobotStatus01.DrawText11 = function(obj)
{
  obj.SetText(obj.x(-15), obj.y(-50), 30 , "AGV"                 , '#FFFFFF', "bold 16px Arial");


  /****
  obj.SetText(obj.x(left), obj.y(50),  80, "ALL", '#AAFFAA', "bold 16px Arial");
  obj.SetText(obj.x(left+120), obj.y(50),  80, "45", '#AAFFAA', "bold 24px Arial");

  obj.SetText(obj.x(left), obj.y(00),  80, "STOP", '#FF5523', "bold 16px Arial");
  obj.SetText(obj.x(left+120), obj.y(00),  80, "45", '#FF5523', "bold 24px Arial");

  obj.SetText(obj.x(left), obj.y(-50), 80, "RUNNING", '#2355FF', "bold 16px Arial");
  obj.SetText(obj.x(left+120), obj.y(-50),  80, "45", '#2355FF', "bold 24px Arial");
  ****/

  //obj.SetText(obj.x(-95), obj.y(51), 20, "45", '#AAFFAA', "bold 12px Arial");
  /***

  obj.SetText(obj.x(-130), obj.y(-80), 50, "지시량:", '#999999', "bold 12px Arial");
  obj.SetText(obj.x(-80), obj.y(-80), 50, COMMA(TOTAL), '#FFFFFF', "bold 24px Arial");

  obj.SetText(obj.x(30), obj.y(-80), 50, "불량:", '#999999', "bold 12px Arial");
  obj.SetText(obj.x(70), obj.y(-80), 200, COMMA(dp.bad), '#AA1233', "bold 24px Arial");
  ****/
}


GraphRobotStatus01.DrawValue = function()
{
  var r = DEGREE( (this.value.v*this.value.ratio));   //// DEGREE TO RADIAN
  if ( this.value.curr < this.value.v*this.value.ratio )
  {
    this.value.curr+=this.value.delta[0];
  }
  else
  {
    this.value.curr-=this.value.delta[1];
  }
  if ( this.value.curr <= 0 ) this.value.curr = 0;
  else if ( this.value.curr >= (this.value.max*this.value.ratio) ) this.value.curr = (this.value.max*this.value.ratio);
  r = DEGREE(this.value.curr);

  if ( (this.value.delta[0]==0) || (this.value.delta[1]==0) )
  {
    this.value.curr = this.value.v*this.value.ratio;
  }


  //$('#GraphCCWTitle').text( ((this.value.curr*this.value.max)/RAD(Math.PI*(3/2))).toFixed(0) + ' RPM' );
  //$('#GraphCCWTitle').text( ((this.value.curr*60)/RAD(Math.PI)).toFixed(0) + ' RPM' );
  //$('#GraphCCWTitle').text( (this.value.curr/this.value.ratio).toFixed(0) + ' EA' );

  this.context.beginPath();
  this.context.arc(this.x(0), this.y(0), 2, 0, Math.PI*2);
  this.context.strokeStyle = this.face.color;
  this.context.fillStyle = this.face.background.color;
  this.context.lineWidth = this.face.thick;
  this.context.fill();
  this.context.stroke();
  
  this.context.beginPath();
  this.context.moveTo(this.x( 1*Math.cos(r+DEGREE(90))), this.y( 1*Math.sin(r-DEGREE(90))));
  this.context.lineTo(this.x( 1*Math.cos(r-DEGREE(90))), this.y( 1*Math.sin(r+DEGREE(90))));
  this.context.lineTo(this.x((this.axis.radial.mradius[0]) * Math.cos( DEGREE(180)-r ) ), this.y((this.axis.radial.mradius[0]) * Math.sin(DEGREE(180)-r)));
  this.context.lineWidth = this.face.thick;
  this.context.strokeStyle = this.face.color;
  this.context.fillStyle = this.face.background.color;
  this.context.fill();
  this.context.stroke();
  
  //var color = pickColor(this.context, this.x(this.axis.radial.radius[0] * Math.cos( DEGREE(180)-r ) ), this.y(this.axis.radial.radius[0] * Math.sin(DEGREE(180)-r)));
  this.SetText( this.x(-25), this.y(-25), this.axis.radial.radius[0], (this.value.curr/this.value.ratio).toFixed(1) + " RPM", this.face.font.color, "bold 16px Arial");


  //$('#CCWV').css('background-color', color);





  ///////////////////////////////////////////////////////////////////////////////////////////
  //// extra circle  ////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  /****
  /// outer circle
  this.context.beginPath();
  this.context.arc(this.x(0), this.y(0), this.axis.radial.radius[0]+15, 0, Math.PI*2);
  this.context.strokeStyle = '#AAFFAA';
  this.context.lineWidth = 5;
  this.context.stroke();

  /// value circle #1
  this.context.beginPath();
  this.context.arc(this.x(0), this.y(0), this.axis.radial.radius[0], 0, Math.PI*2);
  this.context.strokeStyle = '#2355FF';
  this.context.lineWidth = 5;
  this.context.stroke();

  /// value circle #2
  this.context.beginPath();
  this.context.arc(this.x(0), this.y(0), this.axis.radial.radius[0]-10, 0, Math.PI*2);
  this.context.strokeStyle = '#FF5523';
  this.context.lineWidth = 5;
  this.context.stroke();
  ****/
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////




}

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// /////////////////////////////////////////////////
///////////////////////////////////////////     ///////////////////////////////////////////////
/////////////////////////////////////////          ////////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
/////////////////////////////////////                  ////////////////////////////////////////
///////////////////////////////////                      //////////////////////////////////////
//////////////////////////////////                         ////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
//////////////////////////////////                         ////////////////////////////////////
///////////////////////////////////                      //////////////////////////////////////
/////////////////////////////////////                  ////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
/////////////////////////////////////////          ////////////////////////////////////////////
///////////////////////////////////////////     ///////////////////////////////////////////////
///////////////////////////////////////////// /////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
var GraphRobotStatus02 = new codeXchart();
function DrawRobotStatusDiagram02(id)
{
  GraphRobotStatus02.InitChart(id, 'RADIAL');
  GraphRobotStatus02.PeriodicDrawChart(id,GraphRobotStatus02.attr.tmr.period);
}
GraphRobotStatus02.InitChart = function(id, type)
{
  var _v;
  this.attr.scale = 1;
  this.attr.type = type;
  this.attr.id = id + "Canvas";  /// do not modify
  this.attr.position[0] = 0;  /// do not modify
  this.attr.position[1] = 0;  /// do not modify

  //// calculate the size of div
  _v = $('#'+id).css('width').split('px');
  this.attr.width = _v[0];
  _v = $('#'+id).css('height').split('px');
  this.attr.height = _v[0];
  this.attr.dim = '2d';

  this.attr.border.color = 'transparent';
  this.attr.border.type = 'dotted';
  this.attr.border.thick=0;
  this.attr.background.color = 'transparent';

  this.attr.tmr.period = 1;

  this.axis.thick =15;
  this.axis.color = '#FF5533';

  //// Coordination of Origin the graph
  this.axis.radial.center[0] = this.attr.width/2;
  this.axis.radial.center[1] = this.attr.height/2;
  this.axis.radial.radius[0] = this.axis.radial.radius[1] = this.attr.height/5.0*2;
  this.axis.radial.ccw[0] = 1*Math.PI;
  this.axis.radial.ccw[1] = 2*Math.PI;
  if ( id == 'RTL02' )   this.axis.radial.gradient.callback = this.DrawText02;
  else                   this.axis.radial.gradient.callback = this.DrawText12;


  this.axis.radial.mradius[0] = ((this.axis.radial.radius[0]<=this.axis.radial.radius[1])?this.axis.radial.radius[0]:this.axis.radial.radius[1]);
  this.axis.radial.mradius[1] = ((this.axis.radial.radius[0]>this.axis.radial.radius[1])?this.axis.radial.radius[0]:this.axis.radial.radius[1]);

  this.face.thick = 1;
  this.face.color = '#FFFFFF';
  this.face.background.color = '#FFFFFF';
  this.face.font.family = 'Courier New';
  this.face.font.size  = 18;
  this.face.font.color = '#FFFFFF';

  this.value.ratio = 1.8;
  this.value.max = 100;
  this.value.delta[0] = this.value.delta[1] = 0;

}
 GraphRobotStatus02.DrawText02 = function(obj)
{
  obj.SetText(obj.x(-40), obj.y(-50), 80, "RFID Attach", '#FFFFFF', "bold 16px Arial");

}
GraphRobotStatus02.DrawText12 = function(obj)
{
  obj.SetText(obj.x(-25), obj.y(-50)    , 50, "Return"     , '#FFFFFF', "bold 16px Arial");


  /****
  obj.SetText(obj.x(left), obj.y(50),  80, "ALL", '#AAFFAA', "bold 16px Arial");
  obj.SetText(obj.x(left+120), obj.y(50),  80, "45", '#AAFFAA', "bold 24px Arial");

  obj.SetText(obj.x(left), obj.y(00),  80, "STOP", '#FF5523', "bold 16px Arial");
  obj.SetText(obj.x(left+120), obj.y(00),  80, "45", '#FF5523', "bold 24px Arial");

  obj.SetText(obj.x(left), obj.y(-50), 80, "RUNNING", '#2355FF', "bold 16px Arial");
  obj.SetText(obj.x(left+120), obj.y(-50),  80, "45", '#2355FF', "bold 24px Arial");
  ****/

  //obj.SetText(obj.x(-95), obj.y(51), 20, "45", '#AAFFAA', "bold 12px Arial");
  /***

  obj.SetText(obj.x(-130), obj.y(-80), 50, "지시량:", '#999999', "bold 12px Arial");
  obj.SetText(obj.x(-80), obj.y(-80), 50, COMMA(TOTAL), '#FFFFFF', "bold 24px Arial");

  obj.SetText(obj.x(30), obj.y(-80), 50, "불량:", '#999999', "bold 12px Arial");
  obj.SetText(obj.x(70), obj.y(-80), 200, COMMA(dp.bad), '#AA1233', "bold 24px Arial");
  ****/
}


GraphRobotStatus02.DrawValue = function()
{
  var r = DEGREE( (this.value.v*this.value.ratio));   //// DEGREE TO RADIAN
  if ( this.value.curr < this.value.v*this.value.ratio )
  {
    this.value.curr+=this.value.delta[0];
  }
  else
  {
    this.value.curr-=this.value.delta[1];
  }
  if ( this.value.curr <= 0 ) this.value.curr = 0;
  else if ( this.value.curr >= (this.value.max*this.value.ratio) ) this.value.curr = (this.value.max*this.value.ratio);
  r = DEGREE(this.value.curr);

  if ( (this.value.delta[0]==0) || (this.value.delta[1]==0) )
  {
    this.value.curr = this.value.v*this.value.ratio;
  }



  //$('#GraphCCWTitle').text( ((this.value.curr*this.value.max)/RAD(Math.PI*(3/2))).toFixed(0) + ' RPM' );
  //$('#GraphCCWTitle').text( ((this.value.curr*60)/RAD(Math.PI)).toFixed(0) + ' RPM' );
  //$('#GraphCCWTitle').text( (this.value.curr/this.value.ratio).toFixed(0) + ' EA' );

  this.context.beginPath();
  this.context.arc(this.x(0), this.y(0), 2, 0, Math.PI*2);
  this.context.strokeStyle = this.face.color;
  this.context.fillStyle = this.face.background.color;
  this.context.lineWidth = this.face.thick;
  this.context.fill();
  this.context.stroke();
  
  this.context.beginPath();
  this.context.moveTo(this.x( 1*Math.cos(r+DEGREE(90))), this.y( 1*Math.sin(r-DEGREE(90))));
  this.context.lineTo(this.x( 1*Math.cos(r-DEGREE(90))), this.y( 1*Math.sin(r+DEGREE(90))));
  this.context.lineTo(this.x((this.axis.radial.mradius[0]) * Math.cos( DEGREE(180)-r ) ), this.y((this.axis.radial.mradius[0]) * Math.sin(DEGREE(180)-r)));
  this.context.lineWidth = this.face.thick;
  this.context.strokeStyle = this.face.color;
  this.context.fillStyle = this.face.background.color;
  this.context.fill();
  this.context.stroke();

  //var color = pickColor(this.context, this.x(this.axis.radial.radius[0] * Math.cos( DEGREE(180)-r ) ), this.y(this.axis.radial.radius[0] * Math.sin(DEGREE(180)-r)));
  this.SetText( this.x(-25), this.y(-25), this.axis.radial.radius[0], (this.value.curr/this.value.ratio).toFixed(1) + " RPM", this.face.font.color, "bold 16px Arial");


  //$('#CCWV').css('background-color', color);



  ///////////////////////////////////////////////////////////////////////////////////////////
  //// extra circle  ////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  /****
  /// outer circle
  this.context.beginPath();
  this.context.arc(this.x(0), this.y(0), this.axis.radial.radius[0]+15, 0, Math.PI*2);
  this.context.strokeStyle = '#AAFFAA';
  this.context.lineWidth = 5;
  this.context.stroke();

  /// value circle #1
  this.context.beginPath();
  this.context.arc(this.x(0), this.y(0), this.axis.radial.radius[0], 0, Math.PI*2);
  this.context.strokeStyle = '#2355FF';
  this.context.lineWidth = 5;
  this.context.stroke();

  /// value circle #2
  this.context.beginPath();
  this.context.arc(this.x(0), this.y(0), this.axis.radial.radius[0]-10, 0, Math.PI*2);
  this.context.strokeStyle = '#FF5523';
  this.context.lineWidth = 5;
  this.context.stroke();
  ****/
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////

}
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// /////////////////////////////////////////////////
///////////////////////////////////////////     ///////////////////////////////////////////////
/////////////////////////////////////////          ////////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
/////////////////////////////////////                  ////////////////////////////////////////
///////////////////////////////////                      //////////////////////////////////////
//////////////////////////////////                         ////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
//////////////////////////////////                         ////////////////////////////////////
///////////////////////////////////                      //////////////////////////////////////
/////////////////////////////////////                  ////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
/////////////////////////////////////////          ////////////////////////////////////////////
///////////////////////////////////////////     ///////////////////////////////////////////////
///////////////////////////////////////////// /////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////






var GraphRobotStatus10 = new codeXchart();
function DrawRobotStatusDiagram10(id)
{
  GraphRobotStatus10.InitChart(id, 'RADIAL');
  GraphRobotStatus10.PeriodicDrawChart(id,GraphRobotStatus10.attr.tmr.period);
}
GraphRobotStatus10.InitChart = function(id, type)
{
  var _v;
  this.attr.scale = 1;
  this.attr.type = type;
  this.attr.id = id + "Canvas";  /// do not modify
  this.attr.position[0] = 0;  /// do not modify
  this.attr.position[1] = 0;  /// do not modify

  //// calculate the size of div
  _v = $('#'+id).css('width').split('px');
  this.attr.width = _v[0];
  _v = $('#'+id).css('height').split('px');
  this.attr.height = _v[0];
  this.attr.dim = '2d';

  this.attr.border.color = 'transparent';
  this.attr.border.type = 'dotted';
  this.attr.border.thick=0;
  this.attr.background.color = 'transparent';

  this.attr.tmr.period = 1;

  this.axis.thick =15;
  this.axis.color = '#FFFF00';

  //// Coordination of Origin the graph

  this.axis.radial.center[0] = this.attr.width/2;
  this.axis.radial.center[1] = this.attr.height/2;
  this.axis.radial.radius[0] = this.axis.radial.radius[1] = this.attr.height/5.0*2;
  this.axis.radial.ccw[0] = 1*Math.PI;
  this.axis.radial.ccw[1] = 2*Math.PI;
  if ( id == 'RTL00' )    this.axis.radial.gradient.callback = this.DrawText00;
  else                    this.axis.radial.gradient.callback = this.DrawText10;



  this.axis.radial.mradius[0] = ((this.axis.radial.radius[0]<=this.axis.radial.radius[1])?this.axis.radial.radius[0]:this.axis.radial.radius[1]);
  this.axis.radial.mradius[1] = ((this.axis.radial.radius[0]>this.axis.radial.radius[1])?this.axis.radial.radius[0]:this.axis.radial.radius[1]);



  this.face.thick = 1;
  this.face.color = '#FFFFFF';
  this.face.background.color = '#FFFFFF';
  this.face.font.family = 'Courier New';
  this.face.font.size  = 18;
  this.face.font.color = '#FFFFFF';


  this.value.ratio = 1.8;
  this.value.max = 100;
  this.value.delta[0] = this.value.delta[1] = 0;


}
GraphRobotStatus10.DrawText00 = function(obj)
{
  obj.SetText(obj.x(-20), obj.y(-50), 40 , "Input"            , '#FFFFFF', "bold 16px Arial");
}
GraphRobotStatus10.DrawText10 = function(obj)
{
  obj.SetText(obj.x(-65), obj.y(-50), 130, "Order UpperLeader", '#FFFFFF', "bold 16px Arial");


  /****
  obj.SetText(obj.x(left), obj.y(50),  80, "ALL", '#AAFFAA', "bold 16px Arial");
  obj.SetText(obj.x(left+120), obj.y(50),  80, "45", '#AAFFAA', "bold 24px Arial");

  obj.SetText(obj.x(left), obj.y(00),  80, "STOP", '#FF5523', "bold 16px Arial");
  obj.SetText(obj.x(left+120), obj.y(00),  80, "45", '#FF5523', "bold 24px Arial");

  obj.SetText(obj.x(left), obj.y(-50), 80, "RUNNING", '#2355FF', "bold 16px Arial");
  obj.SetText(obj.x(left+120), obj.y(-50),  80, "45", '#2355FF', "bold 24px Arial");
  ****/

  //obj.SetText(obj.x(-95), obj.y(51), 20, "45", '#AAFFAA', "bold 12px Arial");
  /***

  obj.SetText(obj.x(-130), obj.y(-80), 50, "지시량:", '#999999', "bold 12px Arial");
  obj.SetText(obj.x(-80), obj.y(-80), 50, COMMA(TOTAL), '#FFFFFF', "bold 24px Arial");

  obj.SetText(obj.x(30), obj.y(-80), 50, "불량:", '#999999', "bold 12px Arial");
  obj.SetText(obj.x(70), obj.y(-80), 200, COMMA(dp.bad), '#AA1233', "bold 24px Arial");
  ****/
}


GraphRobotStatus10.DrawValue = function()
{
  var r = DEGREE( (this.value.v*this.value.ratio));   //// DEGREE TO RADIAN
  if ( this.value.curr < this.value.v*this.value.ratio )
  {
    this.value.curr+=this.value.delta[0];
  }
  else
  {
    this.value.curr-=this.value.delta[1];
  }
  if ( this.value.curr <= 0 ) this.value.curr = 0;
  else if ( this.value.curr >= (this.value.max*this.value.ratio) ) this.value.curr = (this.value.max*this.value.ratio);
  r = DEGREE(this.value.curr);

  if ( (this.value.delta[0]==0) || (this.value.delta[1]==0) )
  {
    this.value.curr = this.value.v*this.value.ratio;
  }



  //$('#GraphCCWTitle').text( ((this.value.curr*this.value.max)/RAD(Math.PI*(3/2))).toFixed(0) + ' RPM' );
  //$('#GraphCCWTitle').text( ((this.value.curr*60)/RAD(Math.PI)).toFixed(0) + ' RPM' );
  //$('#GraphCCWTitle').text( (this.value.curr/this.value.ratio).toFixed(0) + ' EA' );


  this.context.beginPath();
  this.context.arc(this.x(0), this.y(0), 2, 0, Math.PI*2);
  this.context.strokeStyle = this.face.color;
  this.context.fillStyle = this.face.background.color;
  this.context.lineWidth = this.face.thick;
  this.context.fill();
  this.context.stroke();  this.context.beginPath();
  this.context.arc(this.x(0), this.y(0), 2, 0, Math.PI*2);
  this.context.strokeStyle = this.face.color;
  this.context.fillStyle = this.face.background.color;
  this.context.lineWidth = this.face.thick;
  this.context.fill();
  this.context.stroke();
  
  this.context.beginPath();
  this.context.moveTo(this.x( 1*Math.cos(r+DEGREE(90))), this.y( 1*Math.sin(r-DEGREE(90))) );
  this.context.lineTo(this.x( 1*Math.cos(r-DEGREE(90))), this.y( 1*Math.sin(r+DEGREE(90))) );
  this.context.lineTo(this.x((this.axis.radial.mradius[0]) * Math.cos( DEGREE(180)-r ) ), this.y((this.axis.radial.mradius[0]) * Math.sin(DEGREE(180)-r)));
  this.context.lineWidth = this.face.thick;
  this.context.strokeStyle = this.face.color;
  this.context.fillStyle = this.face.background.color;
  this.context.fill();
  this.context.stroke();


  //var color = pickColor(this.context, this.x(this.axis.radial.radius[0] * Math.cos( DEGREE(180)-r ) ), this.y(this.axis.radial.radius[0] * Math.sin(DEGREE(180)-r)));
  this.SetText( this.x(-25), this.y(-25), this.axis.radial.radius[0], (this.value.curr/this.value.ratio).toFixed(1) + " RPM", this.face.font.color, "bold 16px Arial");
  //$('#CCWV').css('background-color', color);

  ///////////////////////////////////////////////////////////////////////////////////////////
  //// extra circle  ////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  /****
  /// outer circle
  this.context.beginPath();
  this.context.arc(this.x(0), this.y(0), this.axis.radial.radius[0]+15, 0, Math.PI*2);
  this.context.strokeStyle = '#AAFFAA';
  this.context.lineWidth = 5;
  this.context.stroke();

  /// value circle #1
  this.context.beginPath();
  this.context.arc(this.x(0), this.y(0), this.axis.radial.radius[0], 0, Math.PI*2);
  this.context.strokeStyle = '#2355FF';
  this.context.lineWidth = 5;
  this.context.stroke();

  /// value circle #2
  this.context.beginPath();
  this.context.arc(this.x(0), this.y(0), this.axis.radial.radius[0]-10, 0, Math.PI*2);
  this.context.strokeStyle = '#FF5523';
  this.context.lineWidth = 5;
  this.context.stroke();
  ****/
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////



}
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// /////////////////////////////////////////////////
///////////////////////////////////////////     ///////////////////////////////////////////////
/////////////////////////////////////////          ////////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
/////////////////////////////////////                  ////////////////////////////////////////
///////////////////////////////////                      //////////////////////////////////////
//////////////////////////////////                         ////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
//////////////////////////////////                         ////////////////////////////////////
///////////////////////////////////                      //////////////////////////////////////
/////////////////////////////////////                  ////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
/////////////////////////////////////////          ////////////////////////////////////////////
///////////////////////////////////////////     ///////////////////////////////////////////////
///////////////////////////////////////////// /////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
var GraphRobotStatus11 = new codeXchart();
function DrawRobotStatusDiagram11(id)
{
  GraphRobotStatus11.InitChart(id, 'RADIAL');
  GraphRobotStatus11.PeriodicDrawChart(id,GraphRobotStatus11.attr.tmr.period);
}
GraphRobotStatus11.InitChart = function(id, type)
{
  var _v;
  this.attr.scale = 1;
  this.attr.type = type;
  this.attr.id = id + "Canvas";  /// do not modify
  this.attr.position[0] = 0;  /// do not modify
  this.attr.position[1] = 0;  /// do not modify

  //// calculate the size of div
  _v = $('#'+id).css('width').split('px');
  this.attr.width = _v[0];
  _v = $('#'+id).css('height').split('px');
  this.attr.height = _v[0];
  this.attr.dim = '2d';

  this.attr.border.color = 'transparent';
  this.attr.border.type = 'dotted';
  this.attr.border.thick=0;
  this.attr.background.color = 'transparent';

  this.attr.tmr.period = 1;

  this.axis.thick =15;
  this.axis.color = '#2233FF';

  //// Coordination of Origin the graph
  this.axis.radial.center[0] = this.attr.width/2;
  this.axis.radial.center[1] = this.attr.height/2;
  this.axis.radial.radius[0] = this.axis.radial.radius[1] = this.attr.height/5.0*2;
  this.axis.radial.ccw[0] = 1*Math.PI;
  this.axis.radial.ccw[1] = 2*Math.PI;
  if ( id == 'RTL01' )    this.axis.radial.gradient.callback = this.DrawText01;
  else                    this.axis.radial.gradient.callback = this.DrawText11;


  this.axis.radial.mradius[0] = ((this.axis.radial.radius[0]<=this.axis.radial.radius[1])?this.axis.radial.radius[0]:this.axis.radial.radius[1]);
  this.axis.radial.mradius[1] = ((this.axis.radial.radius[0]>this.axis.radial.radius[1])?this.axis.radial.radius[0]:this.axis.radial.radius[1]);



  this.face.thick = 1;
  this.face.color = '#FFFFFF';
  this.face.background.color = '#FFFFFF';
  this.face.font.family = 'Courier New';
  this.face.font.size  = 18;
  this.face.font.color = '#FFFFFF';


  this.value.ratio = 1.8;
  this.value.max = 100;
  this.value.delta[0] = this.value.delta[1] = 0;

}
GraphRobotStatus11.DrawText01 = function(obj)
{
  obj.SetText(obj.x(-65), obj.y(-50), 130, "Subsidiary Materials", '#FFFFFF', "bold 16px Arial");
}
GraphRobotStatus11.DrawText11 = function(obj)
{
  obj.SetText(obj.x(-15), obj.y(-50), 30 , "AGV"                 , '#FFFFFF', "bold 16px Arial");


  /****
  obj.SetText(obj.x(left), obj.y(50),  80, "ALL", '#AAFFAA', "bold 16px Arial");
  obj.SetText(obj.x(left+120), obj.y(50),  80, "45", '#AAFFAA', "bold 24px Arial");

  obj.SetText(obj.x(left), obj.y(00),  80, "STOP", '#FF5523', "bold 16px Arial");
  obj.SetText(obj.x(left+120), obj.y(00),  80, "45", '#FF5523', "bold 24px Arial");

  obj.SetText(obj.x(left), obj.y(-50), 80, "RUNNING", '#2355FF', "bold 16px Arial");
  obj.SetText(obj.x(left+120), obj.y(-50),  80, "45", '#2355FF', "bold 24px Arial");
  ****/

  //obj.SetText(obj.x(-95), obj.y(51), 20, "45", '#AAFFAA', "bold 12px Arial");
  /***

  obj.SetText(obj.x(-130), obj.y(-80), 50, "지시량:", '#999999', "bold 12px Arial");
  obj.SetText(obj.x(-80), obj.y(-80), 50, COMMA(TOTAL), '#FFFFFF', "bold 24px Arial");

  obj.SetText(obj.x(30), obj.y(-80), 50, "불량:", '#999999', "bold 12px Arial");
  obj.SetText(obj.x(70), obj.y(-80), 200, COMMA(dp.bad), '#AA1233', "bold 24px Arial");
  ****/
}


GraphRobotStatus11.DrawValue = function()
{
  var r = DEGREE( (this.value.v*this.value.ratio));   //// DEGREE TO RADIAN
  if ( this.value.curr < this.value.v*this.value.ratio )
  {
    this.value.curr+=this.value.delta[0];
  }
  else
  {
    this.value.curr-=this.value.delta[1];
  }
  if ( this.value.curr <= 0 ) this.value.curr = 0;
  else if ( this.value.curr >= (this.value.max*this.value.ratio) ) this.value.curr = (this.value.max*this.value.ratio);
  r = DEGREE(this.value.curr);

  if ( (this.value.delta[0]==0) || (this.value.delta[1]==0) )
  {
    this.value.curr = this.value.v*this.value.ratio;
  }


  //$('#GraphCCWTitle').text( ((this.value.curr*this.value.max)/RAD(Math.PI*(3/2))).toFixed(0) + ' RPM' );
  //$('#GraphCCWTitle').text( ((this.value.curr*60)/RAD(Math.PI)).toFixed(0) + ' RPM' );
  //$('#GraphCCWTitle').text( (this.value.curr/this.value.ratio).toFixed(0) + ' EA' );

  this.context.beginPath();
  this.context.arc(this.x(0), this.y(0), 2, 0, Math.PI*2);
  this.context.strokeStyle = this.face.color;
  this.context.fillStyle = this.face.background.color;
  this.context.lineWidth = this.face.thick;
  this.context.fill();
  this.context.stroke();
  
  this.context.beginPath();
  this.context.moveTo(this.x( 1*Math.cos(r+DEGREE(90))), this.y( 1*Math.sin(r-DEGREE(90))));
  this.context.lineTo(this.x( 1*Math.cos(r-DEGREE(90))), this.y( 1*Math.sin(r+DEGREE(90))));
  this.context.lineTo(this.x((this.axis.radial.mradius[0]) * Math.cos( DEGREE(180)-r ) ), this.y((this.axis.radial.mradius[0]) * Math.sin(DEGREE(180)-r)));
  this.context.lineWidth = this.face.thick;
  this.context.strokeStyle = this.face.color;
  this.context.fillStyle = this.face.background.color;
  this.context.fill();
  this.context.stroke();
  
  //var color = pickColor(this.context, this.x(this.axis.radial.radius[0] * Math.cos( DEGREE(180)-r ) ), this.y(this.axis.radial.radius[0] * Math.sin(DEGREE(180)-r)));
  this.SetText( this.x(-25), this.y(-25), this.axis.radial.radius[0], (this.value.curr/this.value.ratio).toFixed(1) + " RPM", this.face.font.color, "bold 16px Arial");


  //$('#CCWV').css('background-color', color);





  ///////////////////////////////////////////////////////////////////////////////////////////
  //// extra circle  ////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  /****
  /// outer circle
  this.context.beginPath();
  this.context.arc(this.x(0), this.y(0), this.axis.radial.radius[0]+15, 0, Math.PI*2);
  this.context.strokeStyle = '#AAFFAA';
  this.context.lineWidth = 5;
  this.context.stroke();

  /// value circle #1
  this.context.beginPath();
  this.context.arc(this.x(0), this.y(0), this.axis.radial.radius[0], 0, Math.PI*2);
  this.context.strokeStyle = '#2355FF';
  this.context.lineWidth = 5;
  this.context.stroke();

  /// value circle #2
  this.context.beginPath();
  this.context.arc(this.x(0), this.y(0), this.axis.radial.radius[0]-10, 0, Math.PI*2);
  this.context.strokeStyle = '#FF5523';
  this.context.lineWidth = 5;
  this.context.stroke();
  ****/
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////




}

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// /////////////////////////////////////////////////
///////////////////////////////////////////     ///////////////////////////////////////////////
/////////////////////////////////////////          ////////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
/////////////////////////////////////                  ////////////////////////////////////////
///////////////////////////////////                      //////////////////////////////////////
//////////////////////////////////                         ////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
//////////////////////////////////                         ////////////////////////////////////
///////////////////////////////////                      //////////////////////////////////////
/////////////////////////////////////                  ////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
/////////////////////////////////////////          ////////////////////////////////////////////
///////////////////////////////////////////     ///////////////////////////////////////////////
///////////////////////////////////////////// /////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
var GraphRobotStatus12 = new codeXchart();
function DrawRobotStatusDiagram12(id)
{
  GraphRobotStatus12.InitChart(id, 'RADIAL');
  GraphRobotStatus12.PeriodicDrawChart(id,GraphRobotStatus12.attr.tmr.period);
}
GraphRobotStatus12.InitChart = function(id, type)
{
  var _v;
  this.attr.scale = 1;
  this.attr.type = type;
  this.attr.id = id + "Canvas";  /// do not modify
  this.attr.position[0] = 0;  /// do not modify
  this.attr.position[1] = 0;  /// do not modify

  //// calculate the size of div
  _v = $('#'+id).css('width').split('px');
  this.attr.width = _v[0];
  _v = $('#'+id).css('height').split('px');
  this.attr.height = _v[0];
  this.attr.dim = '2d';

  this.attr.border.color = 'transparent';
  this.attr.border.type = 'dotted';
  this.attr.border.thick=0;
  this.attr.background.color = 'transparent';

  this.attr.tmr.period = 1;

  this.axis.thick =15;
  this.axis.color = '#FF5533';

  //// Coordination of Origin the graph
  this.axis.radial.center[0] = this.attr.width/2;
  this.axis.radial.center[1] = this.attr.height/2;
  this.axis.radial.radius[0] = this.axis.radial.radius[1] = this.attr.height/5.0*2;
  this.axis.radial.ccw[0] = 1*Math.PI;
  this.axis.radial.ccw[1] = 2*Math.PI;
  if ( id == 'RTL02' )   this.axis.radial.gradient.callback = this.DrawText02;
  else                   this.axis.radial.gradient.callback = this.DrawText12;


  this.axis.radial.mradius[0] = ((this.axis.radial.radius[0]<=this.axis.radial.radius[1])?this.axis.radial.radius[0]:this.axis.radial.radius[1]);
  this.axis.radial.mradius[1] = ((this.axis.radial.radius[0]>this.axis.radial.radius[1])?this.axis.radial.radius[0]:this.axis.radial.radius[1]);

  this.face.thick = 1;
  this.face.color = '#FFFFFF';
  this.face.background.color = '#FFFFFF';
  this.face.font.family = 'Courier New';
  this.face.font.size  = 18;
  this.face.font.color = '#FFFFFF';

  this.value.ratio = 1.8;
  this.value.max = 100;
  this.value.delta[0] = this.value.delta[1] = 0;

}
 GraphRobotStatus12.DrawText02 = function(obj)
{
  obj.SetText(obj.x(-40), obj.y(-50), 80, "RFID Attach", '#FFFFFF', "bold 16px Arial");

}
GraphRobotStatus12.DrawText12 = function(obj)
{
  obj.SetText(obj.x(-25), obj.y(-50)    , 50, "Return"     , '#FFFFFF', "bold 16px Arial");


  /****
  obj.SetText(obj.x(left), obj.y(50),  80, "ALL", '#AAFFAA', "bold 16px Arial");
  obj.SetText(obj.x(left+120), obj.y(50),  80, "45", '#AAFFAA', "bold 24px Arial");

  obj.SetText(obj.x(left), obj.y(00),  80, "STOP", '#FF5523', "bold 16px Arial");
  obj.SetText(obj.x(left+120), obj.y(00),  80, "45", '#FF5523', "bold 24px Arial");

  obj.SetText(obj.x(left), obj.y(-50), 80, "RUNNING", '#2355FF', "bold 16px Arial");
  obj.SetText(obj.x(left+120), obj.y(-50),  80, "45", '#2355FF', "bold 24px Arial");
  ****/

  //obj.SetText(obj.x(-95), obj.y(51), 20, "45", '#AAFFAA', "bold 12px Arial");
  /***

  obj.SetText(obj.x(-130), obj.y(-80), 50, "지시량:", '#999999', "bold 12px Arial");
  obj.SetText(obj.x(-80), obj.y(-80), 50, COMMA(TOTAL), '#FFFFFF', "bold 24px Arial");

  obj.SetText(obj.x(30), obj.y(-80), 50, "불량:", '#999999', "bold 12px Arial");
  obj.SetText(obj.x(70), obj.y(-80), 200, COMMA(dp.bad), '#AA1233', "bold 24px Arial");
  ****/
}


GraphRobotStatus12.DrawValue = function()
{
  var r = DEGREE( (this.value.v*this.value.ratio));   //// DEGREE TO RADIAN
  if ( this.value.curr < this.value.v*this.value.ratio )
  {
    this.value.curr+=this.value.delta[0];
  }
  else
  {
    this.value.curr-=this.value.delta[1];
  }
  if ( this.value.curr <= 0 ) this.value.curr = 0;
  else if ( this.value.curr >= (this.value.max*this.value.ratio) ) this.value.curr = (this.value.max*this.value.ratio);
  r = DEGREE(this.value.curr);

  if ( (this.value.delta[0]==0) || (this.value.delta[1]==0) )
  {
    this.value.curr = this.value.v*this.value.ratio;
  }



  //$('#GraphCCWTitle').text( ((this.value.curr*this.value.max)/RAD(Math.PI*(3/2))).toFixed(0) + ' RPM' );
  //$('#GraphCCWTitle').text( ((this.value.curr*60)/RAD(Math.PI)).toFixed(0) + ' RPM' );
  //$('#GraphCCWTitle').text( (this.value.curr/this.value.ratio).toFixed(0) + ' EA' );

  this.context.beginPath();
  this.context.arc(this.x(0), this.y(0), 2, 0, Math.PI*2);
  this.context.strokeStyle = this.face.color;
  this.context.fillStyle = this.face.background.color;
  this.context.lineWidth = this.face.thick;
  this.context.fill();
  this.context.stroke();
  
  this.context.beginPath();
  this.context.moveTo(this.x( 1*Math.cos(r+DEGREE(90))), this.y( 1*Math.sin(r-DEGREE(90))));
  this.context.lineTo(this.x( 1*Math.cos(r-DEGREE(90))), this.y( 1*Math.sin(r+DEGREE(90))));
  this.context.lineTo(this.x((this.axis.radial.mradius[0]) * Math.cos( DEGREE(180)-r ) ), this.y((this.axis.radial.mradius[0]) * Math.sin(DEGREE(180)-r)));
  this.context.lineWidth = this.face.thick;
  this.context.strokeStyle = this.face.color;
  this.context.fillStyle = this.face.background.color;
  this.context.fill();
  this.context.stroke();

  //var color = pickColor(this.context, this.x(this.axis.radial.radius[0] * Math.cos( DEGREE(180)-r ) ), this.y(this.axis.radial.radius[0] * Math.sin(DEGREE(180)-r)));
  this.SetText( this.x(-25), this.y(-25), this.axis.radial.radius[0], (this.value.curr/this.value.ratio).toFixed(1) + " RPM", this.face.font.color, "bold 16px Arial");


  //$('#CCWV').css('background-color', color);



  ///////////////////////////////////////////////////////////////////////////////////////////
  //// extra circle  ////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////
  /****
  /// outer circle
  this.context.beginPath();
  this.context.arc(this.x(0), this.y(0), this.axis.radial.radius[0]+15, 0, Math.PI*2);
  this.context.strokeStyle = '#AAFFAA';
  this.context.lineWidth = 5;
  this.context.stroke();

  /// value circle #1
  this.context.beginPath();
  this.context.arc(this.x(0), this.y(0), this.axis.radial.radius[0], 0, Math.PI*2);
  this.context.strokeStyle = '#2355FF';
  this.context.lineWidth = 5;
  this.context.stroke();

  /// value circle #2
  this.context.beginPath();
  this.context.arc(this.x(0), this.y(0), this.axis.radial.radius[0]-10, 0, Math.PI*2);
  this.context.strokeStyle = '#FF5523';
  this.context.lineWidth = 5;
  this.context.stroke();
  ****/
  ///////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////

}

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// /////////////////////////////////////////////////
///////////////////////////////////////////     ///////////////////////////////////////////////
/////////////////////////////////////////          ////////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
/////////////////////////////////////                  ////////////////////////////////////////
///////////////////////////////////                      //////////////////////////////////////
//////////////////////////////////                         ////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
////////// Key=7, 압력
var GraphPressureStatus = new codeXchart();
function DrawPressureStatusGraph(id)
{
  GraphPressureStatus.InitChart(id, 'RADIAL');
  GraphPressureStatus.PeriodicDrawChart(id,GraphPressureStatus.attr.tmr.period);
}
GraphPressureStatus.InitChart = function(id, type)
{
  var _v;
  this.attr.scale = 1;
  this.attr.type = type;
  this.attr.id = id + "Canvas";  /// do not modify
  this.attr.position[0] = 0;  /// do not modify
  this.attr.position[1] = 0;  /// do not modify

  //// calculate the size of div
  _v = $('#'+id).css('width').split('px');
  this.attr.width = _v[0];
  _v = $('#'+id).css('height').split('px');
  this.attr.height = _v[0];
  this.attr.dim = '2d';

  this.attr.border.color = 'transparent';
  this.attr.border.type = 'dotted';
  this.attr.border.thick=0;
  this.attr.background.color = 'transparent';

  this.attr.tmr.period = 1;

  this.axis.thick =15;
  this.axis.color = '#FF5533';

  //// Coordination of Origin the graph
  this.axis.radial.center[0] = this.attr.width/2;
  this.axis.radial.center[1] = this.attr.height/2-20;
  this.axis.radial.radius[0] = this.axis.radial.radius[1] = this.attr.height/2.1
  this.axis.radial.ccw[0] = DEGREE(135);
  this.axis.radial.ccw[1] = DEGREE(45);
  this.axis.radial.gradient.callback = this.DrawGradient;


  this.axis.radial.mradius[0] = ((this.axis.radial.radius[0]<=this.axis.radial.radius[1])?this.axis.radial.radius[0]:this.axis.radial.radius[1]);
  this.axis.radial.mradius[1] = ((this.axis.radial.radius[0]>this.axis.radial.radius[1])?this.axis.radial.radius[0]:this.axis.radial.radius[1]);



  this.face.thick = 1;
  this.face.color = '#FFFFFF';
  this.face.background.color = '#FFFFFF';
  this.face.font.family = 'Courier New';
  this.face.font.size  = 18;
  this.face.font.color = '#FFFFFF';


  this.value.ratio = 2.7;
  this.value.max = 100;
  this.value.delta[0] = this.value.delta[1] = 0;
}
GraphPressureStatus.DrawGradient = function(obj)
{
  var spectrum_offset = 20;
  var grd = obj.context.createLinearGradient(obj.X(obj.axis.radial.center[0])-obj.axis.radial.radius[0]-spectrum_offset, 0, obj.X(obj.axis.radial.center[0])+obj.axis.radial.radius[0]+spectrum_offset, 0);
  grd.addColorStop(0, "#70FF00");
  grd.addColorStop(0.5, "#FFFF00");
  grd.addColorStop(1, "#FF0000");
  obj.context.strokeStyle = grd;

  obj.SetText( obj.x( (obj.axis.radial.radius[0]-5)*Math.cos(DEGREE(225))), obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(225))), 20, 0,   '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-5)*Math.cos(DEGREE(198))), obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(198))), 20, 10,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-7)*Math.cos(DEGREE(171))), obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(171))), 20, 20,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-5)*Math.cos(DEGREE(144))), obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(144))), 20, 30,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-5)*Math.cos(DEGREE(117))), obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(117))), 20, 40,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-5)*Math.cos(DEGREE(90))),  obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(90))),  20, 50,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-20)*Math.cos(DEGREE(63))),  obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(63))),  20, 60,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-20)*Math.cos(DEGREE(36))),  obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(36))),  20, 70,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-18)*Math.cos(DEGREE(9))),   obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(9))),   20, 80,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-20)*Math.cos(DEGREE(342))), obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(342))), 20, 90,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-30)*Math.cos(DEGREE(315))), obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(315))), 20, 100, '#FFFFFF', "bold 12px Arial");
}

GraphPressureStatus.DrawText = function(obj)
{
  //obj.SetText(obj.x(-25), obj.y(-50), 80, "Input", '#FFFFFF', "bold 16px Arial");


  /****
  obj.SetText(obj.x(left), obj.y(50),  80, "ALL", '#AAFFAA', "bold 16px Arial");
  obj.SetText(obj.x(left+120), obj.y(50),  80, "45", '#AAFFAA', "bold 24px Arial");

  obj.SetText(obj.x(left), obj.y(00),  80, "STOP", '#FF5523', "bold 16px Arial");
  obj.SetText(obj.x(left+120), obj.y(00),  80, "45", '#FF5523', "bold 24px Arial");

  obj.SetText(obj.x(left), obj.y(-50), 80, "RUNNING", '#2355FF', "bold 16px Arial");
  obj.SetText(obj.x(left+120), obj.y(-50),  80, "45", '#2355FF', "bold 24px Arial");
  ****/

  //obj.SetText(obj.x(-95), obj.y(51), 20, "45", '#AAFFAA', "bold 12px Arial");
  /***

  obj.SetText(obj.x(-130), obj.y(-80), 50, "지시량:", '#999999', "bold 12px Arial");
  obj.SetText(obj.x(-80), obj.y(-80), 50, COMMA(TOTAL), '#FFFFFF', "bold 24px Arial");

  obj.SetText(obj.x(30), obj.y(-80), 50, "불량:", '#999999', "bold 12px Arial");
  obj.SetText(obj.x(70), obj.y(-80), 200, COMMA(dp.bad), '#AA1233', "bold 24px Arial");
  ****/
}


GraphPressureStatus.DrawValue = function()
{
  var r = DEGREE( (this.value.v*this.value.ratio));   //// DEGREE TO RADIAN
  try
  {
    if ( this.value.curr < this.value.v*this.value.ratio )
    {
      this.value.curr+=this.value.delta[0];
    }
    else
    {
      this.value.curr-=this.value.delta[1];
    }
    if ( this.value.curr <= 0 ) this.value.curr = 0;
    else if ( this.value.curr >= (this.value.max*this.value.ratio) ) this.value.curr = (this.value.max*this.value.ratio);
    r = DEGREE(this.value.curr);

    if ( (this.value.delta[0]==0) || (this.value.delta[1]==0) )
    {
      this.value.curr = this.value.v*this.value.ratio;
    }



    //$('#GraphCCWTitle').text( ((this.value.curr*this.value.max)/RAD(Math.PI*(3/2))).toFixed(0) + ' RPM' );
    //$('#GraphCCWTitle').text( ((this.value.curr*60)/RAD(Math.PI)).toFixed(0) + ' RPM' );
    //$('#GraphCCWTitle').text( (this.value.curr/this.value.ratio).toFixed(0) + ' EA' );

    this.context.beginPath();
    this.context.arc(this.x(0), this.y(0), 2, 0, Math.PI*2);
    this.context.strokeStyle = this.face.color;
    this.context.fillStyle = this.face.background.color;
    this.context.lineWidth = this.face.thick;
    this.context.fill();
    this.context.stroke();

    this.context.beginPath();
    this.context.moveTo(this.x( 1*Math.cos(r+DEGREE(90))), this.y( 1*Math.sin(r-DEGREE(90))));
    this.context.lineTo(this.x( 1*Math.cos(r-DEGREE(90))), this.y( 1*Math.sin(r+DEGREE(90))));
    this.context.lineTo(this.x((this.axis.radial.mradius[0]) * Math.cos( DEGREE(225)-r ) ), this.y((this.axis.radial.mradius[0]) * Math.sin(DEGREE(225)-r)));
    this.context.lineWidth = this.face.thick;
    this.context.strokeStyle = this.face.color;
    this.context.fillStyle = this.face.background.color;
    this.context.fill();
    this.context.stroke();

    var color = pickColor(this.context, this.x(this.axis.radial.radius[0] * Math.cos( DEGREE(225)-r ) ), this.y(this.axis.radial.radius[0] * Math.sin(DEGREE(225)-r)));
    this.SetText( this.x(-15), this.y(-25), this.axis.radial.radius[0], (this.value.curr/this.value.ratio).toFixed(1), this.face.font.color, "bold 16px Arial");
  }
  catch(exp)
  {

  }
}

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// /////////////////////////////////////////////////
///////////////////////////////////////////     ///////////////////////////////////////////////
/////////////////////////////////////////          ////////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
/////////////////////////////////////                  ////////////////////////////////////////
///////////////////////////////////                      //////////////////////////////////////
//////////////////////////////////                         ////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
//////////////////////////////////                         ////////////////////////////////////
///////////////////////////////////                      //////////////////////////////////////
/////////////////////////////////////                  ////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
/////////////////////////////////////////          ////////////////////////////////////////////
///////////////////////////////////////////     ///////////////////////////////////////////////
///////////////////////////////////////////// /////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
var GraphPressureStatusQuard = new codeXchart();
function DrawPressureStatusGraphQuard(id)
{
  GraphPressureStatusQuard.InitChart(id, 'QUADRANT');
  GraphPressureStatusQuard.PeriodicDrawChart(id,GraphPressureStatusQuard.attr.tmr.period);
}
GraphPressureStatusQuard.InitChart = function(id, type)
{
  var _v;
  this.attr.scale = 1;
  this.attr.type = type;
  this.attr.id = id + "Canvas";  /// do not modify
  this.attr.position[0] = 0;  /// do not modify
  this.attr.position[1] = 0;  /// do not modify

  //// calculate the size of div
  _v = $('#'+id).css('width').split('px');
  this.attr.width = _v[0];
  _v = $('#'+id).css('height').split('px');
  this.attr.height = _v[0];
  this.attr.dim = '2d';

  this.attr.border.color = 'transparent';
  this.attr.border.type = 'dotted';
  this.attr.border.thick=0;
  this.attr.background.color = 'transparent';

  this.attr.update.period = 10; //1800000;
  this.attr.tmr.period = 1;
  this.attr.drawing.continuous = true;

  this.axis.thick =1;
  this.axis.color = '#FFFFFF';

  
  this.axis.quadrant.bgn[0] = 20;
  this.axis.quadrant.bgn[1] = 20;
  this.axis.quadrant.end[0] = 290;
  this.axis.quadrant.end[1] = 320;

  this.axis.quadrant.x.color = '#FFFF00';
  this.axis.quadrant.x.bounds = 100;
  this.axis.quadrant.x.bias.use = 1;
  this.axis.quadrant.y.color = '#FFFF00';
  this.axis.quadrant.y.bias.use = 1;

  this.axis.quadrant.x.unit.ratio = 10;
  this.axis.quadrant.y.unit.ratio = 10;
  this.axis.quadrant.x.unit.marking_offset = 10;
  this.axis.quadrant.y.unit.marking_offset = 1;

  this.axis.quadrant.x.strong.bounds = (this.axis.quadrant.x.unit.marking_offset);

  this.axis.quadrant.x.elapsed = 10;

  this.face.thick = 1;
  this.face.color = '#FFFFFF';
  this.face.background.color = 'transparent';
  this.face.font.family = 'Courier New';
  this.face.font.size  = 18;
  this.face.font.color = '#FFFFFF';


  this.value.v = new Array();
  this.value.ratio = 1.0;
  this.value.max = 100;
  this.value.delta[0] = this.value.delta[1] = 0;


  this.value.coord.xy = new Array();
  this.value.coord.index = null;

  this.callback = this.Callback;
}

GraphPressureStatusQuard.Callback = function(obj, ecode)
{
  if ( ecode == 0xE000105B )
  {

  }
  if ( ecode == 0xE000101B )
  {
  }

  if ( ecode == 0xE000101A )
  {
    this.UpdateXYBias('T',1000);
  }

  if ( ecode == 0xE00010DB )
  {
  }

}

GraphPressureStatusQuard.DrawValue = function(obj)
{
  //this.DrawLine([0,0], [1,1], 2);
  //this.DrawRectLine([0,0],[1,1],true);
  //this.DrawRectLine([1,1],[3,5],true);
  //this.DrawRectLine([2,1],[4,3],true);

  //this.DrawDPulse([0,20], 2);
  //this.DrawDPulse([4,20], 2);

  if ( this.UpdatePeriodicValue(this.attr.update.period) == true )
  {
    var inc_dec = 0;
    if ( this.value.coord.index == null )
    {
      this.value.coord.index = this.axis.quadrant.x.max;
      for ( i=this.axis.quadrant.x.max; i>=0 ; i-- )
      {
        this.value.coord.xy[i] = new Array();
        this.value.coord.xy[i][0] = null;
        this.value.coord.xy[i][1] = null;
      }
    }
    else
    {
      inc_dec = -1;
    }

    for ( i=0; i<this.axis.quadrant.x.max; i++ )
    {
      this.value.coord.xy[i][0] = i;
      this.value.coord.xy[i][1] = this.value.coord.xy[i+1][1];
    }
    this.value.coord.index = valueRotate(this.value.coord.index, this.axis.quadrant.x.max, inc_dec);

    this.value.coord.xy[this.axis.quadrant.x.max][0] = this.axis.quadrant.x.max;
    this.value.coord.xy[this.axis.quadrant.x.max][1] = this.value.v;

    /****
    var str = '';
    for ( i=0; i<=this.axis.quadrant.x.max ; i++ )
    {
      str += '(' + this.value.coord.xy[i][0] + ', ' + this.value.coord.xy[i][1] + ')  |  ';
    }
    console.log(str);
    ****/

    /****
    this.value.coord.xy[0] -= this.axis.quadrant.x.unit.ratio;
    if ( this.value.coord.xy[0] < 0 )
    {
      if ( this.attr.drawing.continuous == true )
      {
        this.value.coord.xy[0] = 0;
      }
      else
      {
        this.value.coord.xy[0] = this.axis.quadrant.x.max*this.axis.quadrant.x.unit.ratio;
      }
    }
    this.axis.quadrant.x.elapsed += this.axis.quadrant.x.unit.ratio;
    ***/


  }
  if ( this.value.coord.index != null )
  {
    for ( i=0 ; i< this.axis.quadrant.x.max  ; i++ )
    {
      if ( this.value.coord.xy[i][0]!=null )
      {
        //console.log(this.value.coord.xy[i  ][0]*this.axis.quadrant.x.unit.ratio + ', ' + this.value.coord.xy[i  ][1] );
        //console.log(this.value.coord.xy[i+1][0]*this.axis.quadrant.x.unit.ratio + ', ' + this.value.coord.xy[i+1][1] );
          if ( i+1 <= this.axis.quadrant.x.max )
          {
            this.DrawVLine(
              [this.value.coord.xy[i  ][0]*this.axis.quadrant.x.unit.ratio,this.value.coord.xy[i  ][1]],
              [this.value.coord.xy[i+1][0]*this.axis.quadrant.x.unit.ratio,this.value.coord.xy[i+1][1]],
              2,   '#FFFFFF', 'transparent', 1.0,
              0.5, '#FFFFFF', '#FF0000', 0.5 );
          }
      }
    }
  }
  //console.log('--------------->');


  //this.DrawDPulse([this.value.coord.xy[0],this.value.v],this.axis.quadrant.x.elapsed,true);


  //this.DrawPoint([this.value.coord.xy[0],60],1,'#FFFFFF');


  //v -= this.axis.quadrant.x.unit.ratio;
  //this.DrawPoint([20,10],1,'#FFFFFF');
  //this.DrawPoint([50,50],1,'#FFFFFF');

  //this.DrawCircle([30,20],15,'#FFFFFF');

}
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// /////////////////////////////////////////////////
///////////////////////////////////////////     ///////////////////////////////////////////////
/////////////////////////////////////////          ////////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
/////////////////////////////////////                  ////////////////////////////////////////
///////////////////////////////////                      //////////////////////////////////////
//////////////////////////////////                         ////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
var GraphVisionStatus = new codeXchart();
function DrawVisionStatusGraph(id)
{
  GraphVisionStatus.InitChart(id, 'RADIAL');
  GraphVisionStatus.PeriodicDrawChart(id,GraphVisionStatus.attr.tmr.period);
}
GraphVisionStatus.InitChart = function(id, type)
{
  var _v;
  this.attr.scale = 1;
  this.attr.type = type;
  this.attr.id = id + "Canvas";  /// do not modify
  this.attr.position[0] = 0;  /// do not modify
  this.attr.position[1] = 0;  /// do not modify

  //// calculate the size of div
  _v = $('#'+id).css('width').split('px');
  this.attr.width = _v[0];
  _v = $('#'+id).css('height').split('px');
  this.attr.height = _v[0];
  this.attr.dim = '2d';

  this.attr.border.color = 'transparent';
  this.attr.border.type = 'dotted';
  this.attr.border.thick=0;
  this.attr.background.color = 'transparent';

  this.attr.tmr.period = 1;

  this.axis.thick =5;
  this.axis.color = '#FF5533';

  //// Coordination of Origin the graph
  this.axis.radial.center[0] = this.attr.width/2;
  this.axis.radial.center[1] = this.attr.height/2;
  this.axis.radial.radius[0] = this.axis.radial.radius[1] = this.attr.height/2.15;
  this.axis.radial.ccw[0] = DEGREE(0);
  this.axis.radial.ccw[1] = DEGREE(360);
  this.axis.radial.gradient.callback = this.DrawGradient;


  //this.axis.radial.mradius[0] = ((this.axis.radial.radius[0]<=this.axis.radial.radius[1])?this.axis.radial.radius[0]:this.axis.radial.radius[1]);
  //this.axis.radial.mradius[1] = ((this.axis.radial.radius[0]>this.axis.radial.radius[1])?this.axis.radial.radius[0]:this.axis.radial.radius[1]);


  this.value.ratio = 2.7;
  this.value.max = 100;
  this.value.delta[0] = this.value.delta[1] = 0;
}
GraphVisionStatus.DrawGradient = function(obj)
{
  var spectrum_offset = 20;
  var grd = obj.context.createLinearGradient(obj.X(obj.axis.radial.center[0])-obj.axis.radial.radius[0]-spectrum_offset, 0, obj.X(obj.axis.radial.center[0])+obj.axis.radial.radius[0]+spectrum_offset, 0);
  grd.addColorStop(0, "#70FF00");
  grd.addColorStop(0.5, "#FFFF00");
  grd.addColorStop(1, "#FF0000");
  obj.context.strokeStyle = grd;

  /****
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-5)*Math.cos(DEGREE(225))), obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(225))), 20, 0,   '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-5)*Math.cos(DEGREE(198))), obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(198))), 20, 10,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-7)*Math.cos(DEGREE(171))), obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(171))), 20, 20,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-5)*Math.cos(DEGREE(144))), obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(144))), 20, 30,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-5)*Math.cos(DEGREE(117))), obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(117))), 20, 40,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-5)*Math.cos(DEGREE(90))),  obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(90))),  20, 50,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-20)*Math.cos(DEGREE(63))),  obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(63))),  20, 60,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-20)*Math.cos(DEGREE(36))),  obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(36))),  20, 70,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-18)*Math.cos(DEGREE(9))),   obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(9))),   20, 80,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-20)*Math.cos(DEGREE(342))), obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(342))), 20, 90,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-30)*Math.cos(DEGREE(315))), obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(315))), 20, 100, '#FFFFFF', "bold 12px Arial");
  ****/
}

GraphVisionStatus.DrawText = function(obj)
{
  //obj.SetText(obj.x(-25), obj.y(-50), 80, "Input", '#FFFFFF', "bold 16px Arial");


  /****
  obj.SetText(obj.x(left), obj.y(50),  80, "ALL", '#AAFFAA', "bold 16px Arial");
  obj.SetText(obj.x(left+120), obj.y(50),  80, "45", '#AAFFAA', "bold 24px Arial");

  obj.SetText(obj.x(left), obj.y(00),  80, "STOP", '#FF5523', "bold 16px Arial");
  obj.SetText(obj.x(left+120), obj.y(00),  80, "45", '#FF5523', "bold 24px Arial");

  obj.SetText(obj.x(left), obj.y(-50), 80, "RUNNING", '#2355FF', "bold 16px Arial");
  obj.SetText(obj.x(left+120), obj.y(-50),  80, "45", '#2355FF', "bold 24px Arial");
  ****/

  //obj.SetText(obj.x(-95), obj.y(51), 20, "45", '#AAFFAA', "bold 12px Arial");
  /***

  obj.SetText(obj.x(-130), obj.y(-80), 50, "지시량:", '#999999', "bold 12px Arial");
  obj.SetText(obj.x(-80), obj.y(-80), 50, COMMA(TOTAL), '#FFFFFF', "bold 24px Arial");

  obj.SetText(obj.x(30), obj.y(-80), 50, "불량:", '#999999', "bold 12px Arial");
  obj.SetText(obj.x(70), obj.y(-80), 200, COMMA(dp.bad), '#AA1233', "bold 24px Arial");
  ****/
}


GraphVisionStatus.DrawValue = function()
{
  try
  {
    /// inner circle
    for ( i=0 ; i<360 ;  )
    {
      this.context.beginPath();
      this.context.arc(this.x(0), this.y(0), this.axis.radial.radius[0]-10, DEGREE(i+1), DEGREE(i+16)); i+=20;
      if ( this.value.v == 0x00 )
      {
        this.context.strokeStyle = '#FF0000';
        DrawVisionStatus('RTL', 'F');
      }
      else
      {
        this.context.strokeStyle = '#00FF00';
        DrawVisionStatus('RTL', 'P');
      }
      this.context.lineWidth = 20;
      this.context.stroke();
    }


  }
  catch(exp)
  {

  }
}

function DrawVisionStatus(id, pf)
{
  var doc = '';

  doc += '<div style="float:left;position:relative;width:300px;height:270px;background-color:transparent;">';
  if ( pf == 'P' )
  {
    doc += '<div style="float:left;position:relative;width:100px;height:100%;background-color:transparent;">';
    doc +=    '<div style="float:left;position:relative;width:100px;height:40%;background-color:#00FF00;"></div>';
    doc +=    '<div style="float:left;position:relative;width:100px;height:10%;background-color:transparent;color:#00FF00;font-size:24px">PASS</div>';
    doc +=    '<div style="float:left;position:relative;width:100px;height:40%;background-color:#990000;"></div>';
    doc +=    '<div style="float:left;position:relative;width:100px;height:10%;background-color:transparent;color:#990000;font-size:24px">FAIL</div>';
    doc += '</div>';

    doc += '<div style="float:left;position:relative;width:200px;height:100%;background-color:transparent;">';
    doc +=    '<div style="float:left;position:relative;width:200px;height:33%;background-color:transparent;color:#00FF00;font-size:24px;padding-top:20px;">';
    doc +=    'Passed ' + dp.processing;
    doc +=    '</div>';
    doc +=    '<div style="float:left;position:relative;width:200px;height:33%;background-color:transparent;color:#990000;font-size:24px;padding-top:20px;">';
    doc +=    'Failed ' + dp.bad;
    doc +=    '</div>';
    doc +=    '<div style="float:left;position:relative;width:200px;height:34%;background-color:transparent;color:#EEEEEE;font-size:24px;padding-top:20px;">';
    doc +=    'missed 0';
    doc +=    '</div>';
    doc += '</div>';
  }
  else
  {
    doc += '<div style="float:left;position:relative;width:100px;height:100%;background-color:transparent;">';
    doc +=    '<div style="float:left;position:relative;width:100px;height:40%;background-color:#007700;"></div>';
    doc +=    '<div style="float:left;position:relative;width:100px;height:10%;background-color:transparent;color:#007700;font-size:24px">PASS</div>';
    doc +=    '<div style="float:left;position:relative;width:100px;height:40%;background-color:#FF0000;"></div>';
    doc +=    '<div style="float:left;position:relative;width:100px;height:10%;background-color:transparent;color:#FF0000;font-size:24px">FAIL</div>';
    doc += '</div>';

    doc += '<div style="float:left;position:relative;width:200px;height:100%;background-color:transparent;">';
    doc +=    '<div style="float:left;position:relative;width:200px;height:33%;background-color:transparent;color:#007700;font-size:24px;padding-top:20px;">';
    doc +=    'Passed ' + dp.processing;
    doc +=    '</div>';
    doc +=    '<div style="float:left;position:relative;width:200px;height:33%;background-color:transparent;color:#FF0000;font-size:24px;padding-top:20px;">';
    doc +=    'Failed ' + dp.bad;
    doc +=    '</div>';
    doc +=    '<div style="float:left;position:relative;width:200px;height:34%;background-color:transparent;color:#EEEEEE;font-size:24px;padding-top:20px;">';
    doc +=    'missed 0';
    doc +=    '</div>';
    doc += '</div>';
  }
  doc += '</div>';
  $('#' + id).html(doc).show();
}
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
//////////////////////////////////                         ////////////////////////////////////
///////////////////////////////////                      //////////////////////////////////////
/////////////////////////////////////                  ////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
/////////////////////////////////////////          ////////////////////////////////////////////
///////////////////////////////////////////     ///////////////////////////////////////////////
///////////////////////////////////////////// /////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
////////// Key=3, 재단 상태 현황
var GraphCutterStatusAccept = new codeXchart();
function DrawCutterStatusAcceptGraph(id)
{
  GraphCutterStatusAccept.InitChart(id, 'RADIAL');
  GraphCutterStatusAccept.PeriodicDrawChart(id,GraphCutterStatusAccept.attr.tmr.period);
}

GraphCutterStatusAccept.InitChart = function(id, type)
{
  var _v;
  this.attr.scale = 1;
  this.attr.type = type;
  this.attr.id = id + "Canvas";  /// do not modify
  this.attr.position[0] = 0;  /// do not modify
  this.attr.position[1] = 0;  /// do not modify

  _v = $('#'+id).css('width').split('px');
  this.attr.width = _v[0];
  _v = $('#'+id).css('height').split('px');
  this.attr.height = _v[0];
  this.attr.dim = '2d';

  this.attr.border.color = 'transparent';
  this.attr.border.type = 'dotted';
  this.attr.border.thick=0;
  this.attr.background.color = 'transparent';

  this.attr.tmr.period = 1;

  this.axis.thick =7;
  this.axis.color = '#303030';
  this.axis.radial.center[0] = this.attr.width/2;
  this.axis.radial.center[1] = this.attr.height/2+20;
  this.axis.radial.radius[0] = this.axis.radial.radius[1] = this.attr.height/3.0;
  this.axis.radial.ccw[0] = 0*Math.PI;
  this.axis.radial.ccw[1] = 2*Math.PI;
  this.axis.radial.gradient.callback = this.DrawText;

  this.face.thick = this.axis.thick - 1;
  this.face.color = '#1234FF';
  this.face.background.color = '#FFFFFF';
  this.face.font.family = 'Courier New';
  this.face.font.size  = 18;
  this.face.font.color = '#FFFFFF';


  this.value.ratio = 3.6;
  this.value.max = 100;
  this.value.delta[0] = this.value.delta[1] = 0;
}
GraphCutterStatusAccept.DrawText = function(obj)
{

}


GraphCutterStatusAccept.DrawValue = function()
{
  var r = DEGREE( (this.value.v*this.value.ratio));   //// DEGREE TO RADIAN
  if ( this.value.curr < this.value.v*this.value.ratio )
  {
    this.value.curr+=this.value.delta[0];
  }
  else
  {
    this.value.curr-=this.value.delta[1];
  }
  if ( this.value.curr <= 0 ) this.value.curr = 0;
  else if ( this.value.curr >= (this.value.max*this.value.ratio) ) this.value.curr = (this.value.max*this.value.ratio);
  r = DEGREE(this.value.curr);

  if ( (this.value.delta[0]==0) || (this.value.delta[1]==0) )
  {
    this.value.curr = this.value.v*this.value.ratio;
  }

  /// inner circle
  this.context.beginPath();
  this.context.arc(this.x(0), this.y(0), this.axis.radial.radius[0]-10, 0, Math.PI*2);
  this.context.strokeStyle = this.axis.color;
  this.context.lineWidth = 1;
  this.context.stroke();


  /// value domain
  this.context.lineCap = 'round';
  this.context.beginPath();
  //this.context.arc(this.x(0), this.y(0), this.axis.radial.radius[0], DEGREE(0), DEGREE(PCoord(90)) );
  //this.Polarcw(this.x(0), this.y(0), this.axis.radial.radius[0], DEGREE(0), DEGREE(270));
  this.Clarck(this.x(0), this.y(0), this.axis.radial.radius[0], r);
  //this.Polarcw(this.x(0), this.y(0), this.axis.radial.radius[0], DEGREE(120), DEGREE(200));
  this.context.strokeStyle = '#2355FF'
  this.context.lineWidth = 5;
  this.context.stroke();

  this.SetText( this.x(-15), this.y(-5),80, (this.value.curr/this.value.ratio).toFixed(1) + " %", this.face.font.color, "bold 12px Arial");
  this.SetText( this.x(-40), this.y(-25),80, "Achivement Ratio", this.face.font.color, "bold 10px Arial");
  this.SetText( this.x(-55), this.y(-100),120, "Accepted Product", this.face.font.color, "bold 16px Arial");
  //this.SetText( this.x(-20), this.y(-10), this.axis.radial.radius[0], total, '#AAFFAA', "bold 32px Arial");
  //this.SetText( this.x(-35), this.y(-24), this.axis.radial.radius[0], 'NODE ALL', '#AAFFAA', "bold 12px Arial");

}
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
var GraphCutterStatusDefect = new codeXchart();
function DrawCutterStatusDefectGraph(id)
{
  GraphCutterStatusDefect.InitChart(id, 'RADIAL');
  GraphCutterStatusDefect.PeriodicDrawChart(id,GraphCutterStatusDefect.attr.tmr.period);
}

GraphCutterStatusDefect.InitChart = function(id, type)
{
  var _v;
  this.attr.scale = 1;
  this.attr.type = type;
  this.attr.id = id + "Canvas";  /// do not modify
  this.attr.position[0] = 0;  /// do not modify
  this.attr.position[1] = 0;  /// do not modify

  _v = $('#'+id).css('width').split('px');
  this.attr.width = _v[0];
  _v = $('#'+id).css('height').split('px');
  this.attr.height = _v[0];
  this.attr.dim = '2d';

  this.attr.border.color = 'transparent';
  this.attr.border.type = 'dotted';
  this.attr.border.thick=0;
  this.attr.background.color = 'transparent';

  this.attr.tmr.period = 1;

  this.axis.thick =7;
  this.axis.color = '#303030';
  this.axis.radial.center[0] = this.attr.width/2;
  this.axis.radial.center[1] = this.attr.height/2+20;
  this.axis.radial.radius[0] = this.axis.radial.radius[1] = this.attr.height/3.0;
  this.axis.radial.ccw[0] = 0*Math.PI;
  this.axis.radial.ccw[1] = 2*Math.PI;
  this.axis.radial.gradient.callback = this.DrawText;

  this.face.thick = this.axis.thick - 1;
  this.face.color = '#1234FF';
  this.face.background.color = '#FFFFFF';
  this.face.font.family = 'Courier New';
  this.face.font.size  = 18;
  this.face.font.color = '#FFFFFF';


  this.value.ratio = 3.6;
  this.value.max = 100;
  this.value.delta[0] = this.value.delta[1] = 0;
}
GraphCutterStatusDefect.DrawText = function(obj)
{

}


GraphCutterStatusDefect.DrawValue = function()
{
  var r = DEGREE( (this.value.v*this.value.ratio));   //// DEGREE TO RADIAN
  if ( this.value.curr < this.value.v*this.value.ratio )
  {
    this.value.curr+=this.value.delta[0];
  }
  else
  {
    this.value.curr-=this.value.delta[1];
  }
  if ( this.value.curr <= 0 ) this.value.curr = 0;
  else if ( this.value.curr >= (this.value.max*this.value.ratio) ) this.value.curr = (this.value.max*this.value.ratio);
  r = DEGREE(this.value.curr);

  if ( (this.value.delta[0]==0) || (this.value.delta[1]==0) )
  {
    this.value.curr = this.value.v*this.value.ratio;
  }

  /// inner circle
  this.context.beginPath();
  this.context.arc(this.x(0), this.y(0), this.axis.radial.radius[0]-10, 0, Math.PI*2);
  this.context.strokeStyle = this.axis.color;
  this.context.lineWidth = 1;
  this.context.stroke();


  /// value domain
  this.context.lineCap = 'round';
  this.context.beginPath();
  //this.context.arc(this.x(0), this.y(0), this.axis.radial.radius[0], DEGREE(0), DEGREE(PCoord(90)) );
  //this.Polarcw(this.x(0), this.y(0), this.axis.radial.radius[0], DEGREE(0), DEGREE(270));
  this.Clarck(this.x(0), this.y(0), this.axis.radial.radius[0], r*4);
  //this.Polarcw(this.x(0), this.y(0), this.axis.radial.radius[0], DEGREE(120), DEGREE(200));
  this.context.strokeStyle = '#2355FF'
  this.context.lineWidth = 5;
  this.context.stroke();

  this.SetText( this.x(-15), this.y(-5),80, (this.value.curr/this.value.ratio).toFixed(1) + " %", this.face.font.color, "bold 12px Arial");
  this.SetText( this.x(-40), this.y(-25),80, "Achivement Ratio", this.face.font.color, "bold 10px Arial");
  this.SetText( this.x(-55), this.y(-100),120, "Defected Product", this.face.font.color, "bold 16px Arial");

  //this.SetText( this.x(-25), this.y(-5), this.axis.radial.radius[0], (this.value.curr/this.value.ratio).toFixed(1) + "%", this.face.font.color, "bold 16px Arial");
  //this.SetText( this.x(-20), this.y(-10), this.axis.radial.radius[0], total, '#AAFFAA', "bold 32px Arial");
  //this.SetText( this.x(-35), this.y(-24), this.axis.radial.radius[0], 'NODE ALL', '#AAFFAA', "bold 12px Arial");
}


///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
var C3DPrintProgress0 = new codeXprogress();
function DrawC3DPrintProgress0(id)
{
  C3DPrintProgress0.InitProgress(id);
  C3DPrintProgress0.PeriodicDraw(id,C3DPrintProgress0.attr.tmr.period);
}

C3DPrintProgress0.InitProgress = function(id)
{

  this.attr.position[0] = 10;
  this.attr.position[1] = 0;
  this.attr.width = '80%';
  this.attr.height = '20px';
  this.attr.direction = 1;


  this.attr.title.width = '75%';
  this.attr.title.height = '25%';
  this.attr.title.background.color = 'transparent';

  this.attr.border.thick = 0;
  this.attr.border.type = 'solid'
  this.attr.border.color = '#FFFFFF'
  this.attr.border.radius = 10;
  this.attr.border.opacity = 0.8;
  this.attr.background.color = '#FFFFFF';


  this.value.h='90%';
  this.value.border.thick = 0;
  this.value.border.type = 'solid'
  this.value.border.color = '#FFFFFF'
  this.value.border.radius = this.attr.border.radius;
  this.value.border.opacity = 0.5;
  this.value.color = '#AAAAFF';


  this.value.title.width = '75%';
  this.value.title.height = '25%';
  this.value.title.background.color = 'transparent';


  this.callback = this.Callback;

}

C3DPrintProgress0.Callback = function(ecode)
{
  if ( ecode == 0xE000105B )
  {
    this.SetTitle('Lead Time');
  }
  else
  if ( ecode == 0xE000100B )
  {

  }
  else
  if ( ecode == 0xE000100A )
  {

  }
}


C3DPrintProgress0.DrawValue = function()
{
  this.SetValueText(this.value.realv, 'd');
}

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
var C3DPrintProgress1 = new codeXprogress();
function DrawC3DPrintProgress1(id)
{
  C3DPrintProgress1.InitProgress(id);
  C3DPrintProgress1.PeriodicDraw(id,C3DPrintProgress1.attr.tmr.period);
}

C3DPrintProgress1.InitProgress = function(id)
{
  this.attr.position[0] = 10;
  this.attr.position[1] = 0;
  this.attr.width = '80%';
  this.attr.height = '20px';
  this.attr.direction = 1;


  this.attr.title.width = '75%';
  this.attr.title.height = '25%';
  this.attr.title.background.color = 'transparent';

  this.attr.border.thick = 0;
  this.attr.border.type = 'solid'
  this.attr.border.color = '#FFFFFF'
  this.attr.border.radius = 10;
  this.attr.border.opacity = 0.8;
  this.attr.background.color = '#FFFFFF';


  this.value.h='90%';
  this.value.border.thick = 0;
  this.value.border.type = 'solid'
  this.value.border.color = '#FFFFFF'
  this.value.border.radius = this.attr.border.radius;
  this.value.border.opacity = 0.5;
  this.value.color = '#FFAAAA';

  this.value.title.width = '75%';
  this.value.title.height = '25%';
  this.value.title.background.color = 'transparent';

  this.callback = this.Callback;

}

C3DPrintProgress1.Callback = function(ecode)
{
  if ( ecode == 0xE000105B )
  {
    this.SetTitle('Head Temperature');
  }
  else
  if ( ecode == 0xE000100B )
  {

  }
  else
  if ( ecode == 0xE000100A )
  {

  }
}

C3DPrintProgress1.DrawValue = function()
{
  this.SetValueText(this.value.realv, 'd');

}

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
var C3DPrintProgress2 = new codeXprogress();
function DrawC3DPrintProgress2(id)
{
  C3DPrintProgress2.InitProgress(id);
  C3DPrintProgress2.PeriodicDraw(id,C3DPrintProgress2.attr.tmr.period);
}

C3DPrintProgress2.InitProgress = function(id)
{
  this.attr.position[0] = 10;
  this.attr.position[1] = 0;
  this.attr.width = '80%';
  this.attr.height = '20px';
  this.attr.direction = 1;


  this.attr.title.width = '75%';
  this.attr.title.height = '25%';
  this.attr.title.background.color = 'transparent';

  this.attr.border.thick = 0;
  this.attr.border.type = 'solid'
  this.attr.border.color = '#FFFFFF'
  this.attr.border.radius = 10;
  this.attr.border.opacity = 0.8;
  this.attr.background.color = '#FFFFFF';


  this.value.h='90%';
  this.value.border.thick = 0;
  this.value.border.type = 'solid'
  this.value.border.color = '#FFFFFF'
  this.value.border.radius = this.attr.border.radius;
  this.value.border.opacity = 0.5;
  this.value.color = '#FFA93F';

  this.value.title.width = '75%';
  this.value.title.height = '25%';
  this.value.title.background.color = 'transparent';


  this.callback = this.Callback;

}

C3DPrintProgress2.Callback = function(ecode)
{
  if ( ecode == 0xE000105B )
  {
    this.SetTitle('Bed Temperature');
  }
  else
  if ( ecode == 0xE000100B )
  {

  }
  else
  if ( ecode == 0xE000100A )
  {

  }
}

C3DPrintProgress2.DrawValue = function()
{
  this.SetValueText(this.value.realv, 'd');

}
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
var C3DPrintProgress3 = new codeXprogress();
function DrawC3DPrintProgress3(id)
{
  C3DPrintProgress3.InitProgress(id);
  C3DPrintProgress3.PeriodicDraw(id,C3DPrintProgress3.attr.tmr.period);
}

C3DPrintProgress3.InitProgress = function(id)
{
  this.attr.position[0] = 10;
  this.attr.position[1] = 0;
  this.attr.width = '80%';
  this.attr.height = '20px';
  this.attr.direction = 1;


  this.attr.title.width = '75%';
  this.attr.title.height = '25%';
  this.attr.title.background.color = 'transparent';

  this.attr.border.thick = 0;
  this.attr.border.type = 'solid'
  this.attr.border.color = '#FFFFFF'
  this.attr.border.radius = 10;
  this.attr.border.opacity = 0.8;
  this.attr.background.color = '#FFFFFF';


  this.value.h='90%';
  this.value.border.thick = 0;
  this.value.border.type = 'solid'
  this.value.border.color = '#FFFFFF'
  this.value.border.radius = this.attr.border.radius;
  this.value.border.opacity = 0.5;
  this.value.color = '#A7FF39';

  this.value.title.width = '75%';
  this.value.title.height = '25%';
  this.value.title.background.color = 'transparent';


  this.callback = this.Callback;

}

C3DPrintProgress3.Callback = function(ecode)
{
  if ( ecode == 0xE000105B )
  {
    this.SetTitle('Print Speed');
  }
  else
  if ( ecode == 0xE000100B )
  {

  }
  else
  if ( ecode == 0xE000100A )
  {

  }
}

C3DPrintProgress3.DrawValue = function()
{
  this.SetValueText(this.value.realv, 'd');

}



///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
//////////Key=15, 펀칭기
var GraphPunchingStatus = new codeXchart();
function DrawPunchingStatusGraph(id)
{
  GraphPunchingStatus.InitChart(id, 'RADIAL');
  GraphPunchingStatus.PeriodicDrawChart(id,GraphPunchingStatus.attr.tmr.period);
}
GraphPunchingStatus.InitChart = function(id, type)
{
  var _v;
  this.attr.scale = 1;
  this.attr.type = type;
  this.attr.id = id + "Canvas";  /// do not modify
  this.attr.position[0] = 0;  /// do not modify
  this.attr.position[1] = 0;  /// do not modify

  //// calculate the size of div
  _v = $('#'+id).css('width').split('px');
  this.attr.width = _v[0];
  _v = $('#'+id).css('height').split('px');
  this.attr.height = _v[0];
  this.attr.dim = '2d';

  this.attr.border.color = 'transparent';
  this.attr.border.type = 'dotted';
  this.attr.border.thick=0;
  this.attr.background.color = 'transparent';

  this.attr.tmr.period = 1;

  this.axis.thick =15;
  this.axis.color = '#FF5533';

  //// Coordination of Origin the graph
  this.axis.radial.center[0] = this.attr.width/2;
  this.axis.radial.center[1] = this.attr.height/2-20;
  this.axis.radial.radius[0] = this.axis.radial.radius[1] = this.attr.height/2.1
  this.axis.radial.ccw[0] = DEGREE(135);
  this.axis.radial.ccw[1] = DEGREE(45);
  this.axis.radial.gradient.callback = this.DrawGradient;


  this.axis.radial.mradius[0] = ((this.axis.radial.radius[0]<=this.axis.radial.radius[1])?this.axis.radial.radius[0]:this.axis.radial.radius[1]);
  this.axis.radial.mradius[1] = ((this.axis.radial.radius[0]>this.axis.radial.radius[1])?this.axis.radial.radius[0]:this.axis.radial.radius[1]);



  this.face.thick = 1;
  this.face.color = '#FFFFFF';
  this.face.background.color = '#FFFFFF';
  this.face.font.family = 'Courier New';
  this.face.font.size  = 18;
  this.face.font.color = '#FFFFFF';


  this.value.ratio = 2.7;
  this.value.max = 100;
  this.value.delta[0] = this.value.delta[1] = 0;
}
GraphPunchingStatus.DrawGradient = function(obj)
{
  var spectrum_offset = 20;
  var grd = obj.context.createLinearGradient(obj.X(obj.axis.radial.center[0])-obj.axis.radial.radius[0]-spectrum_offset, 0, obj.X(obj.axis.radial.center[0])+obj.axis.radial.radius[0]+spectrum_offset, 0);
  grd.addColorStop(0, "#70FF00");
  grd.addColorStop(0.5, "#FFFF00");
  grd.addColorStop(1, "#FF0000");
  obj.context.strokeStyle = grd;

  obj.SetText( obj.x( (obj.axis.radial.radius[0]-5)*Math.cos(DEGREE(225))), obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(225))), 20, 0,   '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-5)*Math.cos(DEGREE(198))), obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(198))), 20, 10,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-7)*Math.cos(DEGREE(171))), obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(171))), 20, 20,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-5)*Math.cos(DEGREE(144))), obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(144))), 20, 30,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-5)*Math.cos(DEGREE(117))), obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(117))), 20, 40,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-5)*Math.cos(DEGREE(90))),  obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(90))),  20, 50,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-20)*Math.cos(DEGREE(63))),  obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(63))),  20, 60,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-20)*Math.cos(DEGREE(36))),  obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(36))),  20, 70,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-18)*Math.cos(DEGREE(9))),   obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(9))),   20, 80,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-20)*Math.cos(DEGREE(342))), obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(342))), 20, 90,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-30)*Math.cos(DEGREE(315))), obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(315))), 20, 100, '#FFFFFF', "bold 12px Arial");
}

GraphPunchingStatus.DrawText = function(obj)
{
  //obj.SetText(obj.x(-25), obj.y(-50), 80, "Input", '#FFFFFF', "bold 16px Arial");


  /****
  obj.SetText(obj.x(left), obj.y(50),  80, "ALL", '#AAFFAA', "bold 16px Arial");
  obj.SetText(obj.x(left+120), obj.y(50),  80, "45", '#AAFFAA', "bold 24px Arial");

  obj.SetText(obj.x(left), obj.y(00),  80, "STOP", '#FF5523', "bold 16px Arial");
  obj.SetText(obj.x(left+120), obj.y(00),  80, "45", '#FF5523', "bold 24px Arial");

  obj.SetText(obj.x(left), obj.y(-50), 80, "RUNNING", '#2355FF', "bold 16px Arial");
  obj.SetText(obj.x(left+120), obj.y(-50),  80, "45", '#2355FF', "bold 24px Arial");
  ****/

  //obj.SetText(obj.x(-95), obj.y(51), 20, "45", '#AAFFAA', "bold 12px Arial");
  /***

  obj.SetText(obj.x(-130), obj.y(-80), 50, "지시량:", '#999999', "bold 12px Arial");
  obj.SetText(obj.x(-80), obj.y(-80), 50, COMMA(TOTAL), '#FFFFFF', "bold 24px Arial");

  obj.SetText(obj.x(30), obj.y(-80), 50, "불량:", '#999999', "bold 12px Arial");
  obj.SetText(obj.x(70), obj.y(-80), 200, COMMA(dp.bad), '#AA1233', "bold 24px Arial");
  ****/
}


GraphPunchingStatus.DrawValue = function()
{
  var r = DEGREE( (this.value.v*this.value.ratio));   //// DEGREE TO RADIAN
  try
  {
    if ( this.value.curr < this.value.v*this.value.ratio )
    {
      this.value.curr+=this.value.delta[0];
    }
    else
    {
      this.value.curr-=this.value.delta[1];
    }
    if ( this.value.curr <= 0 ) this.value.curr = 0;
    else if ( this.value.curr >= (this.value.max*this.value.ratio) ) this.value.curr = (this.value.max*this.value.ratio);
    r = DEGREE(this.value.curr);

    if ( (this.value.delta[0]==0) || (this.value.delta[1]==0) )
    {
      this.value.curr = this.value.v*this.value.ratio;
    }



    //$('#GraphCCWTitle').text( ((this.value.curr*this.value.max)/RAD(Math.PI*(3/2))).toFixed(0) + ' RPM' );
    //$('#GraphCCWTitle').text( ((this.value.curr*60)/RAD(Math.PI)).toFixed(0) + ' RPM' );
    //$('#GraphCCWTitle').text( (this.value.curr/this.value.ratio).toFixed(0) + ' EA' );

    this.context.beginPath();
    this.context.arc(this.x(0), this.y(0), 2, 0, Math.PI*2);
    this.context.strokeStyle = this.face.color;
    this.context.fillStyle = this.face.background.color;
    this.context.lineWidth = this.face.thick;
    this.context.fill();
    this.context.stroke();

    this.context.beginPath();
    this.context.moveTo(this.x( 1*Math.cos(r+DEGREE(90))), this.y( 1*Math.sin(r-DEGREE(90))));
    this.context.lineTo(this.x( 1*Math.cos(r-DEGREE(90))), this.y( 1*Math.sin(r+DEGREE(90))));
    this.context.lineTo(this.x((this.axis.radial.mradius[0]) * Math.cos( DEGREE(225)-r ) ), this.y((this.axis.radial.mradius[0]) * Math.sin(DEGREE(225)-r)));
    this.context.lineWidth = this.face.thick;
    this.context.strokeStyle = this.face.color;
    this.context.fillStyle = this.face.background.color;
    this.context.fill();
    this.context.stroke();

    var color = pickColor(this.context, this.x(this.axis.radial.radius[0] * Math.cos( DEGREE(225)-r ) ), this.y(this.axis.radial.radius[0] * Math.sin(DEGREE(225)-r)));
    this.SetText( this.x(-15), this.y(-25), this.axis.radial.radius[0], (this.value.curr/this.value.ratio).toFixed(1), this.face.font.color, "bold 16px Arial");
  }
  catch(exp)
  {

  }
}

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
var GraphPunchingStatusQuard = new codeXchart();
function DrawPunchingStatusGraphQuard(id)
{
  GraphPunchingStatusQuard.InitChart(id, 'QUADRANT');
  GraphPunchingStatusQuard.PeriodicDrawChart(id,GraphPunchingStatusQuard.attr.tmr.period);
}
GraphPunchingStatusQuard.InitChart = function(id, type)
{
  var _v;
  this.attr.scale = 1;
  this.attr.type = type;
  this.attr.id = id + "Canvas";  /// do not modify
  this.attr.position[0] = 0;  /// do not modify
  this.attr.position[1] = 0;  /// do not modify

  //// calculate the size of div
  _v = $('#'+id).css('width').split('px');
  this.attr.width = _v[0];
  _v = $('#'+id).css('height').split('px');
  this.attr.height = _v[0];
  this.attr.dim = '2d';

  this.attr.border.color = 'transparent';
  this.attr.border.type = 'dotted';
  this.attr.border.thick=0;
  this.attr.background.color = 'transparent';

  this.attr.update.period = 10;
  this.attr.tmr.period = 1;
  this.attr.drawing.continuous = true;

  this.axis.thick =1;
  this.axis.color = '#FFFFFF';

  
  this.axis.quadrant.bgn[0] = 20;
  this.axis.quadrant.bgn[1] = 20;
  this.axis.quadrant.end[0] = 290;
  this.axis.quadrant.end[1] = 320;

  this.axis.quadrant.x.color = '#FFFF00';
  this.axis.quadrant.x.bounds = 100;
  this.axis.quadrant.x.bias.use = 1;
  this.axis.quadrant.y.color = '#FFFF00';
  this.axis.quadrant.y.bias.use = 1;

  this.axis.quadrant.x.unit.ratio = 10;
  this.axis.quadrant.y.unit.ratio = 10;
  this.axis.quadrant.x.unit.marking_offset = 10;
  this.axis.quadrant.y.unit.marking_offset = 1;

  this.axis.quadrant.x.strong.bounds = (this.axis.quadrant.x.unit.marking_offset);

  this.axis.quadrant.x.elapsed = 10;

  this.face.thick = 1;
  this.face.color = '#FFFFFF';
  this.face.background.color = 'transparent';
  this.face.font.family = 'Courier New';
  this.face.font.size  = 18;
  this.face.font.color = '#FFFFFF';


  this.value.v = new Array();
  this.value.ratio = 1.0;
  this.value.max = 100;
  this.value.delta[0] = this.value.delta[1] = 0;


  this.value.coord.xy = new Array();
  this.value.coord.index = null;

  this.callback = this.Callback;
}

GraphPunchingStatusQuard.Callback = function(obj, ecode)
{
  if ( ecode == 0xE000105B )
  {
  }

  if ( ecode == 0xE000101A )
  {
    this.UpdateXYBias('T',this.attr.update.period);
  }

  if ( ecode == 0xE00010DB )
  {

  }

}

GraphPunchingStatusQuard.DrawValue = function(obj)
{
  //this.DrawLine([0,0], [1,1], 2);
  //this.DrawRectLine([0,0],[1,1],true);
  //this.DrawRectLine([1,1],[3,5],true);
  //this.DrawRectLine([2,1],[4,3],true);

  //this.DrawDPulse([0,20], 2);
  //this.DrawDPulse([4,20], 2);

  if ( this.UpdatePeriodicValue(this.attr.update.period) == true )
  {
    var inc_dec = 0;
    if ( this.value.coord.index == null )
    {
      this.value.coord.index = this.axis.quadrant.x.max;
      for ( i=this.axis.quadrant.x.max; i>=0 ; i-- )
      {
        this.value.coord.xy[i] = new Array();
        this.value.coord.xy[i][0] = null;
        this.value.coord.xy[i][1] = null;
      }
    }
    else
    {
      inc_dec = -1;
    }

    for ( i=0; i<this.axis.quadrant.x.max; i++ )
    {
      this.value.coord.xy[i][0] = i;
      this.value.coord.xy[i][1] = this.value.coord.xy[i+1][1];
    }
    this.value.coord.index = valueRotate(this.value.coord.index, this.axis.quadrant.x.max, inc_dec);

    this.value.coord.xy[this.axis.quadrant.x.max][0] = this.axis.quadrant.x.max;
    this.value.coord.xy[this.axis.quadrant.x.max][1] = this.value.v;

    /****
    var str = '';
    for ( i=0; i<=this.axis.quadrant.x.max ; i++ )
    {
      str += '(' + this.value.coord.xy[i][0] + ', ' + this.value.coord.xy[i][1] + ')  |  ';
    }
    console.log(str);
    ****/

    /****
    this.value.coord.xy[0] -= this.axis.quadrant.x.unit.ratio;
    if ( this.value.coord.xy[0] < 0 )
    {
      if ( this.attr.drawing.continuous == true )
      {
        this.value.coord.xy[0] = 0;
      }
      else
      {
        this.value.coord.xy[0] = this.axis.quadrant.x.max*this.axis.quadrant.x.unit.ratio;
      }
    }
    this.axis.quadrant.x.elapsed += this.axis.quadrant.x.unit.ratio;
    ***/


  }
  if ( this.value.coord.index != null )
  {
    for ( i=0 ; i< this.axis.quadrant.x.max  ; i++ )
    {
      if ( this.value.coord.xy[i][0]!=null )
      {
        //console.log(this.value.coord.xy[i  ][0]*this.axis.quadrant.x.unit.ratio + ', ' + this.value.coord.xy[i  ][1] );
        //console.log(this.value.coord.xy[i+1][0]*this.axis.quadrant.x.unit.ratio + ', ' + this.value.coord.xy[i+1][1] );
          if ( i+1 <= this.axis.quadrant.x.max )
          {
            this.DrawVLine(
              [this.value.coord.xy[i  ][0]*this.axis.quadrant.x.unit.ratio,this.value.coord.xy[i  ][1]],
              [this.value.coord.xy[i+1][0]*this.axis.quadrant.x.unit.ratio,this.value.coord.xy[i+1][1]],
              2,   '#FFFFFF', 'transparent', 1.0,
              0.5, '#FFFFFF', '#FF0000', 0.5 );
          }
      }
    }
  }
  //console.log('--------------->');


  //this.DrawDPulse([this.value.coord.xy[0],this.value.v],this.axis.quadrant.x.elapsed,true);


  //this.DrawPoint([this.value.coord.xy[0],60],1,'#FFFFFF');


  //v -= this.axis.quadrant.x.unit.ratio;
  //this.DrawPoint([20,10],1,'#FFFFFF');
  //this.DrawPoint([50,50],1,'#FFFFFF');

  //this.DrawCircle([30,20],15,'#FFFFFF');

}


///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
//////////////////////////////////                         ////////////////////////////////////
///////////////////////////////////                      //////////////////////////////////////
/////////////////////////////////////                  ////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
/////////////////////////////////////////          ////////////////////////////////////////////
///////////////////////////////////////////     ///////////////////////////////////////////////
///////////////////////////////////////////// /////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
////////// Key=19, 멀티 재봉 현황
var GraphMultiStatus = new codeXchart();
function DrawMultiGraph(id)
{
  GraphMultiStatus.InitChart(id, 'RADIAL');
  GraphMultiStatus.PeriodicDrawChart(id,GraphMultiStatus.attr.tmr.period);
}
GraphMultiStatus.InitChart = function(id, type)
{
  var _v;
  this.attr.scale = 1;
  this.attr.type = type;
  this.attr.id = id + "Canvas";  /// do not modify
  this.attr.position[0] = 0;  /// do not modify
  this.attr.position[1] = 0;  /// do not modify

  _v = $('#'+id).css('width').split('px');
  this.attr.width = _v[0];
  _v = $('#'+id).css('height').split('px');
  this.attr.height = _v[0];
  this.attr.dim = '2d';

  this.attr.border.color = 'transparent';
  this.attr.border.type = 'dotted';
  this.attr.border.thick=1;
  this.attr.background.color = 'transparent';

  this.attr.tmr.period = 1;

  this.axis.thick =10;
  this.axis.color = '#0182FF';
  this.axis.radial.center[0] = this.attr.width/2;
  this.axis.radial.center[1] = this.attr.height/2+20;
  this.axis.radial.radius[0] = this.axis.radial.radius[1] = this.attr.height/(1.4+(1.2*1.32));
  this.axis.radial.mradius[0] = ((this.axis.radial.radius[0]<=this.axis.radial.radius[1])?this.axis.radial.radius[0]:this.axis.radial.radius[1]);
  this.axis.radial.mradius[1] = ((this.axis.radial.radius[0]>this.axis.radial.radius[1])?this.axis.radial.radius[0]:this.axis.radial.radius[1]);

  this.axis.radial.ccw[0] = (3/4)*Math.PI;
  this.axis.radial.ccw[1] = (1/4)*Math.PI;
  this.axis.radial.gradient.callback = this.DrawGradient;

  this.face.thick = 1;
  this.face.color = '#FFFFFF';
  this.face.background.color = '#FFFFFF';

  this.value.ratio = 2.7;
  this.value.max = 3000;

  this.value.delta[0] = this.value.delta[1] = 0;
}
GraphMultiStatus.DrawGradient = function(obj)
{
  var spectrum_offset = 20;
  var grd = obj.context.createLinearGradient(obj.X(obj.axis.radial.center[0])-obj.axis.radial.radius[0]-spectrum_offset, 0, obj.X(obj.axis.radial.center[0])+obj.axis.radial.radius[0]+spectrum_offset, 0);
  grd.addColorStop(0, "#70FF00");
  grd.addColorStop(0.5, "#FFFF00");
  grd.addColorStop(1, "#FF0000");
  obj.context.strokeStyle = grd;

  obj.SetText(obj.x(-30), obj.y(-50), 80, " ×100 RPM", '#FFFFFF', "normal 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-5)*Math.cos(DEGREE(225))), obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(225))), 20, 0,   '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-5)*Math.cos(DEGREE(198))), obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(198))), 20, 3,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-7)*Math.cos(DEGREE(171))), obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(171))), 20, 6,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-5)*Math.cos(DEGREE(144))), obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(144))), 20, 9,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-5)*Math.cos(DEGREE(117))), obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(117))), 20, 12,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-5)*Math.cos(DEGREE(90))),  obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(90))),  20, 15,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-20)*Math.cos(DEGREE(63))),  obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(63))),  20, 18,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-20)*Math.cos(DEGREE(36))),  obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(36))),  20, 21,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-18)*Math.cos(DEGREE(9))),   obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(9))),   20, 24,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-20)*Math.cos(DEGREE(342))), obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(342))), 20, 27,  '#FFFFFF', "bold 12px Arial");
  obj.SetText( obj.x( (obj.axis.radial.radius[0]-30)*Math.cos(DEGREE(315))), obj.y( (obj.axis.radial.radius[0]-20)*Math.sin(DEGREE(315))), 20, 30, '#FFFFFF', "bold 12px Arial");
}

GraphMultiStatus.DrawValue = function()
{
  var r = DEGREE(this.value.v*this.value.ratio);
  if ( this.value.curr <= this.value.v*this.value.ratio )
  {
    this.value.curr+=this.value.delta[0];
  }
  else
  {
    this.value.curr-=this.value.delta[1];
  }
  if ( this.value.curr <= 0 ) this.value.curr = 0;
  r = DEGREE(this.value.curr);

  

  if ( (this.value.delta[0]==0) || (this.value.delta[1]==0) )
  {
    this.value.curr = this.value.v*this.value.ratio;
  }


  this.context.beginPath();
  this.context.arc(this.x(0), this.y(0), 5, 0, Math.PI*2);
  this.context.strokeStyle = this.face.color;
  this.context.fillStyle = this.face.background.color;
  this.context.lineWidth = this.face.thick;
  this.context.fill();
  this.context.stroke();

  this.context.beginPath();
  this.context.moveTo(this.x( 3*Math.cos(r+DEGREE(90))), this.y( 3*Math.sin(r-DEGREE(90))));
  this.context.lineTo(this.x( 3*Math.cos(r-DEGREE(90))), this.y( 3*Math.sin(r+DEGREE(90))));
  this.context.lineTo(this.x((this.axis.radial.mradius[0]) * Math.cos( DEGREE(224)-r ) ), this.y((this.axis.radial.mradius[0]) * Math.sin(DEGREE(224)-r)));
  this.context.closePath();
  this.context.lineWidth = this.face.thick;
  this.context.strokeStyle = this.face.color;
  this.context.fillStyle = this.face.background.color;
  this.context.fill();
  this.context.stroke();
  var color = pickColor(this.context, this.x(this.axis.radial.radius[0] * Math.cos( DEGREE(224)-r ) ), this.y(this.axis.radial.radius[0] * Math.sin( DEGREE(224)-r)));

  this.SetText(this.x(-30), this.y(-120), 80, ((this.value.curr*this.value.max)/RAD(Math.PI*(3/2))).toFixed(0), '#FFFFFF', "bold 16px Arial");
  this.SetText(this.x(20), this.y(-120), 80, "RPM", '#FFFFFF', "bold 16px Arial");

  //$('#GraphCWTitle').text( ((this.value.curr*this.value.max)/RAD(Math.PI*(3/2))).toFixed(0) + ' RPM' );
}
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// /////////////////////////////////////////////////
///////////////////////////////////////////     ///////////////////////////////////////////////
/////////////////////////////////////////          ////////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
/////////////////////////////////////                  ////////////////////////////////////////
///////////////////////////////////                      //////////////////////////////////////
//////////////////////////////////                         ////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
//////////////////////////////////                         ////////////////////////////////////
///////////////////////////////////                      //////////////////////////////////////
/////////////////////////////////////                  ////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
/////////////////////////////////////////          ////////////////////////////////////////////
///////////////////////////////////////////     ///////////////////////////////////////////////
///////////////////////////////////////////// /////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
var GraphMultiQuantityStatus = new codeXchart();
function DrawMultiQuantityGraph(id)
{
  GraphMultiQuantityStatus.InitChart(id, 'RADIAL');
  GraphMultiQuantityStatus.PeriodicDrawChart(id,GraphMultiQuantityStatus.attr.tmr.period);
}

GraphMultiQuantityStatus.InitChart = function(id, type)
{
  var _v;
  this.attr.scale = 1;
  this.attr.type = type;
  this.attr.id = id + "Canvas";  /// do not modify
  this.attr.position[0] = 0;  /// do not modify
  this.attr.position[1] = 0;  /// do not modify

  _v = $('#'+id).css('width').split('px');
  this.attr.width = _v[0];
  _v = $('#'+id).css('height').split('px');
  this.attr.height = _v[0];
  this.attr.dim = '2d';

  this.attr.border.color = 'transparent';
  this.attr.border.type = 'dotted';
  this.attr.border.thick=0;
  this.attr.background.color = 'transparent';

  this.attr.tmr.period = 1;

  this.axis.thick =7;
  this.axis.color = '#303030';
  this.axis.radial.center[0] = this.attr.width/2;
  this.axis.radial.center[1] = this.attr.height/2+20;
  this.axis.radial.radius[0] = this.axis.radial.radius[1] = this.attr.height/(1.4+(1.2*1.32));
  this.axis.radial.ccw[0] = 0*Math.PI;
  this.axis.radial.ccw[1] = 2*Math.PI;
  this.axis.radial.gradient.callback = this.DrawText;

  this.face.thick = this.axis.thick - 1;
  this.face.color = '#1234FF';
  this.face.background.color = '#FFFFFF';
  this.face.font.family = 'Courier New';
  this.face.font.size  = 18;
  this.face.font.color = '#FFFFFF';


  this.value.ratio = 3.6;
  this.value.max = 100;
  this.value.delta[0] = this.value.delta[1] = 0;
}
GraphMultiQuantityStatus.DrawText = function(obj)
{

}


GraphMultiQuantityStatus.DrawValue = function()
{
  var r = DEGREE( (this.value.v*this.value.ratio));   //// DEGREE TO RADIAN
  if ( this.value.curr < this.value.v*this.value.ratio )
  {
    this.value.curr+=this.value.delta[0];
  }
  else
  {
    this.value.curr-=this.value.delta[1];
  }
  if ( this.value.curr <= 0 ) this.value.curr = 0;
  else if ( this.value.curr >= (this.value.max*this.value.ratio) ) this.value.curr = (this.value.max*this.value.ratio);
  r = DEGREE(this.value.curr);

  if ( (this.value.delta[0]==0) || (this.value.delta[1]==0) )
  {
    this.value.curr = this.value.v*this.value.ratio;
  }

  /// inner circle
  this.context.beginPath();
  this.context.arc(this.x(0), this.y(0), this.axis.radial.radius[0]-10, 0, Math.PI*2);
  this.context.strokeStyle = this.axis.color;
  this.context.lineWidth = 1;
  this.context.stroke();


  /// value domain
  this.context.lineCap = 'round';
  this.context.beginPath();
  //this.context.arc(this.x(0), this.y(0), this.axis.radial.radius[0], DEGREE(0), DEGREE(PCoord(90)) );
  //this.Polarcw(this.x(0), this.y(0), this.axis.radial.radius[0], DEGREE(0), DEGREE(270));
  this.Clarck(this.x(0), this.y(0), this.axis.radial.radius[0], r);
  //this.Polarcw(this.x(0), this.y(0), this.axis.radial.radius[0], DEGREE(120), DEGREE(200));
  this.context.strokeStyle = '#2355FF'
  this.context.lineWidth = 5;
  this.context.stroke();

  this.SetText( this.x(-15), this.y(-5),80, (this.value.curr/this.value.ratio).toFixed(1) + " %", this.face.font.color, "bold 12px Arial");
  this.SetText( this.x(-40), this.y(-25),80, "Achivement Ratio", this.face.font.color, "bold 10px Arial");
  this.SetText( this.x(-90), this.y(-120),120, "Quantity :", this.face.font.color, "bold 16px Arial");
  this.SetText( this.x(20), this.y(-120),120, GraphMultiQuantityStatus.value.v, this.face.font.color, "bold 16px Arial");
  this.SetText( this.x(50), this.y(-120),120, " EA", this.face.font.color, "bold 16px Arial");
  //this.SetText( this.x(-20), this.y(-10), this.axis.radial.radius[0], total, '#AAFFAA', "bold 32px Arial");
  //this.SetText( this.x(-35), this.y(-24), this.axis.radial.radius[0], 'NODE ALL', '#AAFFAA', "bold 12px Arial");


  DrawMultiColorStatus('RT02');

}
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// /////////////////////////////////////////////////
///////////////////////////////////////////     ///////////////////////////////////////////////
/////////////////////////////////////////          ////////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
/////////////////////////////////////                  ////////////////////////////////////////
///////////////////////////////////                      //////////////////////////////////////
//////////////////////////////////                         ////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
//////////////////////////////////                         ////////////////////////////////////
///////////////////////////////////                      //////////////////////////////////////
/////////////////////////////////////                  ////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
/////////////////////////////////////////          ////////////////////////////////////////////
///////////////////////////////////////////     ///////////////////////////////////////////////
///////////////////////////////////////////// /////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
var GraphMultiColorStatus = new codeXchart();
function DrawMultiColorStatus(id)
{
  var doc = '';

  doc += '<div style="float:left;position:relative;width:100%;height:100%;background-color:transparent;';
  doc += 'display:flex;justify-content:center;align-items:center;';
  doc += '">';

      doc += '<div style="float:left;position:relative;width:150px;height:160px;background-color:transparent;';
      doc += '">';

        if ( GraphMultiColorStatus.value.v == 1 )
          doc += '<div style="float:left;position:relative;width:50px;height:50px;background-color:#FF0000;margin-left:50px;">';
        else
          doc += '<div style="float:left;position:relative;width:50px;height:50px;background-color:#550000;margin-left:50px;">';
            doc += '<div style="float:left;position:relative;width:100%;height:100%;background-color:transparent;color:#FFFF00;';
            doc += 'display:flex;justify-content:center;align-items:center;';
            doc += 'font-size:20px;font-weight:bold;font-family:Arial;">';
            doc += '1';
            doc += '</div>';
          doc += '</div>';
          doc += '<div style="float:left;position:relative;width:100%;height:5px;background-color:transparent;"></div>';

        if ( GraphMultiColorStatus.value.v == 2 )
          doc += '<div style="float:left;position:relative;width:50px;height:50px;background-color:#00FF00;margin-left:50px;">';
        else
          doc += '<div style="float:left;position:relative;width:50px;height:50px;background-color:#005500;margin-left:50px;">';
            doc += '<div style="float:left;position:relative;width:100%;height:100%;background-color:transparent;color:#FFFF00;';
            doc += 'display:flex;justify-content:center;align-items:center;';
            doc += 'font-size:20px;font-weight:bold;font-family:Arial;">';
            doc += '2';
            doc += '</div>';
          doc += '</div>';
          doc += '<div style="float:left;position:relative;width:100%;height:5px;background-color:transparent;"></div>';

        if ( GraphMultiColorStatus.value.v == 3 )
          doc += '<div style="float:left;position:relative;width:50px;height:50px;background-color:#0000FF;margin-left:50px;">';
        else
          doc += '<div style="float:left;position:relative;width:50px;height:50px;background-color:#000055;margin-left:50px;">';
            doc += '<div style="float:left;position:relative;width:100%;height:100%;background-color:transparent;color:#FFFF00;';
            doc += 'display:flex;justify-content:center;align-items:center;';
            doc += 'font-size:20px;font-weight:bold;font-family:Arial;">';
            doc += '3';
            doc += '</div>';
          doc += '</div>';
          doc += '<div style="float:left;position:relative;width:100%;height:5px;background-color:transparent;"></div>';
          doc += '<div style="float:left;position:relative;width:150px;height:30px;background-color:transparent;color:#FFFFFF;';
          doc += 'font-size:16px;font-weight:bold;font-family:Arial;">';
          doc += 'Color Number';
          doc += '</div>';
        doc += '</div>';



  doc += '</div>';
  $('#' + id).html(doc).show();
}



///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////// /////////////////////////////////////////////////
///////////////////////////////////////////     ///////////////////////////////////////////////
/////////////////////////////////////////          ////////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
/////////////////////////////////////                  ////////////////////////////////////////
///////////////////////////////////                      //////////////////////////////////////
//////////////////////////////////                         ////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////              //////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////






////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
