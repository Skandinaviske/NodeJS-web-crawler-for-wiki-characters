//var superagent =  require('superagent-charset')(require('superagent'));
const cherio = require('cheerio');
//var fs= require('fs');
//var path = require('path');
const rp = require('request-promise');
//var Table = require('cli-table')
const potusParse = require('./potusParse');
const url='https://en.wikipedia.org/wiki/Yang_Mi';
//var main_url  = 'http://www.meizitu.com/';
//var meiziURL  = 'http://www.mzitu.com/71235';

//let users = [];


// const   url= 'https://en.wikipedia.org/wiki/Yang_Mi';


rp(url).then(function(html){
    const Mimi =[];
    var i = 0;
    console.log("YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY");
    while(typeof(cherio('p>a',html)[i])!="undefined"){
        Mimi.push('https://en.wikipedia.org'+cherio('p>a',html)[i].attribs.href);
        i++;
        //if(cherio('p>a',html)[i].attribs.href==='')console.log("empty");
    }
    console.log(Mimi);
    console.log("LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL");
    return Promise.all(
        Mimi.map(function(url){
            return potusParse(url);
        }),
    );
    }).then(function(content)
    {
        console.log("DDDDDDDDDDDDDDDDDDDDDDDDD")
        //console.log(content)
        var Mimi2 =[]
        for (var cc in content) {
            if (content[cc] != undefined) 
                 Mimi2.push(content[cc])  ; 
           }
        
        //console.log(typeof(content));
        console.log(Mimi2);
        
    }).catch(function(err){
        console.log(err);
    })
.catch(function(err){

});
