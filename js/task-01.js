const categories = document.querySelectorAll('.item');
console.log('Number of categories:', categories.length);

const menuItem = document.querySelector('.item');
categories.forEach(el => {
  console.log(`Category: ${el.firstElementChild.textContent}`);

  console.log(`Elements: ${el.lastElementChild.childElementCount}`);
});
