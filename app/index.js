var Express = require('express');
const motivations = require('motivations')
const pickOne = require('pick-one');
var app = Express();

app.get('/hello', function(request,response){
	console.log("request to /hello");
	response.send(pickOne(motivations));
});

module.exports = app;