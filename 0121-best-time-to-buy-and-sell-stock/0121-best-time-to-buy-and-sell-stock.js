/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function(prices) {
    //1. Bottom-Up 방식으로 접근해보자..
    //0,1 배열의 비교는 필수
    /*var buy = prices[0];
    var sell = prices[1];

    var maxProfit = 0;

    //buy와 sell의 최적화값을 찾기 위해 for loop을 두 번 돌아야 하는가?  --> XXXXX -> 시간 초과 에러의 원인
    for(var i=0; i<prices.length-1; i++){
        //sell하는 날은 무조건 buy의 익일 이후여야 하므로 j=i+1로 설정
        for(var j=i+1; j<prices.length; j++){
            var diff = prices[j] - prices[i];
            if(diff>maxProfit){
                maxProfit = diff;
            }
        }
    }

    return maxProfit;*/

    //==> 내가 생각하는 Bottom-Up 방식인데 시간초과떠버림... 캐시저장방식인 Top-Down방식으로 재풀이 해보자...

    //2. Top-Down
    /*var buy = 0;
    let cache = {};
    var maxProfit = 0;

    //buy와 sell의 최적화값을 찾기 위해 for loop을 두 번 돌아야 하는가? --> XXXXXXX --> O(n^2)의 시간복잡도를 가지므로 무조건 시간초과됨
    for(var i=0; i<prices.length-1; i++){
        if(i in cache){
            return cache[i];
        }else{
            //sell하는 날은 무조건 buy의 익일 이후여야 하므로 j=i+1로 설정
            for(var j=i+1; j<prices.length; j++){
                var diff = prices[j] - prices[i];
                if(diff>maxProfit){
                    maxProfit = diff;
                    cache[i] = maxProfit;
                    buy = i;
                }
            }
        }
    }

    return cache[buy]?cache[buy]:0;*/

    //--> 이중루프는 O(n^2)의 시간복잡도를 가지므로 단일루프로 풀이하기!!
    //구매일에 따른 최대이익만 계산해서 구매일 변경할 때마다 max값 비교하여 도출하기
    var maxProfit = 0;
    var buyPrice = prices[0];

    for(var i=0; i<prices.length; i++){
        if(buyPrice > prices[i]){
            buyPrice = prices[i];
        }else{
            maxProfit = Math.max(maxProfit, prices[i] - buyPrice);
        }
    }

    return maxProfit;
};