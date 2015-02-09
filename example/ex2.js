var LotteryBox = require('..');

var dice = function(){
    return [1,2,3,4,5,6]
}

var dx2 = function (){
    var x = new LotteryBox(function(){
        return [].concat(dice(), dice());
    });
    return [x.take(), x.take()]
}

var dx3 = function (){
    var x = new LotteryBox(function(){
        return [].concat(dice(), dice(), dice());
    });
    return [x.take(), x.take(), x.take()]
}

var add = function(r, v){
    return r + v;
}

for(var i=0; i<10; i++){
    console.log(dx2().reduce(add, 0))
}

for(var i=0; i<10; i++){
    console.log(dx3().reduce(add, 0))
}
