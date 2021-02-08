import React, { Component } from 'react';
import './RecipeDetails.scss';


const RecipeDetails = (props) => {

    console.log(props.location.state);

    const { recipe } = props.location.state

    return (
        <section>
            <div>{recipe.title}</div>
            <ul>{
                recipe.ingredients
                    .map(ingredient =>
                        <li>{ingredient}</li>
                    )
            }  </ul>

            
        </section>
    );
};
export default RecipeDetails;