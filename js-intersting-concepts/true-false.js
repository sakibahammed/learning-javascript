////======>  True & False
/*

Truthy : 

1. Any number (negative or postive) is truthy.. 
2. any string truthy( gap/whtespace count as string)
3. empty array [] thruthy
4. empty object truthy.


anything else that is not falsy is truthy

/* falsy :
1 . false , False;
2 . Zero (0) is always falsy;
3. empty string falsy
4. null falsy
5. NaN falsy




*/

let x = {};
console.log('value of x',x);
if(x){
    console.log('variable is truthy')

}
else{
    console.log('variable is falsy');
}