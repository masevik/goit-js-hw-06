const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ListRef = document.querySelector('#ingredients');

// const addList = array => {
//   const markup = [];

//   array.map(element => {
//     const item = document.createElement('li');
//     item.textContent = element;
//     item.classList.add('item');

//     markup.push(item);
//   });

//   ListRef.append(...markup);
// };

// addList(ingredients);

const elements = ingredients.map(element => {
  const item = document.createElement('li');
  item.textContent = element;
  item.classList.add('item');
  return item;
});

ListRef.append(...elements);
