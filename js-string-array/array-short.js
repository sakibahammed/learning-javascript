const numbers = [6,4,7,1,3,9,2,5];
const shortedNumbers = numbers.sort();
console.log(shortedNumbers);



const friends = ['kabli','babli','joshim','rajjak','anowar',
'dipjol','badha'];

// console.log(friends);
const shortedFriends = friends.sort();


const reversedFriends = friends.reverse();
// console.log(shortedFriends);
// console.log(reversedFriends);



// number shorting fun;

const bigNumbers = [66,58,81,92,9,6,37,13,2];
const bigNumberSorted  = bigNumbers.sort(function(a,b){
    return a-b;
});
console.log(bigNumberSorted);