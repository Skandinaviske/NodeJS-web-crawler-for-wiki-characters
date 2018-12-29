const cherio = require('cheerio');
//var fs= require('fs');
//var path = require('path');
//const rp = require('request-promise');
const rp = require('request-promise');
//var Table = require('cli-table')var MongoClient = require('mongodb').MongoClient;
var MongoClient = require('mongodb').MongoClient;
const potusParse = require('./potusParse');
const url='https://en.wikipedia.org/wiki/Yang_Mi';
const S = require('./Singlepageweb');
var url2 = "mongodb://localhost:27017/hunmanbeing";
var queue = require('queue');
var fs= require("fs");
var q =queue();
MongoClient.connect(url2, function (err, db) {
    if (err) throw err;
    console.log('数据库已创建');
    var dbase = db.db("hunmanbeing");
    dbase.createCollection('site', function (err, res) {
        if (err) throw err;
        console.log("创建集合!");
        db.close();
    });
});
S(url).then(function(Mimi){
    var i = 0;
   while(Mimi.Mimi[i]){
       console.log("MM");
       q.push(Mimi.Mimi[i]);
       i++;
   }
   return{
    q:(q),
    }
}).then(function(q){
    
    //const MM =[];
    console.log(q.q.length);
    console.log("success");
    
    //setTimeout(st, 2000);
   while(q.q.length!=15){

    
    S(q.q.shift()).then(function(Mimi){
        const MM =[];
        var j=0;
        while(Mimi.Mimi[j]){
            q.q.push(Mimi.Mimi[j]);
            MM.push(Mimi.Mimi[j]);
            j++;

        }
        console.log(MM.length);
        console.log(MM);

        //console.log(Promise(potusParse(MM[0])));
        return Promise.all(
            MM.map(function(url){
                return potusParse(url);
            }),
        );
    }).then(function(content)
    {

        var Mimi2 =[]
        for (var cc in content) {
            if (content[cc] != undefined) 
                 Mimi2.push(content[cc])  ; 
                }
        
        //console.log(typeof(content));
        console.log(Mimi2);
        for(var cd in Mimi2){
            MongoClient.connect(url2, function(err, db) {
                if (err) throw err;
                var dbo = db.db("hunmanbeing");
                var myobj = { name: Mimi2[cd].name, birthday: Mimi2[cd].birthday };
                dbo.collection("site").insertOne(myobj, function(err, res) {
                    if (err) throw err;
                    console.log("文档插入成功");
                    db.close();
                });
            });
        }
        
    }).catch(function(err){
        console.log(err);
    })
   }
})
