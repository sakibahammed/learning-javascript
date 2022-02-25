function loadData(){

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then(res => res.json())
.then(data => console.log(data))
}


document.getElementById('post').addEventListener('click',function(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => console.log(data))
});





function loadUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => displayUser(data))
}

function displayUser (data){
    console.log(data);

    const ul = document.getElementById('users');
    
    for(const user of data){
        console.log(user.name);
        const li = document.createElement('li');
        li.innerText = `name : ${user.name} 
                        email :  ${user.email}`;
        ul.appendChild(li);
    }
}





function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(res => res.json())
    .then(data  => console.log(data))
}