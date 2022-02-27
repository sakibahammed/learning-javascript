function stopWatch(){
    let counter = 0;
    return function(){
        counter++;
        return counter;
    }
}

let clock1 = stopWatch()
console.log(clock1());
console.log(clock1());




note : 

// what is closure in javasctip ? 

// => kono ekta function e r ekta function return kore tahole shey jodi outside e kono kichu access kore tahole sheye nejer ekta encapsulation create kore and neje modhe value rakhe.access.  


ekta fucntion theke r ekta function jodi return kori tahole taar nijossho ekta closure


