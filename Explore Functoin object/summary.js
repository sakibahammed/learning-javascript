// declaring a simpple variable name with skycolor
var skyColor = 'white';


//declaring a simple array with phones name
var phones = ['apple','samsung','xiaomi','lg','vivo','htc'];

// change a value in 3rd position in array
phones[3] = 'motorola';

// check an element exist in array
// if(phones.indexOf('oppo') == -1){
//     console.log('oops amir khan oppo is missing');
// }

if(phones.indexOf('lg') == -1){
    console.log('lg is avaiable');
}


//loop 
var num = 0;
while(num<=100){
    num++;
}

for(var i = 0;i<phones.length;i++){
    var phone = phones[i];
}


// function

function addThreeNumber(number1 , number2 , number3){

    var total = number1 + number2 + number3;

    return total;
}

console.log(addThreeNumber(12,13,14));


//object

var microphone = {
    brand : 'blue yeti',
    price : 120,
    color : 'black'
}

