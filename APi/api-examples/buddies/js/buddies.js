const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => diplaybuddies(data))
}

loadBuddies();

const diplaybuddies = data =>{
  
    // console.log(data);
    const buddies = data.results;
    // console.log(buddies);
    const buddyDiv = document.getElementById('buddies')
    for(const buddy of buddies){
        console.log(buddy.name.first);
        const p = document.createElement('p');
        p.innerText =  ` Name :${buddy.name.title} ${buddy.name.first} ${buddy.name.last} 
        Email : ${buddy.email}`;
        buddyDiv.appendChild(p);
    }

}