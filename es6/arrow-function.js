// function declaration


function add(num1 , num2){
    return num1 + num2;
}

const add2 = function add2(num1 , num2){
    return num1 + num2;
}

//annonymus function

const add3 = function(num1 , num2){
    return num1 + num2;
}



// document.getElementById('my-btn').onclick = function handelEvent(){
    
// }

const sum1 = add(1,2);
const sum2 = add2(15,17);
const sum3 = add3(10,20);
console.log(sum1);
console.log(sum2);
console.log(sum3);




// arrow function 


const add4 = (num1 , num2) => num1 + num2;
const sum4 = add4(15,17)
console.log(sum4);


// more arrow function 

let fullName = (firstName , lastName) => `${firstName} ${lastName}`;
console.log(fullName('Omar','Ahammed'));
