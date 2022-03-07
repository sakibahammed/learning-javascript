console.log('first')

// setInterval(()=>{
//     console.log('second')
// },6000)
// console.log('second')
console.log('third')

// const timeId = setInterval(()=>{
//     console.log('tik tik tik');
// },1000);


console.log('fourth');


let seconds = 0;

const timeId =  setInterval(()=>{
    seconds++;
    console.log(seconds);
    if(seconds>14){
        clearInterval(timeId)
    }
},1000)


let clock = 0;

const Clck = setInterval(()=>{
    ++clock;
    console.log(clock);
    if(clock>60){
        console.log('1 minute');
        clearInterval(Clck);
    
    }
},1000)



// setinterval vs setTimeOut


/* SetInterval setTimeout er moto e kaaj kore.. setTimeout kaaj kore time niye last e theme jaai... kintu setInterval sesh hoi na... cholte e thake... 

    setInterval k thamanor jnne ekta condition dete hoi.. condition diiye clearinterval or emni clear interval dele ota theme jaai.... set interval asynchronus
*/