'use strict';
/*
 * O(n)
 */
var fisherYates = exports.fisherYates = function(items){
    var clone = items.slice(0);
    var i = clone.length;
    while(i){
        var j = Math.floor( Math.random() * i );
        var t = clone[--i];
        clone[i] = clone[j];
        clone[j] = t;
    }
    return clone;
}

