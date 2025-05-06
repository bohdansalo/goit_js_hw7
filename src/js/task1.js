const categoriList = document.querySelectorAll("#categories .item");

categoriList.forEach((category) => {
  const titles = category.querySelector("h2").textContent;
  const elementsCount = category.querySelectorAll("ul li");

  console.log(`список ${categoriList.length} категорій`);
  console.log(`Категорія ${titles.length}`);
  console.log(`К-ть елементів ${elementsCount.length}`);
});
