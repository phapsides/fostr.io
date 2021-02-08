import React, { Component } from 'react';
import './Details.scss';
import Header from './Header/Header';

export default class Details extends Component {
    render() {
        return (
            <div className="Details">
                <div className="left">
                    <Header />
                    <div className="ingredients">
                        <h3>Ingredients</h3>
                        <ul>
                            <li>1 1/2 tablespoons vegetable oil</li>
                            <li>1 small onion, diced</li>
                            <li>1 teaspoon minced fresh ginger root</li>
                            <li>4 cloves garlic, minced</li>
                            <li>2 potatoes, cubed</li>
                            <li>4 carrots, cubed</li>
                            <li>1 fresh jalapeno pepper, seeded and sliced</li>
                            <li>3 tablespoons ground unsalted cashews</li>
                            <li>1 (4 ounce) can tomato sauce</li>
                            <li>2 teaspoons salt</li>
                            <li>1 1/2 tablespoons curry powder</li>
                            <li>1 cup frozen green peas</li>
                            <li>1/2 green bell pepper, chopped</li>
                            <li>1/2 red bell pepper, chopped</li>
                            <li>1 cup heavy cream</li>
                            <li>1 bunch fresh cilantro for garnish</li>
                        </ul>
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
                        <strong>Vegetarian <br /> Korma</strong>
                    </div>
                </div>
            </div>
        );
    }
}