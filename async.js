const request = require('request');
const callback = ()=>{
    console.log('Response');
};
const test = () => {
  request('http://www.google.com', callback);
}
//START OF PROGRAM
console.log("Hitting google");
test();
console.log("Some other work");
