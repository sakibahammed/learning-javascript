document.getElementById('login-button').addEventListener('click',function(){


    //geting user email
    const userEmailField = document.getElementById('user-email');
    const userEMail = userEmailField.value;



    //get user password

    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;
    
    // check email and password

    if(userEMail == 'sakuu@gmail.com' && password=='saku'){
        window.location.href = 'banking.html';
    }
     
})


