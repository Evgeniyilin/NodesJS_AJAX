const http = require('http');
const url = require('url');

http.createServer((request,response) => {
    console.log('server work');
    response.end('gooo');
    let urlRequest = url.parse(request.url, true);
    // console.log(urlRequest);
    console.log(urlRequest.query.test);
}).listen(3000);
