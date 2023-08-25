import React from 'react'
import { useContext } from 'react';
// import Cart from "./Cart"
import { useCart, useCartDispatcher } from './Cart'
import { ProductContext } from './Context';


const CartPage = () => {
    const [state, dispatch] = useContext(ProductContext)

    const removeFromCart = productId => {
        dispatch({ type: 'REMOVE_FROM_CART', productId });
    };

    return (
        <div>Cart Page {console.log(state.cart)}
            Total Price = Rs.
            {/* {console.log(cart)} */}
            <ul height="400em" style={{ marginTop: "0.5em", alignItems: "baseline", marginBlock: "1em" }}>
                {state.cart.map(item => (
                    <li key={item.id}>
                        {item.title} - ${item.price}
                        <button onClick={(item) => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default CartPage