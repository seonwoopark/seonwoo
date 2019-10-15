//모듈을 추출
var http = require('http');z

//서버를 생성하고 실행
http.createServer(function(request,response){
	response.writeHead(302, { 'Location' : 'http://hanbit.co.kr'
	});
	response.end();
}).listen(52273, function(){
	console.log('Server Running at http://127.0.0.1:52273');
});


