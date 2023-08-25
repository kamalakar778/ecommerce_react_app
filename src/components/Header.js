import React, { useContext, useReducer } from 'react'
import { NavLink } from 'react-router-dom'
// import CartBtn from './buttons/CartBtn'
import Login from './Signin'
import Signup from './Signup'
import Favourites from './Signup'
import { Cart } from './archive/Context1'
import { ProductContext } from './Context'
// import { store } from './Product'
// import Counter from '../components/Reducer';
// import { useCart } from './Cart'

const Header = () => {
    // const [cart, setCart] = useContext(Cart);
    const [state, dispatch] = useContext(ProductContext)
    const CategoriesList = []
    state.products.map(product => { CategoriesList.push(product.category) })
    const Category = Array.from(new Set(CategoriesList))
    const handleCategory = (index) => {
        fetch(`https://fakestoreapi.com/products/category/${Category[index]}`)
            .then(res => res.json())
            .then(json => console.log(json))
    }


    // const item = useCart();
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ padding: 0, margin: 0 }}>
                <div className="container-fluid py-2">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" style={{ fontSize: 30, marginLeft: '10rem' }} aria-current="page" to="/"><span className='shop' style={{ color: "rgb(18, 204, 224)" }}>SHOP</span>LANE</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div class="dropdown">


                        <button class="btn btn-outline-dark dropdown-toggle" style={{ display: "flex", float: "left", width: "150px", height: "60px", fontSize: 14, marginRight: '5rem', display: 'inline-block', listStyleType: "none", alignItems: 'start' }} type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span style={{ width: "50%" }}>
                                <svg xmlns="http://www.w3.org/2000/svg" style={{ marginRight: "1em" }} width="25" height="25" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                                </svg>
                            </span>
                            <span style={{ width: "50%", overflowWrap: "normal", textAlign: "right" }}>
                                Login <br></br>and Signup

                            </span>

                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" >
                            <a className="dropdown-item" href="/Sign-In">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z" />
                                    <path fill-rule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z" />
                                </svg>&nbsp;Login</a>
                            <a className="dropdown-item" href="/Sign-Up">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-layout-text-window" viewBox="0 0 16 16">
                                    <path d="M3 6.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z" />
                                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v1H1V2a1 1 0 0 1 1-1h12zm1 3v10a1 1 0 0 1-1 1h-2V4h3zm-4 0v11H2a1 1 0 0 1-1-1V4h10z" />
                                </svg>&nbsp;Sign Up</a>
                            <a className="dropdown-item" href="/cart">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                                </svg>&nbsp;Cart</a>
                            <a className="dropdown-item" href="/favourites">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                </svg>&nbsp;Favourites {state.favourite.length}</a>
                        </div>
                    </div>
                    <div>
                        <a style={{ marginRight: '25rem', fontSize: "20px", textDecoration: "none" }} href="/cart">
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                            {state.cart.length}
                        </a>

                    </div>
                </div>
            </nav >
            <div>
                <hr></hr>
                <div style={{ listStyleType: "none", alignItems: "center", display: "inline-flex ", paddingRight: "10em", marginTop: "-1em", fontSize: "16px" }}>
                    <a id="All" href="/" style={{ textDecoration: "none", color: "black", fontWeight: "bold", paddingLeft: "10em" }}>All</a>
                    <a id="id" href="/" style={{ textDecoration: "none", color: "black", fontWeight: "bold", paddingLeft: "10em" }}>{Category[0]}</a>
                    <a href='/' style={{ textDecoration: "none", color: "black", fontWeight: "bold", paddingLeft: "10em" }}>{Category[1]}</a>
                    <a href='/' style={{ textDecoration: "none", color: "black", fontWeight: "bold", paddingLeft: "10em" }}>{Category[3]}</a>
                    <a href='/' style={{ textDecoration: "none", color: "black", fontWeight: "bold", paddingLeft: "10em" }}>{Category[4]}</a>
                    <div style={{ textDecoration: "none", color: "black", fontWeight: "bold", paddingLeft: "10em" }}></div>
                </div >
                <hr></hr>
            </div>
        </>
    )
}

export default Header
