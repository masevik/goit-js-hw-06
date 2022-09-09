const categoriesRef = document.querySelectorAll('li.item');

const aboutCategory = categoriesRef => {
  console.log('Number of categories: ', categoriesRef.length);
  categoriesRef.forEach(category => {
    console.log('Category: ', category.firstElementChild.textContent);
    console.log('Elements: ', category.lastElementChild.children.length);
  });
};

aboutCategory(categoriesRef);
