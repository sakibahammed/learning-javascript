const friends = ['tom hanks' , 'tom cruise' , 'tom braddy','tom solaiman'];

// note : map korle ekta array pabo


const frndsLength = friends.map(friend => friend.length);
// console.log(frndsLength);

const products = [

    {name : 'water bottole', price : 50, color : 'yellow'},
    {name : 'mobile', price : 15000, color : 'black'},
    {name : 'smartWatch', price : 3000, color : 'black'},
    {name : 'stickyNote', price : 30, color : 'pink'},
    {name : 'water glass', price : 3, color : 'white'}



]


const productsName = products.map(product => product.name);
const productsPrice = products.map(product => product.price);

// console.log(productsName);
// console.log(productsPrice);

// products.map(product => console.log(product));



// for each ekta array er proti ta element er jnne ekta function k call kore kintu kichu return kore na..

products.forEach(product => console.log(product));


// map er kaaj ki ?

map er kaj holo : 
 1.  proti ta element er jnne loop