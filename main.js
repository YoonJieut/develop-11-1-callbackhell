// 내장 모듈
const http = require('http');
// 외부 모듈 가져오기(내가만들어서 합친 것들)
const HTMLTemplate = require('./modules/HTMLTemplate');

const contentType = {
  'Content-Type' : 'text/html',
  'charset' : 'utf-8',
}

// 서버 생성
const server = http.createServer(function(request, response){

  if (request.method === "GET" && request.url === "/"){
    // 200코드는 잘 응답했다는 뜻
    response.writeHead(200, contentType);
    response.end(HTMLTemplate);
  } else {
    response.writeHead(404, contentType);
    response.end('<h1>페이지 요청 데이터를 찾을 수 없을 때 404에러를 응답하는 것이 HTTP 프로토콜');
  }

});

server.listen(3000, function(){
  console.log('서버가 가동 중 입니다. 끄려면 깐트롤 C를 눌러주세요. ');
});