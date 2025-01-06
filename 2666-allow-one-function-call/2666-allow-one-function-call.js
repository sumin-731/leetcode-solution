/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    var i=1;
    return function(...args){
        if(i == 1){
            i++;
            
            //console.log(fn(args[0], args[1], args[2]));  console.log에서의 함수 호출도 call수로 간주
            return fn(...args);
        }
        return;
        
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
