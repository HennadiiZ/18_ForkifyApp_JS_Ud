const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////


const showRecipe = async function() {
  try {

    const res = await fetch(
    //`https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886`
      `https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc971`
    )
    const data = await res.json();
    console.log(res, data);

    if(!res.ok) {
      throw new Error(`${res.message} (${res.status})`);
    }

    // let recipe = data.data.recipe;
    let { recipe } = data.data;
    recipe = {
      id: recipe.id,
      title: recipe.title,
      publisher: recipe.publisher,
      sourceUrl: recipe.source_url,
      image: recipe.image_url,
      servings: recipe.servings,
      cookingTime: recipe.cooking_time,
      ingredients: recipe.ingredients
    };
    console.log('recipe', recipe);

  } catch (err) {
    alert(err);
  }
}
showRecipe();

// fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/:id`)
// https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886?key=<insert your key>
// https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886