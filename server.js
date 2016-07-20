var port = '8080';
var host = '0.0.0.0';
var Express = require('express');
var app = Express();

app.use(require('./app'));

app.listen(port,host);

console.log ('Server running' + host + port)