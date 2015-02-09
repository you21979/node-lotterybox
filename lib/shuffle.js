
/*
 * O(n)
 */
var fisherYates = exports.fisherYates = function(items){
    var i = items.length;
    while(i){
        var j = Math.floor(Math.random()*i);
        var t = items[--i];
        items[i] = items[j];
        items[j] = t;
    }
    return items;
}

