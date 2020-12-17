const express = require("express");

const app = express();

app.get("/", (req, res)=> {
	console.log("[+]someone requested >>>" + req.url);
	res.end("Welcome to my Website");
});

app.get("/complement", (req, res)=>{
	console.log("[+]someone requested >>>" + req.url);
	res.end("You have enough time to learn some JS?");
});

// [+] TODO check how to parse the URL for paths
// app.get(http, (req, res)=>{
// 	console.log("[+]someone requested >>>" + req.url);
// });

app.listen(1337);
console.log("[+] Listening on port: 1337");
