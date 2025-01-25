/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let maxCandyNum = Math.max(...candies);
    let rsltArr = [];
    for(let i=0; i<candies.length; i++){
        if(candies[i] + extraCandies >= maxCandyNum){
            rsltArr[i] = true;
        }else{
            rsltArr[i] = false;
        }
    }

    return rsltArr;
};