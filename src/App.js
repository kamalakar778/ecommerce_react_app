import logo from './logo.svg';
import './App.css';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer'
import Products from './components/Products'
import Signup from './components/Signup';
import Signin from './components/Signin';
import Favourites from './components/Favourites'
import {
  BrowserRouter as Router, Redirect, Route, Switch, useLocation
} from "react-router-dom";
import Home from './components/Home';

// import About from './components/About'
// import Contact from './components/Contact'
import Cart from './components/Cart';
import React, { createContext, useState, useEffect } from 'react';
// import ProductDetail from './components/ProductDetail';
// import Checkout from './components/Checkout'

export const store = createContext();

function App() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const fakeStoreProducts = await response.json();
      // console.log(products)
      setData(fakeStoreProducts)
      const categoryResponse = await fetch("https://fakestoreapi.com/category");
      const category = await categoryResponse.json();
      console.log(category)
      setCategory(category)
    };
    fetchProducts();
  }, []);
  return (
    <>

      <store.Provider value={[data, setData]}>
        <Switch>

          <Route exact path="/" component={Home} />
          <Route path='/Sign-Up' component={Signup} />
          <Route path='/Sign-In' component={Signin} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/favourites" component={Favourites} />
          {/* <Route exact path="/products/:id" component={ProductDetail} /> */}
          {/* <Route exact path="/checkout" component={Checkout} /> */}
          {/* <Route exact path="/about" component={About} /> */}
          {/* <Route exact path="/contact" component={Contact} /> */}
          <Redirect to="/" />
        </Switch>
      </store.Provider>
    </>
  );
}


export default App;
