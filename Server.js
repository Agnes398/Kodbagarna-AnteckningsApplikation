const MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Agnes398:Kodbagarna398@kodbagarna-urrhe.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
    if(err) return console.log(err)

    console.log("database connected");

    client.close();
});

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlendcoderParser = bodyParser.urlencoded();

app.use(express.static('Sidor'))
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
})
app.get(__dirname + '/show.html', function(req, res){
    res.sendfile(__dirname + "/Sidor/html/show.html");
})

app.post('/processpost' , urlendcoderParser , function(req, res){
    data = {
        titlename:req.body.titlename,
        democontent:req.body.democontent
    }
    console.log(data);
    res.end(JSON.stringify(data))
})


var server = app.listen(process.env.PORT, function(){
    console.log('Server is online on port ' + server.address().port);
})