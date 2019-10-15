var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var app=express();

app.use(bodyParser.urlencoded({extended:false}));

var id ='inhatc';
var pw = '1234';

app.get('/login',function (request, response) {
	console.log('- get /login');
	fs.readFile('login.html',function (error,data) {
		response.send(data.toString());
	});
});
app.post('/login',function (request, response) {
	console.log('- post /login', request.body);
	if(request.body.id == id && request.body.pw ==pw) {
		response.send('<h1>Login Success</h1>');
	} else {
		response.send('<h>Login Fail</h1>');
	}
	});

var port =3300;
app.listen(port, function() {
	console.log('>> Express server listening on port '+ port);
});