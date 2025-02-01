/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    //문제 오해..!
    /*let originLength = arr.length;
    const newSet = new Set(arr);
    let setLength = newSet.size;

    if(originLength == setLength){
        return false;
    }else{
        return true;
    }*/

    //주어진 배열 arr에서 '각 숫자의 등장 횟수'가 모두 유일한지 확인하는 문제
    let tNumArr = [];
    while(true){
        let restArr = arr.filter((elem) => elem != arr[0]);

        tNumArr.push(arr.length - restArr.length);
        arr = restArr;

        if(restArr.length == 0){
            break;
        }
    }

    let originLength = tNumArr.length;
    const newSet = new Set(tNumArr);
    let setLength = newSet.size;

    if(originLength == setLength){
        return true;
    }else{
        return false;
    }
};