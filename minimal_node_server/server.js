const http = require("http");

const server = http.createServer((req, res)=>{
	console.log('user visited :::>' + req.url);
	res.end('[+] hello you requested:>>> ' + req.url);
});
console.log('[+] Server Listening On PORT>>> 3333');
server.listen(3333);
