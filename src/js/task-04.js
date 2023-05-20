const counterValue = document.querySelector("#value");
let value = 0;
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

function updateValue() {
    counterValue.textContent = value;
}

decrementBtn.addEventListener("click", ()=> {
    value -=1;
    updateValue();
});
incrementBtn.addEventListener("click", ()=>{
    value +=1;
    updateValue();
});