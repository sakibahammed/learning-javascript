// 1. let and const

const hubby = 'omor aunny';
let phone = 'xaiomi';

// 2. template string || dynamic string

const myNotes = `
        I am mojnu
        I dont have  a lyli.
        I use ${phone}.
        i kill ${hubby}

`;

// console.log(myNotes);


//3 . default Perameter 

function findMaxNumber(array=[]){
    const max = Math.max(...array);
    return max;
}

const biggest = findMaxNumber();
console.log(biggest);


//5 spread or three dots (...)

//see 22 line


//4 arrow function

const square = (x=2) => x*x;

console.log(square());

