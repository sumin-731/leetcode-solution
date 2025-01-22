/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function(fn, args, t) {
    //1. setTimeout을 사용해 타이머를 설정합니다.
    //2. 타이머 ID를 저장한 후, 이를 이용해 clearTimeout으로 취소할 수 있는 함수를 반환합니다.
    //3. 반환된 취소 함수가 호출되면, 설정된 타이머가 실행되지 않도록 취소됩니다.
    const tId = setTimeout(fn, t, ...args);

    return function cancelFn(){
        clearTimeout(tId);
    }
}
/**
 *  const result = [];
 *
 *  const fn = (x) => x * 5;
 *  const args = [2], t = 20, cancelTimeMs = 50;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) => {
 *      const diff = Math.floor(performance.now() - start);
 *      result.push({"time": diff, "returned": fn(...argsArr)});
 *  }
 *       
 *  const cancel = cancellable(log, args, t);
 *
 *  const maxT = Math.max(t, cancelTimeMs);
 *           
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() => {
 *      console.log(result); // [{"time":20,"returned":10}]
 *  }, maxT + 15)
 */