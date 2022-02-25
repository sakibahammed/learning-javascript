


const user = { id : 11, name : 'Gorib ami',job:'actor'};
const stringified = JSON.stringify(user);
// console.log(stringified);

// console.log(user);


const shop ={
    name : 'Alia store',
    address : 'Ranbir store',
    profit : 15000,
    products : ['laptop','mobile','pepsi'],
    owner : {
        name : 'ALia Vaat',
        profession : 'actor',
    },
    isExpensive : false
}
// convert to stirng
const shopStringified = JSON.stringify(shop);
console.log(shopStringified);
// convert to javascript

const converted = JSON.parse(shopStringified);
console.log(converted.owner.name);




