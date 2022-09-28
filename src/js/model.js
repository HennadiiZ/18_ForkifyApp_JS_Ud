import { async } from 'regenerator-runtime';

export const state = {
  recipe: {}
};

export const loadRecipe = async function (id) {
    try {
        const res = await fetch(
            //`https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886`
            //`https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc971`
            `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
           );
           const data = await res.json();
           //console.log(res, data);
       
           if(!res.ok) {
             throw new Error(`${res.message} (${res.status})`);
           }
       
           // let recipe = data.data.recipe;
           const { recipe } = data.data;
           state.recipe = {
             id: recipe.id,
             title: recipe.title,
             publisher: recipe.publisher,
             sourceUrl: recipe.source_url,
             image: recipe.image_url,
             servings: recipe.servings,
             cookingTime: recipe.cooking_time,
             ingredients: recipe.ingredients
           };
           // console.log('recipe', state.recipe);
    } catch (err) {
      alert(err.message);
    }

};