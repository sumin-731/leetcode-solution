/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    if(t.length < s.length){
        return false;
    }

    if(t.length == s.length){
        if(t === s){
            return true;
        }else{
            return false;
        }
    }

    for(let i=0; i<s.length; i++){
        let idx = t.indexOf(s[i]);
        if(idx < 0){
            return false;
        }

        t = t.slice(idx + 1);
    }

    return true;
};