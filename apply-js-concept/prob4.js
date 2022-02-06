function oddFriend(name) {
   
    for(let  i =0;i<name.length;i++){
        let element = name[i];

        if(typeof element != 'string'){
            return "Enter string value"
        }
        else if(element.length%2 !=0){
        
            return element;
        }
    }

    
  }
  const friendNames = ['lkknkn','sakib','rer'];
  const result = oddFriend(friendNames);
  console.log(result);



  function compare(a, b) {
    if (a == b) {
      return true;
    } else {
      return false;
    }
  }
  const result = compare(15, "15");
  console.log(result);
  

  function compare(a, b) {
    if (a.toString() === b) {
     return true;
    } else {
     return false;
    }
   }
   
   const result = compare(25, 25);
   console.log(result);

   console.log("123" + 123);
   