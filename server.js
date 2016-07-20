var port = process.env.PORT || "8000";
var host = process.env.HOST || "0.0.0.0";
var Express = require('express');
var app = Express();

app.use(require('./app'));

app.listen(port,host);

console.log ('Server running' + host + port)