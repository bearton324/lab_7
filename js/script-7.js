const categoriesList = document.getElementById('categories');
const categoryItems = categoriesList.querySelectorAll('li.item');
console.log(`Кількість категорій: ${categoryItems.length}`);
categoryItems.forEach((categoryItem) => {
    console.log(`Категорія: ${categoryItem.querySelector('h2').textContent}`);
    console.log(`Кількість елементів: ${categoryItem.querySelectorAll('ul > li').length}`);
});