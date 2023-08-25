import React, { createContext, useContext, useEffect, useReducer } from 'react';
import Favourites from './Favourites';
import { NavLink } from 'react-bootstrap';
import Header from './Header';
import { useCartDispatcher } from './Cart';
import { useFaviourateDispatcher } from "./Favourites"
import CartPage from './CartPage';
import { Cart } from './archive/Context1';
import { ProductContext } from './Context';
// import FavouritesContext from './FavouritesContext';


const ProductsPage = ({ children }) => {
    const [state, dispatch] = useContext(ProductContext)
    // const dispatch1 = useCartDispatcher();

    const addToCart = product => {
        dispatch({ type: 'ADD_TO_CART', product });
    };

    const removeFromCart = productId => {
        dispatch({ type: 'REMOVE_FROM_CART', productId });
    };

    const addToFavourate = (product) => {
        dispatch({ type: 'ADD_TO_FAVOURITES', product });
    };

    const removeFromFavourite = productId => {
        dispatch({ type: 'REMOVE_FROM_CART', productId });
    };

    return (
        <>
            {/* <Header /> */}
            {/* <CartPage /> */}
            <div>
                Cart Page
                <ul height="400em" style={{ marginTop: "0.5em", alignItems: "baseline", marginBlock: "1em" }}>
                    {state.cart.map(item => (
                        <li >
                            {item.title} - ${item.price}
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                Favourites Page
                <ul height="400em" style={{ marginTop: "0.5em", alignItems: "baseline", marginBlock: "1em" }}>
                    {state.favourite.map(item => (
                        <li >
                            {item.title} - ${item.price}
                            <button onClick={() => removeFromFavourite(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div >
                <ul height="400em" style={{ marginTop: "0.5em", alignItems: "baseline", marginBlock: "1em" }}>
                    {state.products.map(product => (
                        <li className={"d-inline-flex p-2"} style={{ listStyleType: "none", display: "inline-block" }} key={product.id}>

                            <div className="card" style={{ width: "18rem" }} key={product.id}>
                                <button style={{ border: "none", marginLeft: "15em" }} class="btn bg-transparent" onClick={() => addToFavourate(product)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                    </svg>
                                </button>
                                <img src={product.image} class="card-img-top" width="200em" height="300em" alt="..."></img>
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p class="card-price">${product.price}</p>
                                    <button class="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>

                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}

export default ProductsPage;
