var express = require('express');
const MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Agnes398:Kodbagarna398@kodbagarna-urrhe.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true });

MongoClient.connect(url, {useUnifiedTopology:true}, function (err, db) {
    var dbo = db.db('Kodbagarna');
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

    dbo.collection(Rawdata.titlename).find({}, { projection: { _id: 0, titlename: 1, democontent: 0}}).toArray (function (err, res) {
        if (err) throw err;
        console.log(res);
    });

})
app.get(__dirname + '/show.html', function(req, res){
    res.sendfile(__dirname + "/Sidor/html/show.html");
})

app.post('/Send' , urlendcoderParser , function(req, res){
    var titlename = req.body.titlename;
    var democontent = req.body.democontent;

    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        var dbo = db.db('Kodbagarna');
        if (err) throw err;

        
        var myNoteObj = { Note: democontent };

        //skapa en ny anteckning i db
        dbo.createCollection(titlename, function(err, res) {
            
        });

        //lägg in content i db
        dbo.collection(titlename).insertOne(myNoteObj, function(err, res) {
            if (err) throw err;
            console.log(res);
        });

        db.close();
    });
    
   
})


var server = app.listen(1337, function(){
    console.log('Server is online on port ' + server.address().port);
})