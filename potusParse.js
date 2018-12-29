const rp = require('request-promise');
const $ = require('cheerio');

const potusParse = function(url){

return rp(url)
    .then(function(html){
        console.log("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC"+url);
    //console.log(html);
    if($('.bday',html).text()!=''){
    return{
    //url : (url),
    birthday: $('.bday',html).text(),
    name : ($('.firstHeading',html).text()),
    }
}
}).catch(function(err){
    console.log(err);
});
}
module.exports = potusParse;