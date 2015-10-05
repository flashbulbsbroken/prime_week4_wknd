var express = require('express');

var moment = require('moment');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
    console.log('Index Route');
    response.sendFile(__dirname + '/public/views/index.html');
});

//server information - set up to accommodate heroku and local
var server = app.listen(process.env.PORT || 3000, function() {
    var port = server.address().port;
    console.log('Listening on port: ' + port);
});

module.exports = app;