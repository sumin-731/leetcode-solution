/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    //array.last() 함수를 구현하라!
    if(this.length < 1){
        return -1;
    }

    return this[this.length-1];
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */