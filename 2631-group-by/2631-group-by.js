/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    /*groupBy 함수 구현하기*/
    var arr = this;
    var obj = new Object;
    var restArr = [];
    
    //!!!!! 이 코드는 시간복잡도 O(n^2)으로 타임아웃 에러남! ==> O(n)으로 수정필요
    /*while(arr.length != 0){
        //1. 필터링한 요소 담을 배열 생성
        var newArr = [];
        //2. 필터링 주체를 Object의 키로 세팅
        var key = fn(arr[0]);
        //3. 필터링 키에 따라 주어진 배열 필터
        newArr = arr.filter((elem) => {return fn(elem) == key});
        //4. 3에서 필터링된 배열을 Object에 할당
        obj[key] = newArr;
        //5. 필터링되고 남은 arr를 restArr에 할당
        restArr = arr.filter((elem) => {return fn(elem) != key});
        arr = restArr;
    }
    return obj;*/

    for(val of arr){
        if(fn(val) in obj){
            obj[fn(val)].push(val);
        }else{
            obj[fn(val)] = [];
            obj[fn(val)].push(val);
        }
    }
    return obj; 
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */