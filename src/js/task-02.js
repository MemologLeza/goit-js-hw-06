const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector(`ul#ingredients`);
const ingredientEl = ingredients.map( (arg) => {
  const ListItem = document.createElement(`li`);
  ListItem.textContent = arg;
  ListItem.classList.add (`item`);
  return ListItem;
});
ingredientsList.append(...ingredientEl);

