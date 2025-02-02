/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let arr = s.split(" ");
    let filteredArr = arr.reverse().filter((elem) => elem != '');
    return filteredArr.join(' ');

};