var http = require('http');

function OnRequest(request, response)
{
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Node.JS Server (c) KaBoom");
	response.end();
}

	http.createServer(OnRequest).listen(80);