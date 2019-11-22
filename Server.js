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

    db.close();

});


var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlendcoderParser = bodyParser.urlencoded();

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
    console.log("Reading publish");
    dbo.collection(titlename).find({}, { projection: { _id: 0, titlename: 1, Note: 0}}).toArray (function (err, res) {
        if (err) throw err;
        console.log(res);
        
    });

})

app.get(__dirname + '/show.html', function(req, res){
    res.sendfile(__dirname + "/Sidor/html/show.html");
})

app.post('/NoteSaved' , urlendcoderParser , function(req, res){
    var titlename = req.body.titlename;
    if (titlename == "")
    {
        titlename = "Empty_Title";
    }
    var democontent = req.body.democontent;

    MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
        var dbo = db.db('Kodbagarna');
        if (err) throw err;

        var myNoteObj = { Note: democontent };

        //skapa en ny anteckning i db
        dbo.createCollection(titlename, function(err, res) {});

        //lägg in content i db
        dbo.collection(titlename).insertOne(myNoteObj, function(err, res) {
            if (err) throw err;
        });

        db.close();
    res.sendfile(__dirname + '/Sidor/html/index.html') 
    });
    
   
})


var server = app.listen(1010, function(){
    console.log('Server is online on port ' + server.address().port);
})