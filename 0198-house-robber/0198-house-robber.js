/**
 * @param {number[]} nums
 * @return {number}
 */
 //[2,1,3,5,3]
var rob = function(nums) {
    var maxAmount = 0;
    var prev1 = 0;
    var prev2 = nums[0];
    for(var i=1; i<nums.length; i++){
        maxAmount = Math.max(prev1+nums[i], prev2); //전전집과 현재집의 합과 전집의 최대값 중 더 큰 값을 maxAmount로 세팅

        //윗줄에서 전집이 Max값이 되더라도 어차피 다음집을 더하면 전Max는 더이상 Max가 안 되기 때문에  prev1, prev2, maxAmount가 같아도 됨
        prev1 = prev2;      
        prev2 = maxAmount;  //
    }
    return prev2; 
};