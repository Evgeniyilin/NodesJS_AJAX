const http = require('http');

http.createServer((request,response) => {
    console.log('server work');
    response.end('gooo');
}).listen(3000);
