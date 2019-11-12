var express = require('express');
var app = express();

app.use(function(request, response, next) {
	console.log('first');
	next();
});

app.use(function(request, response, next) {
	console.log('second');
	next();
});

app.use(function(request, response, next) {
	console.log('third');
	
	response.writeHead(200, { 'Context-Type' : 'text/html' });
	response.end('<h1>express Basic</h1>');
});

app.listen(52273, function() {
	console.log('Server Running');
});
