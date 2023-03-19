const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsRefs = document.querySelector('#ingredients');

const ingredientsList = ingredients.map(ingredient => {
  const ingredientEl = document.createElement('li');
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add('item');
  return ingredientEl;
});

ingredientsRefs.append(...ingredientsList);
