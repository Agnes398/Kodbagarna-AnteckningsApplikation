var express = require('express');
var app = express();
app.get('/', function(req, res){
    res.sendfile(__dirname + '/Sidor/html/index.html');
})
app.get(__dirname + '/html/AboutUs.html', function(req, res){
    res.sendfile(__dirname + "/Sidor/html/info.html");
})
app.use(express.static('Sidor'))
app.use(express.static('Sidor/html'))

var server = app.listen(process.env.PORT(), function(){
    console.log('Server is online on port ' + server.address().port);
})