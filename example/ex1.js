var LotteryBox = require('..');

var lb = new LotteryBox(function(){
    console.log('init');
    return [0,1,2,3,4,5,6,7,8,9,10];
});

console.log(lb.take())
console.log(lb.take())
console.log(lb.take())
console.log(lb.take())
console.log(lb.take())
console.log(lb.take())
console.log(lb.take())
console.log(lb.take())
console.log(lb.take())
console.log(lb.take())
console.log(lb.take())
console.log(lb.take())
console.log(lb.take())
console.log(lb.take())
console.log(lb.take())
console.log(lb.take())
console.log(lb.take())
console.log(lb.take())
console.log(lb.take())

