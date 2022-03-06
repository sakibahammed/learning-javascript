console.log(111);
console.log(222);
console.log(333);

// setTimeout(()=>{
//     console.log('hello world')
// },6000)



fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json)) // fetch asynchronus function
console.log(444);
console.log(555);
console.log(666);




