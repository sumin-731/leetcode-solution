/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    var joinedArray = [];
    //arr2에 arr1를 병합하되 중복되는 키는 추가하지 않는다.
    /*
    var joinedArray = [];
    const ids = arr2.map((item) => {return item.id});
    for(var i=0; i<arr1.length; i++){
        if(ids.includes(arr1[i].id)){
            continue;
        }else{
            arr2.push(arr1[i]);
        }
    }

    joinedArray = arr2.sort(function(a,b){
        return a.id - b.id
    });

    return joinedArray;*/

    //위의 코드에서 오류 발견. 예제 3에서 보듯 배열2가 덮어쓸 때 배열1에는 존자하나 배열2에 존재하지 않는 키도 잔존해야 한다.
    //해결방안: 배열1과 배열2의 모든 키를 비교?!
    //id도 비교하고 key도 비교하라......?
    //-> id 먼저 비교해서 key비교한 후, 다시 joinedArray 배열에 넣어줘
    const keys2 = new Map();
    for(var item of arr2){
        keys2.set(item.id, item);
    }

    for(var item of arr1){
        if(!keys2.has(item.id)){
            //arr2와 arr1의 id키가 중복되지 않는 arr1의 객체를 arr2에 삽입 
            //arr2.push(item);
            keys2.set(item.id, item);
        }else{
            //spread 문법 사용.....***********
            const existingItem = keys2.get(item.id); // arr2의 기존 객체
            const mergedItem = {...item, ...existingItem }; // arr2의 값을 우선하여 병합
            keys2.set(item.id, mergedItem);
        }
    }

    // Map에서 값을 추출하고 id 기준으로 정렬
    return Array.from(keys2.values()).sort((a, b) => a.id - b.id);
};