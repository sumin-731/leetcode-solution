/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    var typeBool = Array.isArray(obj);
    if(typeBool){
        return obj.length === 0;
    }else{
        return Object.keys(obj).length === 0;
    }
};