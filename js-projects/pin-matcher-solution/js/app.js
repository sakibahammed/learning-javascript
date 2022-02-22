function getPin (){
    const pin = Math.round(Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length==4){
        return pin;
    } 
    else{
        console.log('get 3 dig');
        return getPin();
    }
}


function generatePin(){
    const pin = getPin();
    document.getElementById('displayPin').value = pin;
}


document.getElementById('key-pad').addEventListener('click',function(event){
    const number = event.target.innerText;
    const calcInput =  document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number == 'C'){
            calcInput.value = '';
        }
    }
    else{
    const prevoiusNumber = calcInput.value;
    const newNumber = prevoiusNumber + number
    calcInput.value = newNumber;
    }
    
})



function verifyPin(){
   const pin = document.getElementById('displayPin').value;
   const typedNumber = document.getElementById('typed-numbers');
   const pass= document.getElementById('notify-success');
   const failEror = document.getElementById('notify-fail');

   if(pin == typedNumber){
    
    pass.style.display='block';
    failEror.style.display='none'
   }
   else{
    pass.style.display='none';
    failEror.style.display='block';
   }
}
