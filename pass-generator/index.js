const http = require('http');
const cors = require('cors');
const express =require('express')
const app = express();

app.use(function (req, res, next) {
});

http.createServer((request, response) => {
        // Website you wish to allow to connect
        response.setHeader('Content-Type', 'application/json');
        response.setHeader('Access-Control-Allow-Origin', '*');

        // Request methods you wish to allow
        response.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    
        // Request headers you wish to allow
        response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    
        // Set to true if you need the website to include cookies in the requests sent
        // to the API (e.g. in case you use sessions)
        response.setHeader('Access-Control-Allow-Credentials', true);
    
        // Pass to next layer of middleware
  if (request.method === 'GET' && request.url === '/getnumber') {
    request.pipe(response);
    response.end(getnumber());
  } else {
    response.statusCode = 404;
    response.end();
  }
}).listen(3030);

function getnumber() {
    var code = "";
    var possible = "1234567890";

    for (var i = 0; i < 3; i++) {
      code += possible.charAt(Math.floor(Math.random() * possible.length));
      if (i == 0 && code == "0") {
        code = "7"
      }
    }
    return JSON.stringify({ number: code });
  }


