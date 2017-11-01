export const selectRecipe = (recipe) => {
    console.log("now is selected " + recipe.name);
    return{
        type: "RECIPE_SELECTED",
        payload: recipe
    }
};