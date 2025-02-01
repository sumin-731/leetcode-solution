/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = 0;
    let strtNum = 0;
    let endNum = k-1;
    
    for(let i=0; i<k; i++){
        //initSum
        sum += nums[i];
    }
    
    //1.k개만큼 숫자를 더해가며 비교
    //1-1. k=4일 경우, 0~3 / 1~4 / 2~5 ...

    /*while(true){
        let cmprNum = 0;

        //타임아웃을 나게 하는 부분! 슬라이딩 윈도우 기법으로 변경해야함.
        for(let i=strtNum; i<=endNum; i++){
            cmprNum += nums[i];
        }

        if(sum < cmprNum || strtNum == 0){
            sum = cmprNum;
        }

        if(endNum + 1 == nums.length){
            return sum/k;
        }

        strtNum++;
        endNum++;
    }*/
    let cmprNum = sum;
    while(true){
        if(endNum + 1 == nums.length){
            return sum/k;
        }

        cmprNum -= nums[strtNum++];
        cmprNum += nums[++endNum];

        if(sum < cmprNum){
            sum = cmprNum;
        }
    }

};