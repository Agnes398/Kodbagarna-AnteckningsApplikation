var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlendcoderParser = bodyParser.urlencoded();
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('Sidor'))
app.use(express.static('Sidor/html'))
app.use(express.static('Sidor/html'))

app.get('/', function(req, res){
    res.sendfile(__dirname + '/Sidor/html/index.html');
    res.sendfile(__dirname + '/Sidor/stylesheets/Main.css');
})
app.get(__dirname + '/AboutUs.html', function(req, res){
    res.sendfile(__dirname + "/Sidor/html/AboutUs.html");
    
})
app.get(__dirname + '/publish.html', function(req, res){
    res.sendfile(__dirname + "/Sidor/html/publish.html");

    dbo.collection(titlename).find({}, { projection: { _id: 0, titlename: 1}}).toArray (function (err, res) {
        if (err) throw err;
        console.log(res);
    });

})
app.get(__dirname + '/show.html', function(req, res){
    res.sendfile(__dirname + "/Sidor/html/show.html");
})

app.post('/NoteSaved' , urlendcoderParser , function(req, res){
    var titlename = req.body.titlename;
    var democontent = req.body.democontent;
    if (titlename == "")
    {
        titlename = "Empty_Title";
    }

    res.sendFile(__dirname + '/Sidor/html/index.html') 
    
   
})


var server = app.listen(1337, function(){
    console.log('Server is online on port ' + server.address().port);
})