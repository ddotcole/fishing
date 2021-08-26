const http = require('http');
const requestIp = require('request-ip');

http.createServer((req, res) => {
  req.on('data', () => {})
  req.on('end', () => {
    const ip = requestIp.getClientIp(req);
    console.log(`\u001b[34m${ip}\u001b[0m: \u001b[32m${req.method}\u001b[0m ${req.url}`);
    res.statusCode = 404;
    res.end(); 
  })
  req.on('error', e => {console.error(e);})
}).listen(8080);