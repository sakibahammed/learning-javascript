const add =(num1 , num2) => num1 + num2;

const sum = (num1 , num2) => num1 + num2;

// const add = (num1 , num2) => num1 + num2;\


//calling 

const sumResult = sum(15,23);
console.log(sumResult);



const mulitiple = (num1 , num2 , num3) => num1 * num2 * num3;

const result = mulitiple(1,2,4);
console.log(result);



const fiveTimes = (num) => num * 5;
const output = fiveTimes(2);
console.log(output);

const tenTimes = num => num*10;
console.log(tenTimes(2));



// no peramete

const getName = () => 'brandon Sam';
const name = getName();
console.log(name);


// arrow function e bracket use korte e hobe..but sudhu mtro ekta perameter thakle sei khetre bracket use na korleo hobe




//bigArrowfuncton
// multiline operation er jonne second bracket use kora jabe

const doMath = (x,y)=>{
    const sum = x + y;
    const dif = x -y;
    const result = sum * dif;
    const output = result * 5;
    return output;
}

console.log(doMath(5,2));




document.getElementById('my-btn').addEventListener(event =>{
    
})




