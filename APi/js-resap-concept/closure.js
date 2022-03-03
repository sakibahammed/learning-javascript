/*
const bank = owner =>{
    balance = 0;
    return amount =>{
        balance +=  amount;
        return balance;

    }
}

*/


const bank = owner =>{
    balance = 0;
    return amount =>{
        balance +=  amount;
        return balance;

    }
}







const mofizBank = bank('Mofiz');
console.log( mofizBank(100));
console.log( mofizBank(300));
console.log( mofizBank(50));