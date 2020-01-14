var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 1337 || process.env.PORT;
var urlendcoderParser = bodyParser.urlencoded();
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static('Sidor'))
app.use(express.static('Sidor'))

app.get('/', function(req, res){
    res.sendfile(__dirname + '/Sidor/html/AboutUs.html');
})

app.post('/NoteSaved' , urlendcoderParser , function(req, res){
    exports.titlename = req.body.titlename;
    exports.democontent = req.body.democontent;
    if (titlename == "")
    {
        titlename = "Empty_Title";
    }

    res.sendFile(__dirname + '/Sidor/html/index.html') 
    
   
})


var server = app.listen(process.env.PORT, function(){
    console.log('Server is online on port ' + server.address().port);
})