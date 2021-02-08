import React, { Component } from 'react';
import './RecipeDetails.scss';


const RecipeDetails = (props) => {

    const { recipe } = props;

    console.log(props.location.state);

    return (
        <div className="Details">
            <strong>{recipe.title}</strong>
        </div>
    );
};
export default RecipeDetails;