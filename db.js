var express = require('express');
var bodyParser = require('body-parser');
var urlendcoderParser = bodyParser.urlencoded();

var userInput = require('./Server.js');

const MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Agnes398:Kodbagarna398@kodbagarna-urrhe.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true });

MongoClient.connect(url, {useUnifiedTopology:true}, function(err, db) {
    if (err) throw err;
    var dbo = db.db('Kodbagarna');

    console.log("Connection created");

    dbo.createCollection("Test", function(err, res) {
        if (err) throw err;
        console.log("Collection created");

    });

    var myobj = { name: userInput.titlename, note: userInput.democontent };

    dbo.collection("Test").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");

    });

    dbo.collection("Test").find({}, { projection: { _id: 0 }}).toArray( function(err, res) {
        if (err) throw err;
        console.log(res);

        db.close();

    });

    // dbo.listCollections().toArray( function (err, res) {
    //     console.log(res);
    // });

    // var query = { name: "Test"};

    // dbo.collection("Test").find(query).toArray( function(err, res) {
    //     if (err) throw err;
    //     console.log(res);

    //     db.close();
    // });

});