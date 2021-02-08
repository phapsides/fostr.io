import React from 'react';
import './List.scss';
import { Link } from 'react-router-dom';

const List = (props) => {

    const { recipes } = props;

    if (!recipes || recipes.length === 0) return <p>No recipes, sorry</p>;

    return (
        <>
            <ul className="recipe-list">
                {recipes.map((recipe) => {
                    return (
                        <Link to={`/${recipe.title}`} className="recipe-title">
                            <li key={recipe.apiRef}>{recipe.title}</li>
                        </Link>
                    );
                })}
            </ul>
        </>
    );
};
export default List;