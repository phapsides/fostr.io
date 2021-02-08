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
                <div className="ingredients">
                    <h3>Ingredients</h3>
                    <ul>{
                        recipe.ingredients
                            .map(ingredient =>
                                <li>{ingredient}</li>
                            )
                    }  </ul>
                </div>
                <div className="stats vcenter">
                    <div className="statValue">
                        <h6>PREP TIME</h6>
                        <img className="icon" src="https://image.flaticon.com/icons/svg/1240/1240809.svg" alt="please forget about this" />
                        <div className="value">762 Kcal</div>
                    </div>
                    <div className="statValue">
                        <h6>COOK TIME</h6>
                        <img className="icon" src="https://image.flaticon.com/icons/svg/1298/1298462.svg" alt="please forget about this" />
                        <div className="value">33 min.</div>
                    </div>
                    <div className="statValue">
                        <h6>SERVINGS</h6>
                        <img className="icon" src="https://image.flaticon.com/icons/svg/135/135622.svg" alt="please forget about this" />
                        <div className="value">4 SERVINGS</div>
                    </div>
                </div>
            </div>
            <div className="right vcenter">
                <div className="heading">
                    <strong>{recipe.title}</strong>
                </div>
            </div>
        </section>
    );
};
export default RecipeDetails;