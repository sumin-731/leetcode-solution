/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    var newArr = [];
    
    if(arr.length < 1){
        return newArr;
    }
    
    while(true){
        if(size >= arr.length){
            console.log("여기");
            newArr.push(arr);
            return newArr;
        }

        var chunk = arr.splice(0, size);
        newArr.push(chunk);
    }
};
