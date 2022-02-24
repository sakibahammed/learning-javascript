const numbers = [5,13,7,41,52,2,19];

const bignumbers = numbers.filter(number => number > 20);
// console.log(bignumbers);
const smallNumber = numbers.filter(number => number<10);
console.log(smallNumber);


// Note :  what is filter()
// filter() array er proti ta element er moddhe jeta condition fullfill korbe taader k array te rekhe seta k return korbe.

// .
// .
// .
// .
// . 
// note filter kore element er conditone er sth na mille empty array return korbe






const products = [

    {name : 'water bottole', price : 50, color : 'yellow'},
    {name : 'mobile', price : 15000, color : 'black'},
    {name : 'smartWatch', price : 3000, color : 'black'},
    {name : 'stickyNote', price : 30, color : 'pink'},
    {name : 'water glass', price : 3, color : 'white'}



];


const expensive = products.filter(product => product.price > 100);
// console.log(expensive);

const isBlack  = products.filter(product => product.color=='black');
console.log(isBlack);






// find() =====> find array er prothom e jei element k fullfill korbe sudhu sei element k return korbe


const whiteItme = products.find(product => product.color=='black');
console.log(whiteItme);

// filter array return kore and find element return kore,,,,,find element k naa pele undefined return kore... find alltime first e jei element k paabe taake return korbe.. 




