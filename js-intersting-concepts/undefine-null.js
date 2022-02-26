/* 

Note : 

undefined : 

1. variable er value na thakle undefined return kore///

variable value not assigned...

2 . function but didnt return anything from function gives undrfined

3. just wrote return but didnt return anything.

4 . perameter that isnt passed.

5.  property that dosent exist in an object

6. accessing array element out of range

7. accessing deleted array element 

8. forcely set value to undefined

















Null :

1. explicitly set korle e nulll hoi.. null means value ta nai.





undefine mane holo define kora hoi nai.. null holo naai..undefine onk vbe hote paare null explicitly set kora hoi



*/


let first ;
//  console.log(first);

function second (x, y){
    const sum = x + y;

}

const result = second(2,3);
console.log(result)




function add (a, b){
    const sum = a + b;
    
    if(b < 10){
        return
    }
    return sum;
}



function double (a,b){
    const result =  a*2;
    console.log(b);
    return result
}
double(81);



const fifth = {name : 'sogir uddin', age : 15};
console.log(fifth.phone);


const sixth = [54,12,41,3];
// console.log(sisth[6]);
delete sixth(3);
console.log(sixth[2]);


const seventh = undefined;
console.log(seventh);


const myObject = {name: 'samad' , profession : null}

