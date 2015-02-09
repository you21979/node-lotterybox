var shuffle = require('./shuffle');

var LotteryBox = module.exports = function(initFunc){
    this.initFunc = initFunc;
    this.items = [];
}

LotteryBox.prototype.take = function(){
    if(this.isEmpty()){
        this.charge();
    }
    return this.items.shift();
}

LotteryBox.prototype.charge = function(){
    if(this.initFunc){
        this.items = shuffle.fisherYates(this.initFunc());
    }
}

LotteryBox.prototype.isEmpty = function(){
    return this.items.length <= 0;
}

LotteryBox.prototype.toJson = function(){
    return JSON.stringify(this.items)
}

LotteryBox.prototype.fromJson = function(json){
    this.items = JSON.stringify(json)
}
