/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let newArr = [0];
    gain.reduce((accum, curr) => {
        newArr.push(accum+curr);
        return accum+curr;
        }, 0);
    
    return Math.max(...newArr);
};