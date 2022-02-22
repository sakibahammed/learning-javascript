function addNumbers(num1 , num2){
    // console.log(arguments);
    let result = 0;
    for(const num of arguments){
        console.log(num);
    }
    // arguments.push(45)
    const result = result + num;
    return result;

}

const sum = addNumbers(23,13,50,100);
console.log(sum);