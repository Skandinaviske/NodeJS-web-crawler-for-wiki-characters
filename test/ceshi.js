const cherio = require('cheerio');
//var fs= require('fs');
//var path = require('path');
//const rp = require('request-promise');
const rp = require('request-promise');
//var Table = require('cli-table')
const potusParse = require('./potusParse');
const url='https://en.wikipedia.org/wiki/Yang_Mi';
const
const S = require('./S');

var queue = require('queue');

var q =queue();

//console.log(S);
console.log("SSS");

S(url).then(function(Mimi){

    const myMimi = [];
   //myMimi = Mimi.Mimi;
   var i = 0;
   while(Mimi.Mimi[i]){
       console.log("MM");
       myMimi.push(Mimi.Mimi[i]);
       i++;
   }
   //console.log(myMimi);
   i=0;
   var z = 0;
   while(z<150){
       //console.log("GG");
        S(myMimi[i]).then(function(Mimi){
            var j=0;
            while(Mimi.Mimi[j]&&z<150){
                if(Mimi.Mimi[j] in myMimi){
                    console.log("WHHHHHHHHHHHHHHH")
                    continue
                }
            myMimi.push(Mimi.Mimi[j]);
            z=myMimi.length;
            console.log("i="+i);
            console.log("j="+j);
            console.log("z="+z);
            j++;
            }
            if(z===150)
        {
            console.log("OKKKKSSSSSSSSSSSSSSSSSSSS");
            console.log(myMimi);
            console.log("SSSEE");
            //return myMimi
        }
        })
        console.log("i++"+z);
        i++;
   }
console.log("finish");
console.log(myMimi);

})




/*
rp(url).then(function(html){

    console.log(html);
    console.log("SASASASASASASASASASASASASASAS");

    console.log(S(url))
    return Promise.all(
        s(url)
    )
}).then(function(content)
{
    console.log(content);

}).catch(function(err){
    console.log(err);
})
//const Mimiyang = [];
//var Sar = S;
//console.log(typeof(S.Mimi));
//Mimiyang.push(S.Mimi);
//console.log(Mimiyang);
/*
rp(url).then(function(html){
    
    const Mimi =[];
    return Promise.all(
        Mimi.map(function(url){
            return s;
        }),
    );
    }).then(function(content){
        console.log(content);



    })
    */