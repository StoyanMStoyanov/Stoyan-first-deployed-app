let http = require ('http');

let port = process.env.PORT || 5000;

let environment = process.env.NODE_ENV;

http.createServer((request, responce) => {
		responce.writeHead(200);
		responce.write('Hi Stoyan from your first real deploued app.\nEnvironment: ' + 
			environment + '. Port: ' + port + '.');
		responce.end();
	}).listen(port);

	if (environment === 'development') {
		console.log(`Server running on port: ${port}.`);
	};