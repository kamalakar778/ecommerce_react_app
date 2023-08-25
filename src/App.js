import './App.css';
import Header from './components/Header';
import Footer from './components/Footer/Footer'
// import Products from './components/ProductDetail'
import Signup from './components/Signup';
import Signin from './components/Signin';
// import ProductDetail from './components/ProductDetail';
import Favourites from './components/Favourites'
import Reducers from "./components/Reducers"
import ProductsPage from "./components/ProductsPage"
import CartPage from "./components/CartPage"
import {
    BrowserRouter as Router, Redirect, Route, Switch, useLocation
} from "react-router-dom";
import Home from './components/Home';
import React, { createContext, useState, useEffect, useReducer } from 'react';

function App() {

    return (
        <>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path='/Sign-Up' component={Signup} />
                <Route path='/Sign-In' component={Signin} />
                {/* <Route exact path="/products" component={Products} /> */}
                <Route path="/ProductsPage" component={ProductsPage} />
                {/* <Route exact path="/ProductDetail" component={ProductDetail} /> */}
                <Route exact path="/cart" component={CartPage} />
                <Route exact path="/favourites" component={Favourites} />
                <Redirect to="/" />
            </Switch>
        </>
    );
}


export default App;
