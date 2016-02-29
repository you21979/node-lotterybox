'use strict';
/*
ToDo
一番上から３枚とる
一番上から３枚とらずに参照する
一番上におく
一番下におく
ランダムな位置におく
*/
var shuffle = require('./shuffle');
var CONSTANT = require('./constant');

var lookup = function(items, position, num){
    var len = items.length
    if(len >= num) return items
    switch(position){
    case CONSTANT.POSITION.TOP:
        return items.slice(0, num);
    case CONSTANT.POSITION.BOTTOM:
        return items.slice(-1, num);
    case CONSTANT.POSITION.RANDOM:
        var n = Math.random() * len
        return items.slice(n + num < len ? n + len : len - num, num);
    }
    return [];
}


var LotteryBox = module.exports = function(initFunc){
    this.initFunc = initFunc;
    this.items = [];
}

LotteryBox.prototype.lookup = function(num, position){
    num = num || 1;
    position = position || CONSTANT.POSITION.TOP;
    return lookup(this.items, position, num);
}

LotteryBox.prototype.take = function(num){
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
