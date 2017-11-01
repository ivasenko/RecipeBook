import {combineReducers} from 'redux';
import RecipesReducer from './recipe';
import RecipeActive from './recipe-active';

const allReducers = combineReducers({
    recipes: RecipesReducer,
    activeR: RecipeActive

});

export default allReducers;