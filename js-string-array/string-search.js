// searching string


const products = [
    'Dell hardCore i29 200gb laptop',
    'iphone 1tb camera flashlight phone',
    'yellow laptop with black camera',
    '1x59 lenovo commmercial yoga Laptop',
    'lg supernove laptop',
    'htc komdami Phone',
    'purple color phone with Laptop'
];


const searching = 'dell';

// indexOf() => prothom matching item k pawa jaaai


const output = [];

for(const product of products){
    if(product.toLowerCase().indexOf(searching.toLowerCase) != -1){
        output.push(product);
    }
}


console.log(output)


