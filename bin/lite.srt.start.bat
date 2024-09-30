@echo off

@sc create %SERVICE_TITLE%_SRT binpath= "%HOME_PATH%\tools\lite.srt.x86_64.exe --m service --d %SERVICE_TITLE%_SRT --s %SERVICE_TITLE%_SRT --exec websocket,socket --log %HOME_PATH%\htdocs\log\,M2 --websocket_url http://127.0.0.1:50080/ --websocket_cstype SERVER --websocket_timeout 8000 --websocket_size_of_buffer 1024 --websocket_callback_id 4 --socket_ip 127.0.0.1 --socket_port 50005 --socket_cstype SERVER --socket_timeout 8000 --socket_protocol TCP --socket_casttype UNICAST --socket_size_of_buffer 2048 --socket_callback_id 3" start= auto
@sc start %SERVICE_TITLE%_SRT
