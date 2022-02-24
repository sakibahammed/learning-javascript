const numbers= [4,6,8,10];

const output = [];

const doubleIt = number => number*2;

//map er vitore ei jinis ta e hocche
for(const number of numbers){
    const result = doubleIt(number);
    output.push(result);
}

// console.log(output);



// { maapping

// 1 . loop through each element
// 2. for each element cll the provided function
// 3. result for each element will be stored in an array 
// }



// const output2 = numbers.map(doubleIt);

// const output2 = numbers.map(number => number *2);

const output2 = numbers.map(x => x*2);
console.log(output2);

const square = numbers.map(x => x*x);
console.log(square);




// note : kono ekta array er upor loop chalano mane prottek ta element k loop chalai kichu ekta kora than seta k notun ekta array te push kore dea
// ....



//  soja banglay bolte gele map() array er porti ta element er jonne function k call kore and shob function er result k ekta new array te return kore







