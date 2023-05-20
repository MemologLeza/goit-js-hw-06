const categories = document.querySelector("#categories");
const list = categories.querySelectorAll(".item");
console.log(`Number of categories: ${list.length}`);
list.forEach((elem) => {
    const elemTitle = elem.querySelector("h2").textContent;
    const listLength = elem.querySelectorAll("li").length;
    console.log(`Category: ${elemTitle}`);
    console.log(`Elements: ${listLength}`);
});