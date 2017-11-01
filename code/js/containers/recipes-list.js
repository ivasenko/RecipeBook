import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectRecipe} from "../actions/index";


class RecipesList extends Component{
    showList(){
        return this.props.recipes.map((recipe) => {
            return (
                <li className="recipe-list-item" onClick={() => this.props.selectRecipe(recipe)} key={recipe.id}>{recipe.name}</li>
            );
        });
    }
    render(){
        return(
            <div className="wrapper-recipe-list">
                <h1 className="logo">Кухня</h1>
                <h2 className="recipe-list-heading">Рецепты:</h2>
                <ul>
                    {this.showList()}
                </ul>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return{
        recipes: state.recipes
    };
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({selectRecipe: selectRecipe}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(RecipesList);
