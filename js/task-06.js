const input_value = document.querySelector("#validation-input");
const length = input_value.getAttribute("data-length");
 
const check_input = () => (input_value.value.length == length)? input_value.classList.add("valid"):input_value.classList.add("invalid");
input_value.addEventListener("focus", () => input_value.className = "");
input_value.addEventListener("blur", check_input);