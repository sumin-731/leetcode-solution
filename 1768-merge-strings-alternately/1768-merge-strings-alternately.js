/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {

    let str = '';
    let count = 0;

    while(true){
        if(str.length == word1.length + word2.length){
            return str;
        }
        if(count < word1.length){
            //str = str + word1[count];
            str += word1[count];
        }

        if(count < word2.length){
            //str = str + word2[count];
            str += word2[count];
        }

        count++;
    }
};