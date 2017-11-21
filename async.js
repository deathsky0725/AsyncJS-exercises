const fs = require('fs');

const readFromFile = (fileName,cb)=>{
  // WRITE CODE HERE
    //  fs.readFileSync(fileName,'utf8');
    fs.readFile(fileName,'utf8',(err,data)=>{
        console.log(data);
        cb();
    });

};
console.log('START');
readFromFile('sample.txt',()=>{
    console.log('end');
});

