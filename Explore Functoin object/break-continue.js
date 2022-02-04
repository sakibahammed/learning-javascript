var i = 0;

while(i<10){
    console.log(i);
    if(i==5){
        break;
    }
    i++;
}


for(var i = 0;i<10;i++){
    console.log(i)
    if(i==4){
        break;
    }
    
}


var numbers = [54,35,101,34,23,3,101,45,67];

// for(var i = 0;i<numbers.length;i++){
//     // array theke element gula near jnne ;

//     var number = numbers[i];
//     console.log(number);
//     if(number >100){
//         break;
//     }
// }

for(var  i =0;i<numbers.length; i++){
    var number = numbers[i];

    if(number >90){
        continue;
    }

    console.log(number)
}


// continue == skip... kono jaigay continue thakle okhane loop theme jabe and shamne por er step gula te r kaj hobe na...por er step e chole jabe






 