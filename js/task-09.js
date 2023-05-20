function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const widget = document.querySelector(".widget");
const text = document.querySelector(".color");
const btn = document.querySelector(".change-color");
const changeColor = (event) => {
  const color = getRandomHexColor();
  console.log(color);
  text.textContent = color;
  widget.style.backgroundColor = color;

}
btn.addEventListener("click", changeColor);