class Calculator {
    
    /** 
     * @param {number} value
     */
    constructor(value) {
        this.value = value;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    add(value){
        this.value += value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    subtract(value){
        this.value -= value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */  
    multiply(value) {
        this.value = this.value * value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    divide(value) {
        if(value == 0){
            throw Error('Division by zero is not allowed');
        }

        this.value = this.value / value;
        return this;
    }
    
    /** 
     * @param {number} value
     * @return {Calculator}
     */
    power(value) {
        const powerVal = this.value;

        if(value == 0){
            this.value = 1;
        }else{
            if(value > 0){
                while(true){
                    if(value == 1){
                        return this;
                    }
                    this.value = this.value * powerVal;
                    --value;
                }
            }else{
                while(true){
                    if(value == -1){
                        this.value = 1/this.value;
                        return this;
                    }
                    this.value = this.value * powerVal;
                    ++value;   
                }
            } 
        }
        return this;
    }
    
    /** 
     * @return {number}
     */
    getResult() {
        return this.value;
    }
}