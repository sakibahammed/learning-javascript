// input

function getInputValue (inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);


    //clearing input field
    inputField.value = '';
    return amountValue;
}
//update filed
function updateTotalField(totalFieldId,amount){
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    
    const previousTotal = parseFloat(totalText);
    
    totalElement.innerText = previousTotal + amount;
}


function getCurrentBalance(){
    const balanceTotal =  document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;

    const previousBalanceTotal = parseFloat(balanceTotalText);

    return previousBalanceTotal;
   
}

// update balance

function updateBalance(depositAmount,isAdd){
    const balanceTotal =  document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;

    // const previousBalanceTotalTExt = parseFloat(balanceTotalText);
    const previousBalanceTotal = getCurrentBalance();


    if(isAdd ==true){
        balanceTotal.innerText = previousBalanceTotal+depositAmount;
    }
    else{
        balanceTotal.innerText = previousBalanceTotal - depositAmount;
    }

}

document.getElementById('deposit-button').addEventListener('click',function(){
    
    // here i use function

    // const inputField = document.getElementById('deposit-input');
    // const depositAmountText = inputField.value;
    // const depositAmount = parseFloat(depositAmountText);

    
    const depositAmount = getInputValue('deposit-input');
    if(depositAmount>0){
        updateTotalField('deposit-total',depositAmount);
        updateBalance(depositAmount,true);
    }
    
    //get and update deposit total

    // const depositTotal = document.getElementById('deposit-total');
    // const depositTotalText = depositTotal.innerText;
    
    // const previousDepositTotal = parseFloat(depositTotalText);
    
    // depositTotal.innerText = depositAmount + previousDepositTotal;


    //update balance 

    // const balanceTotal =  document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;

    // const previousBalanceTotalTExt = parseFloat(balanceTotalText);

    // balanceTotal.innerText = previousBalanceTotalTExt + depositAmount;
    



    


    // //clearing input field
    // inputField.value = '';
    
});

//handel withdraw event


document.getElementById('withdraw-button').addEventListener('click',function(){
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);


    const withdrawAmount = getInputValue('withdraw-input') 
    const currentBalance = getCurrentBalance();
    if(withdrawAmount>0 && withdrawAmount<currentBalance){
        updateTotalField('withdraw-total',withdrawAmount);
        updateBalance(withdrawAmount,false);
    }
    if(withdrawAmount>currentBalance){
        alert('You can not withdraw more that what u have in your accont')
    }

    // i use function here

    //get and update current withdraw

    // const withdrawTotal =  document.getElementById('withdraw-total');
    // const withdrawTotalText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(withdrawTotalText);

    // withdrawTotal.innerText = withdrawAmount + previousWithdrawTotal;


  

    //update balnace after withdraw

    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);

    // balanceTotal.innerText = previousBalanceTotal - withdrawAmount;

    



    //clear withdraw input field

    // withdrawInput.value = ''


})