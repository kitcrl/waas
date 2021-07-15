function setStyle(bcolor)
{
  var style = "";

  style += "float:left;";
  style += "position:relative;";
  style += "width:100%;";
  style += "height:20px;";
  style += "background-color:" + bcolor + ";";

  return style;
}

function drawText(style, txt)
{
  document.write("<div style='" + style + "'>" + txt + "</div>");
}


function drawTable(row, txt)
{
  var i = 0;
  var style;
  for ( i=0 ; i<row ; i++ )
  {
    if ( i%2 == 0 ) style = setStyle('#0FFF00');
    else style = setStyle('#FFFF00');
    document.write("<div style='" + style + "'>" + txt + "</div>");
  }
}