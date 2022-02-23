// maximum time e kono variable k const diye declare korbo

const priyoPerson = 'momtaz begum';

// variable k reassign korle let diye declare korte hobe..  and reassign na korle seta const diye declare korte hobe... 



//default perameter example
function calculate(x,y,z=0){

}
//perameter er por equal sign diye default perameter bujhai

function getName( first , last = 'sultana'){
    return `${first} ${last}`
}

//template String
//dynamic kore fele

const lovelyPersonIs  = 'Himu'
const myPeople = ` My peopls are ${lovelyPersonIs} and his full name is ${getName('Humaira')}`;
console.log(myPeople);


//arrow function 

const getName2 = (first , last) => first + ' ' + last;

const fiveTImes = (x)=>x*5;

//large arrow function / big arrow fucniton

const bigArrow =(x,y,z) =>{
    const firstPart = x + y;
    const secondPArt = x - y;
    const thirdPart = x * y;
    const fourthPart = x / y;

    const result = (firstPart + secondPArt + thirdPart + fourthPart);
    return result;
}


//spread operator

const number = [2,3,4,5,43,546,767];
const min = Math.min(...number);
console.log(min);