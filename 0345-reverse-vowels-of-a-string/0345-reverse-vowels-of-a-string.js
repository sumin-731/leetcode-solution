/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    //let vowels = ['a', 'e', 'i', 'o', 'u'];
    const vowels = new Map([
        ['a', 'a'],
        ['e', 'e'],
        ['i', 'i'],
        ['o', 'o'],
        ['u', 'u']
    ]);

    let newStr = s;
    let rsltStr = '';
    const letters = s.split("");

    let idxs = [];
    //let idxs = new Map();
    
    for(let i=0; i<s.length; i++){
        if(vowels.has(s[i]) || vowels.has(s[i].toLowerCase())){
            idxs.push(i);
            //idxs.set(i, s[i]);
        }
    }

    for(let j=0; j<idxs.length; j++){
        letters.splice(idxs[j],1,s[idxs[idxs.length-1-j]]);
    }

    return letters.join('');
};