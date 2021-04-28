const fs = require('fs');
const http = require('http');
const https = require('https');
const crypto = require('crypto');

function privateInfo()
{
	this.ACCESS_KEY = '3e033dec-c94d-4c1c-905f-56158bf53590';
	this.SECRET_KEY = '1a6e2f193eeefa1f4adc9225e75b6e96cfb6247e';
	this.algorithm = 'sha256';

	this.signature = function(msg)
	{
		return crypto.createHmac(this.algorithm, this.SECRET_KEY).update(msg).digest('hex');
	}
}

function cnTicket()
{
	this.pinfo = new privateInfo();

	this.datetime = new Date().toISOString().substr(2,17).replace(/:/gi, '').replace(/-/gi, '') + "Z";
	this.method = 'GET';
	this.path = '/v2/providers/travel_backbone_api/apis/ticket-api/v1/mock-up/purchasers';
	this.query = 'searchStartDateTime=20210401000000&searchEndDateTime=20210501000000&offset=0&limit=100';

	this.message = function(path, query)
	{
		this.datetime = new Date().toISOString().substr(2,17).replace(/:/gi, '').replace(/-/gi, '') + "Z";
		this.path = path?path:this.path;
		this.query = query?query:this.query;
		return this.datetime + this.method + this.path + this.query;
	}

	this.url = function(path, query)
	{
		this.path = path?path:this.path;
		this.query = query?query:this.query;
		return this.path + '?' + this.query;
	}

	this.authorization = function(path, query)
	{
		return 'CEA algorithm=HmacSHA256, access-key=' + this.pinfo.ACCESS_KEY + ', signed-date=' + this.datetime + ', signature=' + this.pinfo.signature(this.message(path, query));
	}
}

function cnGet(url, mthd, auth)
{
	this.options = {
		hostname: 'api-gateway.coupang.com',
		port: 443,
		path: url,
		method: mthd,
		headers: {
			'Content-Type': 'application/json;charset=UTF-8',
			'Authorization': auth,
			'X-EXTENDED-TIMEOUT':90000
		}
	};

	let body = [];

	this.req = https.request(this.options, res  => {
		console.log(`statuscode: ${res.statusCode}`);
		console.log(`reason: ${res.statusMessage}`);

		res.on('data', (chunk) => {
			body.push(chunk);
		}).on('end', () => {
			console.log('end');
			body = Buffer.concat(body).toString();
			const json = JSON.parse(body);
			console.log(JSON.stringify(json, null, 2));
		});
	});

	this.req.on('error', error => {
		console.log(error);
	});

}


function cnTicketChecker()
{
	this.pinfo = new privateInfo();
	this.ticket = new cnTicket();
	this.request = function(path, method, query)
	{
		this.ticket.method = method?method:this.ticket.method;
		cnget = new cnGet(this.ticket.url(path, query), method, this.ticket.authorization(path, query));
		return cnget.req.end();
	}
}



/****

****/
/******************************************************************************/
/*                                                                            */
/*                                                                            */
/*                            https  client                                   */
/*                                                                            */
/*                                                                            */
/******************************************************************************/





/******************************************************************************/
/*                                                                            */
/*                                                                            */
/*                                httpd                                       */
/*                                                                            */
/*                                                                            */
/******************************************************************************/
var httpd = http.createServer( function(req,rsp) {
	var id = 100;
	if ( req.url == '/list' )
	{
		ticketList(req,rsp);
	}
	else if ( req.url == '/item' )
	{
		ticketItem(req,rsp);
	}
});

httpd.listen(80, function(){
	console.log('httpd is running');
});

/******************************************************************************/
/*                                                                            */
/*                                                                            */
/*                                req proc                                    */
/*                                                                            */
/*                                                                            */
/******************************************************************************/

function ticketList(req, rsp)
{
	fs.readFile('list.html', function(error, data) {
		rsp.writeHead(200, {'Content-type':'text/html'});
		rsp.end(data);
	});
}

function ticketItem(req, rsp)
{
	var ack = '';

	var cntc = new cnTicketChecker();


	var path = "/v2/providers/travel_connect_api/apis/v1/marketplace/travel/tickets/knmgroup";
	var query = 0;


	cntc.request(path, 'GET', query);

	rsp.writeHead(200,{'Content-type':'text/html'});
	ack =`
		<HTML>
			<HEAD>
				<TITLE>
				</TITLE>
			</HEAD>
			<BODY>
				<div style='float:left;position:relative;width:720px;height:480px;background-color:#990000'>
					SAMPLE
				</div>
			</BODY>
		</HTML>
	`;

	rsp.end(ack);
}


