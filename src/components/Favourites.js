// Favourites.js
import React, { createContext, useContext } from 'react';
import { useReducer } from 'react';
import { ProductContext } from './Context';
// import FavouritesContext from './FavouritesContext';


const Favourites = () => {
    const [state, dispatch] = useContext(ProductContext)

    return (
        <>
        // Render list of favourite products
            <h1>Faviourate Page
                {state.favourite.map(i => { <li>{i.title}</li> })}
            </h1>
        </>
    )

};


export default Favourites;
