import React, { Component } from 'react';
import './RecipeDetails.scss';
import Header from './Header/Header';



const RecipeDetails = (props) => {

    console.log(props.location.state);

    const { recipe } = props.location.state

    return (
        <section className="Details">
            <div className="left">
                <Header />
                {/* TODO: Componetise ingredients */}
                <div className="ingredients">
                    <h3>Ingredients</h3>
                    <ul>
                        {recipe.ingredients
                            .map(ingredient =>
                                <li>{ingredient}</li>
                            )
                        }
                    </ul>
                </div>
                {/* TODO: Componetise directions */}
                <div className="directions">
                    {recipe.directions
                        .map(direction =>
                            <p>{direction}</p>
                        )
                    }
                </div>
                {/* TODO: Componetise the below and make use of props */}
                <div className="stats vcenter">
                    <div className="statValue">
                        <h6>PREP TIME</h6>
                        {/* TODO: Host below image locally */}
                        <img 
                            className="icon" 
                            src="https://image.flaticon.com/icons/svg/1240/1240809.svg" 
                            alt="please forget about this" 
                        />
                        <div className="value">
                            {recipe.prep_time_min}.
                        </div>
                    </div>
                    <div className="statValue">
                        <h6>COOK TIME</h6>
                        {/* TODO: Host below image locally */}
                        <img 
                            className="icon" 
                            src="https://image.flaticon.com/icons/svg/1298/1298462.svg" 
                            alt="please forget about this" 
                        />
                        <div className="value">
                            {recipe.cook_time_min}.
                        </div>
                    </div>
                    <div className="statValue">
                        <h6>SERVINGS</h6>
                        {/* TODO: Host below image locally */}
                        <img 
                            className="icon" 
                            src="https://image.flaticon.com/icons/svg/135/135622.svg" 
                            alt="please forget about this" 
                        />
                        <div className="value">
                            {recipe.servings}
                        </div>
                    </div>
                </div>
                {/* TODO: Componetise tags */}
                <div class="tags vcenter">
                    {/* TODO: Print tags */}
                </div>
            </div>
            <div className="right vcenter">
                <div className="heading">
                    <strong>{recipe.title}</strong>
                </div>
                <div className="author">
                    <h5>Posteb by:</h5>
                    <a
                        href={recipe.author.url}
                        target="_blank"
                    >
                        {recipe.author.name}
                    </a>
                </div>
            </div>
        </section>
    );
};
export default RecipeDetails;