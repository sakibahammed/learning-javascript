function getinputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const valueInText = inputField.value;
    const value = parseFloat(valueInText);
    inputField.value = '';
    return value;
}


function updateTotal(fieldId,amount){
    // const totalTag = document.getElementById(fieldId);
    // const previousTotalinText = totalTag.innerText;
    // const previousTotal = parseFloat(previousTotalinText);
    const previuosTotal = getInnerTextValue(fieldId);
    
    const newTotal = previousTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;
    totalTag.innerText = newTotal;
    return newTotal;
}

function getInnerTextValue(fieldId){
    const fieldTag = document.getElementById(fieldId);
    const fieldValueInTExt = fieldTag.innerText;
    const value = parseFloat(fieldValueInTExt);
    return value;
}



function updateBalance(amount,isAdding){
    // const balanceTag = document.getElementById('balance-total');
    // const balanceInText = balanceTag.innerText;
    // const previousBalance = parseFloat(balanceInText);
    const previuosBalance = getInnerTextValue('balance-total')
    let newBalance;
    if(isAdding == true){
        newBalance = previousBalance + amount;
    }
    else{
       newBalance = previousBalance - amount;
    }
    
    document.getElementById('balance-total').innerText = newBalance;
}
document.getElementById('deposit-button').addEventListener('click',function(){
   const amount =  getinputValue('deposit-input');
    if(amount > 0){
        updateTotal('deposit-total',amount);
        updateBalance(amount,true)
    }


});


// handel withdraw

document.getElementById('withdraw-button').addEventListener('click',function(){
    const amount = getinputValue('withdraw-input');
    const balance = getInnerTextValue('balance-total');
    if(amount > 0 && amount <= balance){
        updateTotal('withdraw-total',amount);
        updateBalance(amount,false)
    }
})



