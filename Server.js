var express = require('express');
var app = express();
app.get('/', function(req, res){
    res.sendFile(__dirname + '/Sidor/html/index.html');
  


})
app.get('/', function(req, res){


})

var server = app.listen(1337, function(){
    console.log('Server is online on port ' + server.address().port);
})