var express = require('express');
const MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Agnes398:Kodbagarna398@kodbagarna-urrhe.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true });

MongoClient.connect(url, {useUnifiedTopology:true}, function (err, db) {
    if(err) {
        return console.dir(err);
    } else {
        console.log("We are connected");
    }

    dbo.collection("test").find({}, { projection: { _id: 0, name: 1, region: 1}}).toArray (function (err, res) {
        if (err) throw err;
        console.log(res);
    });

    db.close();

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

    dbo.collection(Rawdata.titlename).find({}, { projection: { _id: 1, titlename: 1, democontent: 0}}).toArray (function (err, res) {
        if (err) throw err;
        console.log(res);
    });

})
app.get(__dirname + '/show.html', function(req, res){
    res.sendfile(__dirname + "/Sidor/html/show.html");
})

app.post('/Send' , urlendcoderParser , function(req, res){
    var Rawdata = {
        titlename:req.body.titlename,
        democontent:req.body.democontent
    }

    MongoClient.connect(url, { useNewUrlParser: true }, function(err, client) {
        if (err) throw err;
        var dbo = db.db(db.name);
        //skapa en ny anteckning i db
        dbo.createCollection(Rawdata.titlename, function(err, res) {
            
        });

        //lägg in content i db
        dbo.collection(Rawdata.titlename).insertOne(Rawdata.democontent, function(err, res) {
            if (err) throw err;
            console.log(res);
        });

        //visar content av anteckningar
        // dbo.collection(Rawdata.titlename).find({}, { projection: { _id: 0, democontent: 1}}).toArray (function (err, res) {
        //     if (err) throw err;
        //     console.log(res);
        // });

        client.close();
    });
    
   
})


var server = app.listen(1337, function(){
    console.log('Server is online on port ' + server.address().port);
})