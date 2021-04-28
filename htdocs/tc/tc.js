const https = require('https');
const crypto = require('crypto');

const datetime = new Date().toISOString().substr(2,17).replace(/:/gi, '').replace(/-/gi, '') + "Z";
const method ='GET';
const path ='/v2/providers/travel_backbone_api/apis/ticket-api/v1/mock-up/purchasers';
const query = 'searchStartDateTime=20210401000000&searchEndDateTime=20210501000000&offset=0&limit=100';

const message = datetime + method + path + query;
const urlpath = path + '?' + query;

//input your accessKey
const ACCESS_KEY = '3e033dec-c94d-4c1c-905f-56158bf53590';
//input your secretKey
const SECRET_KEY = '1a6e2f193eeefa1f4adc9225e75b6e96cfb6247e';
const algorithm = 'sha256';

const signature = crypto.createHmac(algorithm, SECRET_KEY)
                    .update(message)
                    .digest('hex');

const authorization = 'CEA algorithm=HmacSHA256, access-key=' + ACCESS_KEY + ', signed-date=' + datetime + ', signature=' + signature;

console.log(message);
console.log(authorization);

const options = {
  hostname: 'api-gateway.coupang.com',
  port: 443,
  path: urlpath,
  method: method,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    'Authorization': authorization,
    'X-EXTENDED-TIMEOUT':90000
  }
};
console.log(options);
let body = [];

const req = https.request(options, res  => {
  console.log(`statusCode: ${res.statusCode}`);
  console.log(`reason: ${res.statusMessage}`);

  res.on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    const json = JSON.parse(body);
    console.log(JSON.stringify(json, null, 2));
  });
});

req.on('error', error => {
  console.error(error);
});

req.end();