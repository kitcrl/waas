var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'WAAS_NODE',
  description: 'WAAS_NODE',
  script: 'D:/waas/bin/index.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();