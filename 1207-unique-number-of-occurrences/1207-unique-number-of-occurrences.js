/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let originLength = arr.length;
    const newSet = new Set(arr);
    let setLength = newSet.size;

    if(originLength == setLength){
        return false;
    }else{
        return true;
    }
};