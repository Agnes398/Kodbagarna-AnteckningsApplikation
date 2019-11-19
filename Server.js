var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlendcoderParser = bodyParser.urlencoded();
app.get('/', function(req, res){
    res.sendfile(__dirname + '/Sidor/html/index.html');
})
app.get(__dirname + '/html/AboutUs.html', function(req, res){
    res.sendfile(__dirname + "/Sidor/html/info.html");
})
app.use(express.static('Sidor'))
app.use(express.static('Sidor/html'))
app.post('/processpost' , urlendcoderParser , function(req, res){
    data = {
        title:req.body.title,
        demo:req.body.demo
    }
    console.log(data);
    res.end(JSON.stringify(data))
})


var server = app.listen(process.env.PORT, function(){
    console.log('Server is online on port ' + server.address().port);
})