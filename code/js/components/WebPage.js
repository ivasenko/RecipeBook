import React from 'react';
import RecipesList from '../containers/recipes-list';
import Details from '../containers/details';
require('../../scss/style.scss');


const WebPage = () => (
    <div className="web-page">
        <RecipesList />
        <Details />
    </div>
    );

export default WebPage;