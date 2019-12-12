@%MONGODB_HOME%\mongod.exe ^
  --install ^
  --serviceName %SERVICE_TITLE%_MONGODB ^
  --serviceDisplayName %SERVICE_TITLE%_MONGODB ^
  --dbpath %HOME_PATH%\mongodb\data ^
  --logpath %HOME_PATH%\mongodb\log\mongoservice.log ^
  --logappend ^
  --rest ^
  --jsonp ^
  --httpinterface
@net start %SERVICE_TITLE%_MONGODB
