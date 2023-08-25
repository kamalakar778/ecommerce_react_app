import React, { useContext, useState, useReducer } from 'react'
import Header from './Header'
// import Products from './ProductDetail'
import Footer from './Footer/Footer'
import { store } from './archive/App1'
// import { ProductDetail } from "../components/ProductDetail"
import ProductsPage from './ProductsPage'


const Home = () => {

    // const [data, setData] = useContext(store)
    // const productsData = data.filter(item => { return item })
    // // const x = new Set([productsData.map(item => { item.forEach(i => { copy.push(i.category) }) })])
    // let y = [];
    // let x = [];
    // let z = [];
    // productsData.map(item => { x.push(item.category) });

    // y = new Set([...x]);

    return (
        <>
            <Header />
            <ProductsPage />
            {/* <div style={{ fontSize: '50px' }}>
                <Counter />
                {productsData.map(item => {
                    return <>
                        <ProductsPage />
                        <Products ProductDetail={item} item={item} key={item.category} />
                    </>
                })}
            </div > */}
            <Footer />
        </>
    )
}

export default Home