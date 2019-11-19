var express = require('express');
var session = require('express-session');


var app = express();
//서버생성

app.use(session({
	secret: 'Secret key',
	resave: false,
	saveUninitialized: true,
	cookie: {
		maxAge: 60* 1000
	}
}));
//미들웨어 설정

app.use(function(request, response){
	request.session.now = (new Date()).toUTCString();
	//세션 정보를 저장한다.
	response.send(request.session);
	//응답
});

app.listen(52273, function(){
	console.log('Sever reunning at http://127.0.0.1:52273');
});
