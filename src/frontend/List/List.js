import React from 'react';

const List = (props) => {
    const { recipies } = props;
    if (!recipies || recipies.length === 0) return <p>No recipies, sorry</p>;
    return (
        <ul>
            <h2 className='list-head'>Available Recipies</h2>
            {recipies.map((recipie) => {
                return (
                    <li key={recipie.id} className='list'>
                        <span className='recipie-text'>{recipie.name} </span>
                        <span className='recipie-description'>{recipie.description}</span>
                    </li>
                );
            })}
        </ul>
    );
};
export default List;