function megaFriends(friends){
    if(Array.isArray(friends)==false){
        return 'please provide an array of strings';
    }
    let mega  =  friends[0];

    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }


    }
    return mega;


}

const friends = ['kutub','lion','sahmon','shamol','sabbir'];
const myBigBudies =  megaFriends(friends);
// console.log(myBigBudies);

console.log(1+2);


if(friends.indexOf('fox')!=-1){
    // console.log('lion exist');A
}

if(friends.includes('lion')){
    // console.log('liodn exists using includes');
}

else{
    console.log('fox dosent exist');
}

// concat 

const first = [1,2,3,4];
const second = [4,5,6,7];

const combined = first.concat(second);
console.log(combined);