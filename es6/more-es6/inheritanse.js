





class TeamMember{
    name;
    designation = 'support web Dev';
    address = 'bd';
    constructor(name,address){
        this.name = name;
        this.address = address;
    }

}










class Support extends TeamMember{
    groupSupportTime;
    constructor(name,address, time){
        super(name,address);
        this.groupSupportTime = time;
    }
    startSession(){
        // console.log(this.name,'start a support session');
    }

};



class StudentCare extends TeamMember{
    
    buidARoutine(){
        // console.log(this.name , 'Build a routine for',Student)
    }
}


class neptuneDev extends TeamMember{
    codeEditor;
    constructor(name,address,editor){
        super(name , address);
        this.codeEditor = editor;
    }
    releaseApp(version){
        console.log(this.name,'release app for a routine for',version);
    }
}

const amir = new Support('Amir khan','China',11);
const salman = new Support('Salman khan','Dhaka',4);
console.log(amir);
// console.log(salman);


amir.startSession();
salman.startSession();





const alia = new StudentCare('Alia vaat' , 'Mumbai');
// console.log(alia);


const ash = new neptuneDev('ash','Dhaka','vs code , swift');
ash.releaseApp(4.5);
// console.log(ash);