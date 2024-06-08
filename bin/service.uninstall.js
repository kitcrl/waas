var Service = require('node-windows').Service;
var argv = "";

process.argv.forEach((val, index) => {
  //console.log(`${index}:${val}`);

  if ( `${index}` == 2 )
  {
    argv = `${val}`;
  }
});

// Create a new service object
var svc = new Service({
  name:'WAAS_NODE',
  description: 'WAAS_NODE',
  script: argv + 'bin/node/index.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('uninstall',function(){
  svc.stop();
});

svc.uninstall();

