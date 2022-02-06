const number = 5
const remaider = number%2;
console.log(remaider == 0 )



function oddEven (number){
    let result = number % 2;
    if(result==0){
        return true;
    }
    return false;
}
var resultOddEven = oddEven(21)
console.log(resultOddEven);





const herNumber = 1298;
const isHerNumber = oddEven(herNumber);
console.log(isHerNumber)
