import React, { useEffect, useState } from 'react';
import './Recipe.scss';
import List from './List/List';
import WithListLoading from './WithListLoading/WithListLoading';

function Recipe() {
    const ListLoading = WithListLoading(List);
    const [appState, setAppState] = useState({
        loading: false,
        recipes: [],
    });

    useEffect(() => {
        setAppState({ loading: true });
        const apiUrl = `https://run.mocky.io/v3/8b1b172a-8091-4a14-98f7-92029d0e5bc8`;
        fetch(apiUrl)
            .then((res) => res.json())
            .then((recipes) => {
                setAppState({
                    loading: false,
                    recipes: recipes
                });
            });
    }, [setAppState]);

    return (
        <div className='Recipe'>
            <div className='container'>
                <h1>My Recipes</h1>
            </div>
            <div className='recipe-container'>
                <ListLoading isLoading={appState.loading} recipes={appState.recipes} />
            </div>
            {/* <footer>
                <div className='footer'>
                    Hello fostr.io
                </div>
            </footer> */}
        </div>
    );
}
export default Recipe;