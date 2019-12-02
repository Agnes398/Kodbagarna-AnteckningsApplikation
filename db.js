var express = require('express');
const MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Agnes398:Kodbagarna398@kodbagarna-urrhe.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(url, { useNewUrlParser: true });

MongoClient.connect(url, {useUnifiedTopology:true}, function(err, db) {
    if (err) throw err;
    var dbo = db.db('Kodbagarna');

    console.log("Connection created");

    dbo.createCollection("Test1", function(err, res) {
        if (err) throw err;
        console.log("Collection created");

    });

    // var titlename = req.body.titlename;
    // var democontent = req.body.democontent;

    var myobj = { name: "Test", note: "Test" };

    dbo.collection("Test1").insertOne(myobj, function(err, res) {
        if (err) throw err;
        console.log("1 document inserted");

    });

    dbo.collection("Test1").find({}, { projection: { _id: 0 }}).toArray( function(err, res) {
        if (err) throw err;
        console.log(res);

    });

    // dbo.listCollections().toArray( function (err, res) {
    //     console.log(res);
    // });

    var query = { name: "Test"};

    dbo.collection("Test1").find(query).toArray( function(err, res) {
        if (err) throw err;
        console.log(res);

        db.close();
    });

});