const anthem = 'amar shonar bangla ami tomai valonashi';

const word = anthem.split(' ');
const withoutA = anthem.split('a');

// console.log(withoutA);



//slice
const smallSlice  = anthem.slice(5,13);
// console.log(smallSlice);


// substr()

const anotherPart = anthem.substr(5,7);
// console.log(anotherPart);


// substirng 

const anotherAnotherPart = anthem.substring(11,15);
// console.log(anotherAnotherPart);


const first = 'Amader';
const second = 'City';

const fullString = first.concat(second).concat('ABC').concat('rj kibria');
console.log(fullString);



const words2 = ['alim','badhon','cameron','david'];
// const allJoined = words2.join(' ');
// const allJoined = words2.join(' ');
const allJoined = words2.join(', ');


console.log(allJoined)





























