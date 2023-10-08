let email = document.forms['form']['email'];
let text= document.forms['form']['text'];

let email_error= document.getElementById('email_error');
let text_error = document.getElementById('text_error');

email.addEventListener('input', email_Verify);
text.addEventListener('input', text_Verify);


function email_Verify (){

    if (email.value.length >=6 ){
        email.style.border= '1px solid silver';
        email_error.style.display = 'none';
        return true;
    }
}

function text_Verify (){
    if (text.value.length >=6 ){
        text.style.border = '1px solid silver';
        text_error.style.display = 'none';
        return true;
        
    }

}
function validated (){
    if (email.value.length <=6 ){
        email.style.border = '1px solid red';
        email_error.style.display = 'display';
        email.focus();
        return false;
    }
    if (text.value.length <=6 ){
        text.style.border = '1px solid red';
        text_error.style.display = 'display';
        text.focus();
        return false;

    }

}

  