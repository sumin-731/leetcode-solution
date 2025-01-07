/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let cache = {};
    return function(...args) {
        //error!! => args 배열을 그대로 참조하고 있음!!
        //값(value)이 같아도 주소값(reference)이 다르기 때문에 String으로 변환해줘야 함
        //const key = args;
        const key = JSON.stringify(args);

        if(key in cache){
            return cache[key];
        }else{
            let answer = fn(...args);
            cache[key] = answer;
            return cache[key];
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */