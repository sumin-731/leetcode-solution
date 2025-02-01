/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    let arrSum = nums.reduce((accum, curr) => accum + curr);
    let leftSum = 0;

    for(let i=0; i<nums.length; i++){
        if(i==0){
            arrSum -= nums[i];
        }else{
            leftSum += nums[i-1];
            arrSum -= nums[i];
        }

        if(leftSum == arrSum){
            return i;
        }
    }

    return -1;
};