var computer = {
    price : 29000,
    Storage : '156gb',
    processor : 'i5',
    color : 'black'
}

// puro object ta dkhar jnne

console.log(computer);

// object er property dekhar jnne { objectName.propertyName}

console.log(computer.processor);

var computerPrice = computer.price;
console.log(computerPrice);

// seting a object Property 

computer.price = 22000;
console.log(computer);

// different ways to set a value of an object property

computer.price = 22000;
computer["price"] = 23000;
var propertyName = "price";
computer[propertyName] = 24000;

console.log(computer);

computer.Storage = '256 gb';
console.log(computer)

computer.Storage = '1 tb';
console.log(computer)
