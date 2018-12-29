const fs = require('fs');

fs.writeFile('./A.txt',"big big big BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",function(err){
    if(err) console.log("EERRR");
    else console.log('写文件操作成功');
}); 