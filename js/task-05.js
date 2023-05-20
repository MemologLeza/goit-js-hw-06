const name_input = document.querySelector("#name-input");
const name_output = document.querySelector("#name-output");

name_input.addEventListener("input", (value) => 
    name_output.textContent = !value.currentTarget.value ?"Anonymous":value.currentTarget.value
    
);