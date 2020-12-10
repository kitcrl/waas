var debug_msg = "";
function DebugPrint(arg,m)
{
  if ( m == 1 )
  {
    debug_msg += "[" + arg + "]";
  }
  else
  {
    debug_msg = "[" + arg + "]";
  }
  //$('#debug').text(debug_msg);
}

