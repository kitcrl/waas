@set NODE_PATH=f:\xlocal\projectX\tools\node.c\out
@set NODE_BIN=%NODE_PATH%\node.c.x86.exe
@set NODE_PLUGIN=f:\xlocal\projectX\app\modbus.plc\out
@set NODE_LOG=f:\xlocal\projectX\app\modbus.plc\out
rem @set NODE_PLUGIN=f:\xlocal\projectX\app\istock\out
rem @set NODE_LOG=f:\xlocal\projectX\app\istock\out

%NODE_BIN% --m console --d WAAS_NODE --s WAAS_NODE --X %NODE_PATH%\code.X.x86.dll --p %NODE_PLUGIN% --l %NODE_LOG% --e d2 -wssport 7810 -httpport 80 -home d:\waas\htdocs\ -index index.html
