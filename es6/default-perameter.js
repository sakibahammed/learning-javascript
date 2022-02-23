function add(num1,num2=0){ // after es6.. ekhane main perameter e ekta value bydefault set kore dea hoi
   
   
    // before es6

    //option=====>1
    if(num1 == undefined || num2 ==undefined){
        num2 = 0;
        num1 = 0;
    }

    // r ekta kaj kora hoto : 
    // option======>2

    num2 = num2 || 0;
    num1 = num1 || 0;
    const total = num1 + num2;
    return total;
}

const result = add(17,10);
console.log(result);




function fullName(first , last = 'chowdhuri'){
    const name = first + ' ' + last;
    return name ;
}

console.log(fullName('amin'));
