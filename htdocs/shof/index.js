var gidx = codeXContainer_count();
codeXContainer_init[gidx] = index_init;
codeXContainer_callback[gidx] = index_callback;

var timer_proc;
var counter = 0;
var g_idx = 0;
var g_id_nm;
var g_id_power;
var g_id_run;
var g_id_idle;
var g_id_down;
var g_id_rfid;
var g_rfid_chk;
var q = getQuery();

var  mach_proc_XX = new Array(22);
var shof = new cShof();

function set_mach_proc_XX()
{
  var i = 0;
  mach_proc_XX[i][0] = mach_proc_00;
  mach_proc_XX[i][1] = 0;
  mach_proc_XX[i][2] = 0;
  mach_proc_XX[i][3] = setGraphUppderValue;
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
  mach_proc_XX[i][3] = setGraphLowerValue;
  i++;
}

function currTime()
{
  now = new Date();
  year = now.getFullYear();
  month = now.getMonth()+1;
  date = now.getDate();
  hour = now.getHours();
  min = now.getMinutes();
  var set;
  if(hour <= 12)
  {
    set="AM"
  }
  else
  {
    set="PM"
    hour = hour - 12;
  }
  if(hour == 00)
  {
    hour = 12
  }
  document.getElementById("today").innerHTML = "<b>" + year + " - " + month + " - " + date + "</b>";
  document.getElementById("times").innerHTML = "<b>" + set + " " + PAD(hour,2) + ":" + PAD(min, 2) + "</b>";


}



function blinkConveyor(cellid, cnt, flg)
{
  var id;
  var bid = "#bcode_lamp_" + PAD(cellid, 2);

  for ( id = 0 ; id<cnt ; id++ )
  {
    if ( (id%2) == 1 )
    {
      $(bid + id).css('background-color', flg==0?'#BDBDBD':'#8BBDFF');
    }
    else
    {
      $(bid + id).css('background-color', flg==0?'#8BBDFF':'#BDBDBD');
    }
  }
}


function drawConveyor(bid, sz, width, height, horz_or_vert)
{
  var id = 0;
  var key = 0;
  if ( horz_or_vert == 'H' )
  {
    type1 = "bs1";
    type2 = "bs2";
    cname = "backspace";
  }
  else
  {
    type2 = "bss1";
    type1 = "bss2";
    cname = "backspaceside";
  }

  if ( bid==4 ) key = 8;
  else if ( bid==5 ) key = 9;
  else key = -1;

  if ( key > 0 )
    document.write('<div class="'+cname+'" style="left:'+width+'px;top:'+height+'px;" onclick="popup(\'mach.html?key=' + key + '&skey=0&sid=0\', \'_kitdvl\')">');
  else
    document.write('<div class="'+cname+'" style="left:'+width+'px;top:'+height+'px;">');

  for ( id=0 ; id<sz ; id++ )
  {
    if ( (id%2) == 0 )
    {
      document.write('<div id="bcode_lamp_' + PAD(bid, 2) + id + '" class="' + type1 + '"></div>');
    }
    else
    {
      document.write('<div id="bcode_lamp_' + PAD(bid, 2) + id + '" class="' + type2 + '"></div>');
    }
  }
  document.write('</div>');
}

function index_timer_proc(obj)
{
  if ( counter == 0 ) counter = 1;
  else counter = 0;

  //codeXWebSocket.socket.write("Hello");

  blinkConveyor(1, 43, counter);
  blinkConveyor(2, 5 , counter);
  blinkConveyor(3, 29, counter);
  blinkConveyor(4, 11, counter);
  blinkConveyor(5, 13 , counter);
  blinkConveyor(6, 5 , counter);
  blinkConveyor(7, 2, counter);

  blinkConveyor(10, 62, counter);
  blinkConveyor(11, 9, counter);
  blinkConveyor(12, 74, counter);
  blinkConveyor(13, 9, counter);
  blinkConveyor(14, 25, counter);

  currTime();

  clearTimeout(timer_proc)
  timer_proc = setTimeout(index_timer_proc, 1000, obj);
}


///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
function set_status_text(i, ii, aname, sz)
{
  _aname = aname.split(',');
  $('#statebox_t' + PAD(i, 4) + '_' + PAD(ii, 4) + '_00').text(_aname[0]);
  $('#statebox_t' + PAD(i, 4) + '_' + PAD(ii, 4)  + '_01').text(_aname[1]);
  if ( i < 1000 )
  {
    $('#statebox_t' + PAD(i, 4) + '_' + PAD(ii, 4)  + '_02').text(_aname[2]);
    $('#statebox_t' + PAD(i, 4) + '_' + PAD(ii, 4)  + '_03').text(_aname[3]);
  }
}


function onLoadXML(id, code, a)
{
  var xml = a.responseXML;
  var x = new Array();
  var y = new Array();
  var i = 0;
  var ii = 0;
  var limit = 1;
  var did;
  var amount = 0;
	//console.log(xml);


  for ( i=0 ; i<1012 ; i++ )
  {
    if ( i==8 ) i=1000;

    if ( i==6 ) limit = 3;
    else limit = 1;

    for ( ii=0 ; ii<limit ; ii++ )
    {
      try
      {
        did = id + i + '_' + ii;

        name   = xml.getElementsByTagName(did)[0].getElementsByTagName('name')[0].firstChild.data
        amount = xml.getElementsByTagName(did)[0].getElementsByTagName('amount')[0].firstChild.data
        img    = xml.getElementsByTagName(did)[0].getElementsByTagName('image')[0].firstChild.data;
        x[i]   = xml.getElementsByTagName(did)[0].getElementsByTagName('x')[0].firstChild.data;
        y[i]   = xml.getElementsByTagName(did)[0].getElementsByTagName('y')[0].firstChild.data;

        amount = Number(amount);
        $('#'+did).css('left', x[i] + 'px');
        $('#'+did).css('top', y[i] + 'px');
        $('#name_'+id+PAD(i, 4)+'_'+PAD(ii,4)).text(name);
        document.getElementById('img_'+did).src = img;
        $('#img_'+did).css('diaplay', 'block');
        $('#img_'+did).css('height', '100%');
        $('#img_'+did).css('width', '100%');
        if ( amount > 1 )
        {
          aname = xml.getElementsByTagName(did)[0].getElementsByTagName('aname')[0].firstChild.data;
          set_status_text(i, ii, aname, amount);
        }
      }
      catch(exp)
      {

      }
    }
  }
}



function index_init()
{
  self.resizeTo(1920,1080);
  

  for ( i=0; i<mach_proc_XX.length ; i++ )
  {
    mach_proc_XX[i] = new Array(5);
  }
	set_mach_proc_XX();

  DrawUppderGraph('GraphFst');   //// <<<<<<<<<<<<<<
  DrawLowerGraph('GraphSnd');   //// <<<<<<<<<<<<<<


  //loadFile("mach", 0, "mach.xml", onLoadXML);
  loadFile("mach", 0, "mach.xml", onLoadXML);



  timer_proc = setTimeout(index_timer_proc, 1000, 0);


}
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////

function init_status()
{
  var id = 0;
  var i=0;
  var ii=0;
  var limit = 3;

  for ( i = 0 ; i<1012 ; i++ )
  {
    if ( i == 8 ) i=1000;
    if ( i==6 ) limit = 3;
    else limit = 1;

    for ( ii=0 ; ii<limit ; ii++ )
    {
      id = '#statebox' + PAD(i, 4) + "_" + PAD(ii, 4) + '_00';
      $(id).css('background-color', '#BDBDBD');
    }
  }
}

///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
function DebugConsole(b, sz)
{
  var dbg = '';
  var i;
  var v = new Uint8Array(b);

  for ( i=0 ; i<sz ; i++ )
  {
    dbg += PAD(v[i].toString(16), 4) + ',';
  }
  console.log(dbg);
}

function setTagID(v, i, ii)
{
  g_id_nm   = '#name_mach' + PAD(i, 4) + '_' + PAD(ii, 4);
  g_id_power = '#statebox' + PAD(i, 4) + '_' + PAD(ii, 4) + '_00';
  g_id_run   = '#statebox' + PAD(i, 4) + '_' + PAD(ii, 4) + '_01';
  g_id_idle  = '#statebox' + PAD(i, 4) + '_' + PAD(ii, 4) + '_02';
  g_id_down  = '#statebox' + PAD(i, 4) + '_' + PAD(ii, 4) + '_03';
  g_id_rfid  = '#statebox' + PAD(i, 4) + '_' + PAD(ii, 4) + '_04';
}

function set_status_color(v, i, ii)
{
  if ( v[3] == 0x00 ) //off
  {
    $(g_id_nm).css('color', '#FF0000');
    $(g_id_power).css('background-color', '#FF0000');
  }
  else if ( v[3] == 0x01 ) //on
  {
    if ( v[17] == 0x00 ) //run
    {
      $(g_id_nm).css('color', '#00FF00');
      $(g_id_run).css('background-color', '#00FF00');
    }
    else if ( v[17] == 0x01 ) //idle
    {
      $(g_id_nm).css('color', '#FFFF00');
      $(g_id_idle).css('background-color', '#FFFF00');
    }
    else if ( v[17] == 0x02 ) //off
    {
      $(g_id_nm).css('color', '#2478FF');
      $(g_id_power).css('background-color', '#2478FF');
    }
  }
}

function set_rfid_status_color(v, i, ii)
{
  //console.log(v[1].toString(16) + ' ---> ' + g_rfid_chk + ' -> ' + i + ', ' + ii );

  if ( g_rfid_chk == i )
  {
    //console.log( i + ' --------> ' + g_rfid_chk );

    $(g_id_nm).css('color', '#00FF00');
    $(g_id_power).css('background-color', '#BDBDBD');
    //if ( i!=10 && i!=11 && i!=13 && i!=14 && i!=15 )
    {
      $(g_id_run).css('background-color', '#00FF00');
    }
    $(g_id_idle).css('background-color', '#BDBDBD');
    $(g_id_idle).css('background-color', '#BDBDBD');
    $(g_id_rfid).css('background-color', '#00FFFF');
  }
  else
  {
    $(g_id_nm).css('color', '#FFFFFF');
    $(g_id_power).css('background-color', '#BDBDBD');
    $(g_id_run).css('background-color', '#BDBDBD');
    $(g_id_idle).css('background-color', '#FFFF00');
    $(g_id_down).css('background-color', '#BDBDBD');
    $(g_id_rfid).css('background-color', '#BDBDBD');
  }
}


function common_draw(v, i, ii)
{
  if ( i < 10 )
  {
    $(g_id_nm).css('color', '#FFFFFF');
    $(g_id_power).css('background-color', '#BDBDBD');
    $(g_id_run).css('background-color', '#BDBDBD');
    $(g_id_idle).css('background-color', '#BDBDBD');
    $(g_id_down).css('background-color', '#BDBDBD');
    $(g_id_rfid).css('background-color', '#BDBDBD');

    set_status_color(v, i, ii);
  }

  if ( i >= 10 )
  {
    set_rfid_status_color(v, i, ii);
  }

}





function mach_proc_00(v, i, ii)
{
  var _id;
  if ( v[1] == 0x0B )
  {
    _id = g_id_power;
  }
  else if ( v[1] == 0x0C )
  {
    _id = g_id_run;
  }
  else if ( v[1] == 0x0D )
  {
    _id = g_id_idle;
  }
  else if ( v[1] == 0x0E )
  {
    _id = g_id_down;
  }
  else
    return;


  if ( v[3] == 0x00 ) //off
  {
    $(g_id_nm).css('color', '#FF0000');
    $(_id).css('background-color', '#FF0000');
  }
  else if ( v[3] == 0x01 ) //on
  {
    if ( v[17] == 0x00 )
    {
      $(g_id_nm).css('color', '#00FF00');
      $(_id).css('background-color', '#00FF00');
    }
    else if ( v[17] == 0x01 )
    {
      $(g_id_nm).css('color', '#FFFF00');
      $(_id).css('background-color', '#FFFF00');
    }
    else if ( v[17] == 0x02 )
    {
      $(g_id_nm).css('color', '#2478FF');
      $(_id).css('background-color', '#2478FF');
    }
  }
}

function mach_proc_01(v, i, ii)
{
  common_draw(v, i, ii);
}

function mach_proc_02(v, i, ii)
{
  common_draw(v, i, ii);
}

function mach_proc_03(v, i, ii)
{
  common_draw(v, i, ii);
}

function mach_proc_04(v, i, ii)
{
  common_draw(v, i, ii);
}

function mach_proc_05(v, i, ii)
{
  var _id;
  if ( v[1] == 0x51 )
  {
    _id = g_id_power;
  }
  else if ( v[1] == 0x52 )
  {
    _id = g_id_run;
  }
  else if ( v[1] == 0x53 )
  {
    _id = g_id_idle;
  }
  else if ( v[1] == 0x54 )
  {
    _id = g_id_down;
  }

  if ( v[3] == 0x00 ) //off
  {
    $(g_id_nm).css('color', '#FF0000');
    $(_id).css('background-color', '#FF0000');
  }
  else if ( v[3] == 0x01 ) //on
  {
    if ( v[17] == 0x00 )
    {
      $(g_id_nm).css('color', '#00FF00');
      $(_id).css('background-color', '#00FF00');
    }
    else if ( v[17] == 0x01 )
    {
      $(g_id_nm).css('color', '#FFFF00');
      $(_id).css('background-color', '#FFFF00');
    }
    else if ( v[17] == 0x02 )
    {
      $(g_id_nm).css('color', '#2478FF');
      $(_id).css('background-color', '#2478FF');
    }
  }
}

function mach_proc_06(v, i, ii)
{
  common_draw(v, i, ii);
}

function mach_proc_07(v, i, ii)
{
  common_draw(v, i, ii);
}

function mach_proc_08(v, i, ii)
{
  common_draw(v, i, ii);
}

function mach_proc_09(v, i, ii)
{
  common_draw(v, i, ii);
}

function mach_proc_10(v, i, ii)
{
  common_draw(v, i, ii);

  if ( (g_rfid_chk==i) ) $(g_id_power).css('background-color', '#00FF00');
  else $(g_id_power).css('background-color', '#FFFF00');

  if ( (g_rfid_chk==i) ) $(g_id_run).css('background-color', '#00FF00');
  else $(g_id_run).css('background-color', '#FFFF00');
}

function mach_proc_11(v, i, ii)
{
  common_draw(v, i, ii);

  if ( (g_rfid_chk==i) ) $(g_id_power).css('background-color', '#00FF00');
  else $(g_id_power).css('background-color', '#FFFF00');

  if ( (g_rfid_chk==i) ) $(g_id_run).css('background-color', '#00FF00');
  else $(g_id_run).css('background-color', '#FFFF00');
}

function mach_proc_12(v, i, ii)
{
  common_draw(v, i, ii);
}

function mach_proc_13(v, i, ii)
{
  common_draw(v, i, ii);

  if ( (g_rfid_chk==i) ) $(g_id_power).css('background-color', '#00FF00');
  else $(g_id_power).css('background-color', '#FFFF00');

  if ( (g_rfid_chk==i) ) $(g_id_run).css('background-color', '#00FF00');
  else $(g_id_run).css('background-color', '#FFFF00');
}

function mach_proc_14(v, i, ii)
{
  common_draw(v, i, ii);
  if ( (g_rfid_chk==i) ) $(g_id_power).css('background-color', '#00FF00');
  else $(g_id_power).css('background-color', '#FFFF00');

  if ( (g_rfid_chk==i) ) $(g_id_run).css('background-color', '#00FF00');
  else $(g_id_run).css('background-color', '#FFFF00');
}

function mach_proc_15(v, i, ii)
{
  common_draw(v, i, ii);
  if ( (g_rfid_chk==i) ) $(g_id_power).css('background-color', '#00FF00');
  else $(g_id_power).css('background-color', '#FFFF00');

  if ( (g_rfid_chk==i) ) $(g_id_run).css('background-color', '#00FF00');
  else $(g_id_run).css('background-color', '#FFFF00');
}

function mach_proc_16(v, i, ii)
{
  common_draw(v, i, ii);
}

function mach_proc_17(v, i, ii)
{
  common_draw(v, i, ii);
}

function mach_proc_18(v, i, ii)
{
  common_draw(v, i, ii);
}

function mach_proc_19(v, i, ii)
{
  common_draw(v, i, ii);
}

function mach_proc_20(v, i, ii)
{
  common_draw(v, i, ii);
}

function mach_proc_21(v, i, ii)
{
  common_draw(v, i, ii);
  g_rfid_chk = v[12] + 10;
}



function index_proc_value(v, i, ii)
{
  var idx = i;
  if ( i >=10 ) idx = i+990;
  setTagID(v, idx, ii);

  mach_proc_XX[i][ii](v, i, ii);
  if ( (i==0) || (i==21) ) mach_proc_XX[i][3](v, i, ii);

  //console.log(i + ' ---> ' + g_rfid_chk);

  //console.log(v[1].toString(16) + ', ' + v[12] + ' -> ' + i + ', ' + ii + ' ---> ' + g_rfid_chk);
}


///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
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

function index_callback(dat, sz)
{
  // 02 01 01 02 03 02 01 01 02 03 02 01 01 02 03
  var v = new Uint8Array(dat);
  var i = 0;
  var ii = 0;


  debug_log(dat,sz);


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
    index_proc_value(v, i, ii);
    i = 6;
    ii = 1;
    index_proc_value(v, i, ii);
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

  index_proc_value(v, i, ii);
  return;

}


/////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////onclick//////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////
function setGraphIndex(i, ii, sid)
{
  shof.setParam(i, ii, sid);
}

function setGraphUppderValue(v, i, ii)
{
  if ( i==0 )
  {
    if ( shof._sid==0 ) if ( v[1] == 0x0B ) GraphUpper.value.v = v[12];
    else if ( shof._sid==1 ) if ( v[1] == 0x0C ) GraphUpper.value.v = v[12];
    else if ( shof._sid==2 ) if ( v[1] == 0x0D ) GraphUpper.value.v = v[12];
    else if ( shof._sid==3 ) if ( v[1] == 0x0E ) GraphUpper.value.v = v[12];
  }

  //console.log(q.key + ', ' + q.skey + ', ' + q.sid + ', ' + v[1]);

  /***
  if ( (q.key==0) && (q.skey==0) && (q.sid==0) )
  {
    if ( v[1] == 0x0B ) 	GraphUpper.value.v = v[12];

  }
  ***/


}

function setGraphLowerValue(v, i, ii)
{
  GraphLower.value.v = ((v[4]*256 + v[5])/10).toFixed(1);
  
  var processing = v[4]*256 + v[5];
  $('#Result').text(processing + " EA" ); //진행중인 생산량
  
  var fail = ((v[15]*256 + v[16])/1000)*100;
  $('#DRate').text(fail.toFixed(1) + " %" );   /// 불량률

  $('#Target').text('1000 EA');

}



function common_GraphFstvalue(v, idx)
{
  GraphUpper.value.v = v[12];


  //console.log(idx);
}

function common_GraphSndvalue(v, i, ii)
{
  GraphLower.value.v = ((v[4]*256 + v[5])/10).toFixed(1);
  
  var processing = v[4]*256 + v[5];
  $('#Result').text(processing + " EA" ); //진행중인 생산량
  
  var fail = ((v[15]*256 + v[16])/1000)*100;
  $('#DRate').text(fail.toFixed(1) + " %" );   /// 불량률

  $('#Target').text('1000 EA');


  //console.log(idx);
}

function GraphFstvalue(v, i, ii)
{
  if ( k0 == 0 )
  {
    if ( v[1] == 0x0B )
    {
      common_GraphFstvalue(v, i, ii);
    }
  }

  else
  {
    if ( key0 == 0 )
    {
      if ( v[1] == 0x0B )
      {
        common_GraphFstvalue(v, i, ii);
      }
    }
    else if ( key0 == 1 )
    {
      if ( v[1]==0x15 )
      {
        common_GraphFstvalue(v, i, ii);
      }
    }
    else if ( key0 == 3 )
    {
      if ( v[1]==0x1F )
      {
        common_GraphFstvalue(v, i, ii);
      }
    }
    else if ( key0 == 2 )
    {
      if ( v[1]==0x29 )
      {
        common_GraphFstvalue(v, i, ii);
      }
    }
    else if ( key0 == 4 )
    {
      if ( v[1]==0x3D )
      {
        common_GraphFstvalue(v, i, ii);
      }
    }
    else if ( key0 == 6 )
    {
      if ( v[1]==0x47 )
      {
        common_GraphFstvalue(v, i, ii);
      }
    }
    else if ( key0 == 5 )
    {
      if ( v[1]==0x51 )
      {
        common_GraphFstvalue(v, i, ii);
      }
    }
    else if ( key0 == 7 )
    {
      if ( v[1]==0x65 )
      {
        common_GraphFstvalue(v, i, ii);
      }
    }
    else if ( key0 == 8 )
    {
      if ( v[1]==0x5B )
      {
        common_GraphFstvalue(v, i, ii);
      }
    }
    else if ( key0 == 9 )
    {
      if ( v[1]==0x33 )
      {
        common_GraphFstvalue(v, i, ii);
      }
    }
  }
}


function GraphSndvalue(v, i, ii)
{
  if ( k1 == 0 )
  {
    if ( v[1]==0xDD )
    {
      common_GraphSndvalue(v, i, ii)
    }
  }
  else
  {
    if ( key1 == 1000 )
    {
      if ( v[1]==0x6F )
      {
        common_GraphSndvalue(v, i, ii)
      }
    }
    else if ( key1 == 1001 )
    {
      if ( v[1]==0x79 )
      {
        common_GraphSndvalue(v, i, ii)
      }
    }
    else if ( key1 == 1002 )
    {
      if ( v[1]==0x83 )
      {
        common_GraphSndvalue(v, i, ii)
      }
    }
    else if ( key1 == 1003 )
    {
      if ( v[1]==0x8D )
      {
        common_GraphSndvalue(v, i, ii)
      }
    }
    else if ( key1 == 1004 )
    {
      if ( v[1]==0x97 )
      {
        common_GraphSndvalue(v, i, ii)
      }
    }
    else if ( key1 == 1005 )
    {
      if ( v[1]==0xA1 )
      {
        common_GraphSndvalue(v, i, ii)
      }
    }
    else if ( key1 == 1006 )
    {
      if ( v[1]==0xAB )
      {
        common_GraphSndvalue(v, i, ii)
      }
    }
    else if ( key1 == 1007 )
    {
      if ( v[1]==0xB5 )
      {
        common_GraphSndvalue(v, i, ii)
      }
    }
    else if ( key1 == 1008 )
    {
      if ( v[1]==0xBF )
      {
        common_GraphSndvalue(v, i, ii)
      }
    }
    else if ( key1 == 1009 )
    {
      if ( v[1]==0xC9 )
      {
        common_GraphSndvalue(v, i, ii)
      }
    }
    else if ( key1 == 1010 )
    {
      if ( v[1]==0xD3 )
      {
        common_GraphSndvalue(v, i, ii)
      }
    }
    else if ( key1 == 1011 )
    {
      if ( v[1]==0xDD )
      {
        common_GraphSndvalue(v, i, ii)
      }
    }
  }


}


///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////Graph/////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
var GraphUpper = new codeXchart();
var GraphLower = new codeXchart();

function DrawUppderGraph(id, i)
{
  GraphUpper.InitChart(id, 'RADIAL');
  GraphUpper.PeriodicDrawChart(id,GraphUpper.attr.tmr.period);
}

function DrawLowerGraph(id)
{
  GraphLower.InitChart(id, 'RADIAL');
  GraphLower.PeriodicDrawChart(id,GraphLower.attr.tmr.period);
}
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////
GraphUpper.InitChart = function(id, type)
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

  this.attr.border.color = 'transparent'
  this.attr.border.type = 'dolid';
  this.attr.border.thick=0;
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
  this.face.color = '#ffffff';
  this.face.background.color = '#FFFFFF';

  this.value.ratio = 2.7;
  this.value.max = 100;

  this.value.delta[0] = this.value.delta[1] = 0;
}




GraphLower.InitChart = function(id, type)
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

  this.axis.thick =15;
  this.axis.color = '#303030';
  this.axis.radial.center[0] = this.attr.width/2;
  this.axis.radial.center[1] = this.attr.height/2;
  this.axis.radial.radius[0] = this.axis.radial.radius[1] = this.attr.height/2.5;
  this.axis.radial.mradius[0] = ((this.axis.radial.radius[0]<=this.axis.radial.radius[1])?this.axis.radial.radius[0]:this.axis.radial.radius[1]);
  this.axis.radial.mradius[1] = ((this.axis.radial.radius[0]>this.axis.radial.radius[1])?this.axis.radial.radius[0]:this.axis.radial.radius[1]);

  this.axis.radial.ccw[0] = 0*Math.PI;
  this.axis.radial.ccw[1] = 2*Math.PI;
  //this.axis.radial.gradient.callback = this.DrawText;

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
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
GraphUpper.DrawGradient = function(obj)
{
  var spectrum_offset = 50;
  var grd = obj.context.createLinearGradient(obj.X(obj.axis.radial.center[0])-obj.axis.radial.radius[0]-spectrum_offset, 0, obj.X(obj.axis.radial.center[0])+obj.axis.radial.radius[0]+spectrum_offset, 0);
  grd.addColorStop(1, "#FF0000");
  grd.addColorStop(0.5, "#FFFF00");
  grd.addColorStop(0, "#70FF00");
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

GraphUpper.DrawValue = function()
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
  else if ( this.value.curr >= 180 ) this.value.curr = 180;
  r = DEGREE(this.value.curr);

  if ( (this.value.delta[0]==0) || (this.value.delta[1]==0) )
  {
    this.value.curr = this.value.v*this.value.ratio;
  }

  $("#G1_cell_01").text( ((this.value.curr*this.value.max)/RAD(Math.PI*(3/2))).toFixed(0) + ' RPM' );
  $("#RSpeed").text( ((this.value.curr*this.value.max)/RAD(Math.PI*(3/2))).toFixed(0) + ' RPM' );

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
}


GraphLower.DrawGradient = function(obj)
{
  var spectrum_offset = 50;
  var grd = obj.context.createLinearGradient(obj.X(obj.axis.radial.center[0])-obj.axis.radial.radius[0]-spectrum_offset, 0, obj.X(obj.axis.radial.center[0])+obj.axis.radial.radius[0]+spectrum_offset, 0);
  grd.addColorStop(0, "#FF0000");
  grd.addColorStop(0.5, "#FFFF00");
  grd.addColorStop(1, "#70FF00");
  obj.context.strokeStyle = grd; 
}


GraphLower.DrawValue = function()
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
  this.context.arc(this.x(0), this.y(0), this.axis.radial.radius[0]-22, 0, Math.PI*2);
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
  //this.Polarcw(this.x(0), this.y(0), this.axis.radial.radius[0], DEGREE(120), DEGREE(200));
  //this.context.strokeStyle = this.face.color;
  this.context.lineWidth = this.face.thick;
  this.context.stroke();

  this.SetText( this.x(-25), this.y(-5), this.axis.radial.radius[0], (this.value.curr/this.value.ratio).toFixed(1) + "%", this.face.font.color, "bold 16px Arial");
  this.SetText( this.x(-60), this.y(-25), this.axis.radial.radius[0]*2, "Achivement Ratio", this.face.font.color, "bold 14px Arial");
}




///////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////



/*
function popup(url,w,h)
{
  window.open(url,'','directoryies=yes,left=0px,top=0px,width='+w+'px,height='+h+'px,resizable=yes');
}

function move(url,w,h)
{
  window.open(url,'_self','directoryies=yes,left=0px,top=0px,width='+w+'px,height='+h+'px,resizable=yes');  
}
*/