/* 

why we need to use class ? 

==> ek e dhoroner onk gula object toiri korar jonne class use kore hoi


===> class er vitore kono object er property gula access korar jonne this use kora hoi.



*/


class Support {
    name;
    designation = 'support web Dev';
    address = 'bd';
    constructor(name,address){
        this.name = name;
        this.address = address;
    }
    startSession(){ // note class er under e function likhte hole function word ta use kora jbe na
        console.log(this.name,'start a support session');
    }

};

const amir = new Support('Amir khan','China');
const salman = new Support('Salman khan','Dhaka');
// console.log(amir);
// console.log(salman);


amir.startSession();
salman.startSession();
