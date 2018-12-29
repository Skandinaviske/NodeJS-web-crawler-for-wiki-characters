//var superagent =  require('superagent-charset')(require('superagent'));
const cherio = require('cheerio');
//var fs= require('fs');
//var path = require('path');
const rp = require('request-promise');
//var Table = require('cli-table')
const potusParse = require('./potusParse');
//let users = [];


 //const   url= 'https://en.wikipedia.org/wiki/Yang_Mi';
function S(url)
{
return rp(url)
    .then(function(html){
    const Mimi =[];
    var i = 0;
    //console.log("YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY");
    while(typeof(cherio('p>a',html)[i])!="undefined"){
        Mimi.push('https://en.wikipedia.org'+cherio('p>a',html)[i].attribs.href);
        i++;
    }
    //console.log(Mimi);
    return {
        Mimi : (Mimi),
    }
}).catch(function(err){
    console.log("S"+err);
});
}

module.exports = S;
    /*
    console.log("LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL");
    return Promise.all(
        Mimi.map(function(url){
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
        
    }).catch(function(err){
        console.log(err);
    })
.catch(function(err){

});

}
*/