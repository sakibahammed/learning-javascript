const numbers = [23,65,99,21 , 34];
// console.log(numbers);
// console.log(...numbers);

const max = Math.max(23,99,65);

const maxInArray= Math.max(...numbers);
// console.log(maxInArray);

numbers.push(155);
// console.log(numbers);

const numbers2 = [...numbers,88];
numbers.push(45);

console.log(numbers2);


