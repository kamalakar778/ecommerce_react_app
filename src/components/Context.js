import React, { createContext, useContext, useEffect, useReducer } from 'react';
import Favourites from './Favourites';
import { NavLink } from 'react-bootstrap';
import Header from './Header';
import { useCartDispatcher } from './Cart';
import { useFaviourateDispatcher } from "./Favourites"
import CartPage from './CartPage';
import { Cart } from './archive/Context1';
// import FavouritesContext from './FavouritesContext';

const initialState = {
    products: [],
    cart: [],
    favourite: [],
};

const productReducer = (state, action) => {
    console.log("state.favourite", state.favourite.length)
    console.log("state.cart", state.cart.length)

    switch (action.type) {
        case 'SET_PRODUCTS':
            return { ...state, products: action.products };
        case 'ADD_TO_CART':
            return { ...state, cart: [...state.cart, action.product] };
        case 'REMOVE_FROM_CART':
            return { ...state, cart: state.cart.filter(item => item.id !== action.productId) };
        case 'ADD_TO_FAVOURITES':
            return { ...state, favourite: [...state.favourite, action.product] };
        case 'REMOVE_FROM_FAVOURITES':
            return { ...state, favourite: state.favourite.filter(item => item.id !== action.productId) };
        default:
            return state;
    }
};

export const ProductContext = createContext();

const Context = ({ children }) => {

    // const dispatch1 = useCartDispatcher();

    const [state, dispatch] = useReducer(productReducer, initialState);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                dispatch({ type: 'SET_PRODUCTS', products: data });
            });
    }, []);

    return (
        <>
            <ProductContext.Provider value={[state, dispatch]}>
                {children}
            </ProductContext.Provider>
        </>
    );
}

export default Context;
