document.getElementById('deposit-button').addEventListener('click',function(){

    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;

    const depositTotal = document.getElementById('deposit-total');

    const perviousDepositAMount = depositTotal.innerText;
    const newDepositTotal = parseFloat(perviousDepositAMount) + parseFloat(depositAmount);
    depositTotal.innerText = newDepositTotal;


    //update balance

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal+newDepositTotal;
    balanceTotal.innerText = newBalanceTotal;

    //clear the deposti input field
    depositInput.value = '';
});


//handel withdraw event handeller;

document.getElementById('withdraw-button').addEventListener('click',function(){
   const withdrawInput = document.getElementById('withdraw-input');
   const withdrawAmountText = withdrawInput.value;
//    console.log(withdrawAmountText);
const newWIthdrawAmount = parseFloat(withdrawAmountText);

// set withdrawtotal 

const withdrawtotal =document.getElementById('withdraw-total');
const previousWithdrawText = withdrawtotal.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawText);

const newWithdrawTotal = previousWithdrawTotal + newWIthdrawAmount;
withdrawtotal.innerText = newWithdrawTotal;



//update balance 

const balanceTotal = document.getElementById('balance-total');
const previousBalanceText = balanceTotal.innerText;
const previousBalanceTotal = parseFloat(previousBalanceText);

const newBalaceTotal = previousBalanceTotal - newWIthdrawAmount;

balanceTotal.innerText = newBalaceTotal;





//clear withdraw 

withdrawInput.value = '';
})
