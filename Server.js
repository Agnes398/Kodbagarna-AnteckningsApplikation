var express = require('express');
var app = express();
app.get('/', function(req, res){
    res.sendFile(__dirname + '/Sidor/html/index.html');
  


})


var server = app.listen(process.env.PORT, function(){
    console.log('Server is online on port ' + server.address().port);
})