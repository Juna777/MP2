function login(){
    let email =document.getElementById("email").value;
    let password =document.getElementById("password").value;

    let email_error = document.getElementById('email_error');
    let password_error = document.getElementById('password_error');
  
    

    function email_Verify(){
        if(email.value.length >= 8){
            email.style.border = '1px solid silver';
            email_error.style.display = 'none';
        }
    }
    
    function password_Verify(){
        if(password.value.length >= 8){
            password.style.border = '1px solid silver';
            password_error.style.display = 'none';
        }
    }
    
    function validated(){
    
        if(email.value.length > 8){
       
            email.style.border = '1px solid red';
            email_error.style.display = 'display';
            email.focus();
            return false;
            
        }
        if(password.value.length > 8){
            password.style.border = '1px solid red';
            password_error.style.display = 'display';
            password.focus();
            return false;
          }
        }
           
}


    
      

    
