const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const ingredientList = document.querySelector("#ingredients");

const ingratiendItems = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  return li;
});

ingredientList.append(...ingratiendItems);
console.log(`Інградієнти: ${ingredients}`);
