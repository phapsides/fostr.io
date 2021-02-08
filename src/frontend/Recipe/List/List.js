import React from 'react';

const List = (props) => {

    const { recipes } = props;

    if (!recipes || recipes.length === 0) return <p>No recipes, sorry</p>;

    return (
        <>
            <h2 className='list-head'>Available recipes</h2>
            <ul className="recipe-list">
                {recipes.map((recipe) => {
                    return (
                        <li key={recipe.id}>
                            <span className='recipe-title'>{recipe.title}</span>
                        </li>
                    );
                })}
            </ul>
        </>
    );
};
export default List;