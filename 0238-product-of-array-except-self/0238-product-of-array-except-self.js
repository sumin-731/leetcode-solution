/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    //원리: self 기준 왼쪽값의 곱셈과 오른쪽갑들의 곱셈을 각각 구한 후, 왼쪽값과 오른쪽값을 곱해준다.

    let leftSum = [];
    let rightSum = [];

    //Hint2에 의하여 메모리를 재사용하여 공간사용량을 줄이기 위하여 이전 결과값을 재사용
    leftSum[0] = 1;
    for(let i=1; i<nums.length; i++){
        leftSum[i] = Math.imul(leftSum[i-1], nums[i-1]);
    }

    console.log(leftSum);

    rightSum[nums.length-1] = 1;
    for(let j=nums.length-2; j>=0; j--){
        rightSum[j] = Math.imul(rightSum[j+1], nums[j+1]);
    }

    console.log(rightSum);

    let rslt = leftSum.map((elem, idx) => elem * rightSum[idx]);
    
    return rslt;
};