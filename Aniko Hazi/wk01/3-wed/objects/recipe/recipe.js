

var recipe = {
  title: 'cake',
  servings: 10,
  ingredients: ["eggs", "flour", "frosting", "butter"]
}


console.log(recipe.title);
console.log("Serves:" + recipe.servings);

var count = recipe.ingredients.length

for(i=0; i< count; i++){
console.log(recipe.ingredients[i]);
}


// instead of for loop:
// recipe.ingredients.join('\n');
//
// joins array into a string, with a line break at the end
