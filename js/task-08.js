const form = document.querySelector(".login-form");

const submitForm = (event) => {
    event.preventDefault();
    const formElements =  event.currentTarget.elements;
    console.log(formElements.email.value);
   const input_email = formElements.email.value;
const input_password = formElements.password.value;
    if (!input_email || !input_password){
     alert("please fill out the form") ;  
    }
    else {

    const input_date = {
        input_email,
        input_password


            }
            console.log(input_date);
            event.currentTarget.reset();
         };
};

form.addEventListener("submit", submitForm);
