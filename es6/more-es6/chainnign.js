// declare variable based on the name of object property

const myObject = { x: 2, y:50,z:600 , a : 25,b:68};
const {x,y,b} = myObject;
// console.log(myObject.p?.q);


// destructiring er khetre object er property gula k e variable hesebe dhora hoi.


// destructuring array 

const [p,q] = [45,37,232,23,78,56,453];
// console.log(p,q);



const [best,faltu] = ['momtaz','porshi'];
console.log(best , faltu);


const {sky , color} = {sky : 'blue',soi:'mati',color:'red',money : 4500}

//chaining

const company = {
    name: "GP",
    ceo: { id: 1, name: "ajmol", food: "fuska" },
    web: {
      work: "website devlopment",
      employee: 22,
      framework: "react",
      tech: {
        first: "html",
        second: "css",
        third: "js",
      },
    },
  };

console.log(company?.web?.tech.third)
// console.log(company?.back?.tech.third)


// this is a test comment with healthy 