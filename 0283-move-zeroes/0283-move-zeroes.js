/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zeroArr = [];
    for(var i=0; i<nums.length; i++){
        if(nums[i] == 0){
            zeroArr.push(i);
        }
    }

    for(var i=zeroArr.length-1; i>=0; i--){
        nums.splice(zeroArr[i],1);
    }

    for(var i=0; i<zeroArr.length; i++){
        nums.push(0);
    }
};