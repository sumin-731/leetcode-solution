/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    var ans = [];

    for(var i=0; i<=n; i++){
        biNum = i.toString(2);
        ans.push(biNum.split('1').length-1);
    }

    return ans;
};