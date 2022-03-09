// display local storage cart




const displayLocal =()=>{
    const cart = getCart();
    for(const name in cart){
        displayProduct(name)
    }
}

const displayProduct = name =>{
    const ul = document.getElementById('products');
    const li = document.createElement('li');
    li.innerText = name;
    ul.appendChild(li)
    
}


const addItem = () =>{
    const nameField = document.getElementById('product-name');
    const name = nameField.value;
    if(!name ){
        return;
    }
    // display in ui 




   

    displayProduct(name)


    // add to localStorage

    addProductsToCart(name)



    nameField.value ='';
}


const getCart = () =>{
    const cart = localStorage.getItem('cart');
    let cartObject;
    if(cart){
            cartObject = JSON.parse(cart);
    }
    else{
        cartObject = {};
    }
    return cartObject;
}
displayLocal();


const addProductsToCart = name =>{
    const cart = getCart();
   if(cart[name]){
       cart[name] = cart[name]+1;
   }
   else{
       cart[name] = 1;
   }
    const cartStringify = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringify)
}



const placeOrder = ()=>{
    document.getElementById('products').textContent ='';
    localStorage.removeItem('cart');
}


