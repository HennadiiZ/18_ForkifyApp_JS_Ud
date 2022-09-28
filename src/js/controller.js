//import icons from '../img/icons.svg'; // Parcel 1
// import icons from 'url:../img/icons.svg'; // Parcel 2
//console.log(icons);
import 'core-js/stable';
import 'regenerator-runtime/runtime';
// import loadRecipe from './model';
import * as model from './model.js';
import recipeView from './views/recipeView'

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

const controlRecipies = async function() {
  try {
    const id = window.location.hash.slice(1);

    await model.loadRecipe(id);
    // const { recipe } = model.state;

    if (!id) return;

    recipeView.renderSpinner();

    recipeView.render(model.state.recipe);

  } catch (err) {
    alert(err);
  }
}



// ------ the same part 
//['hashchange', 'load'].forEach(ev => window.addEventListener(ev, controlRecipies));
window.addEventListener('hashchange', controlRecipies);
window.addEventListener('load', controlRecipies);
// ------ the same part 

// fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/:id`)
// https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886?key=<insert your key>
// https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886