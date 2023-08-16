import React, { useContext, useState } from 'react'
import Header from './Header'
import Products from './Products'
import Footer from './Footer'
import { store } from '../App'

const Home = () => {
    const [data, setData] = useContext(store)
    const productsData = data.filter(item => { return item })
    // const x = new Set([productsData.map(item => { item.forEach(i => { copy.push(i.category) }) })])
    let y = [];
    let x = [];
    let z = [];
    productsData.map(item => { x.push(item.category) });
    z = productsData.map(item => { if (item.category === "men's clothing") { z.push(item) } });
    console.log("zzzzzzz", z)
    y = new Set([...x]);

    return (
        <>
            <Header />
            <div>
                <hr></hr>
                <div style={{ listStyleType: "none", alignItems: "center", display: "inline-flex ", paddingRight: "10em" }}>
                    <a href="/" style={{ textDecoration: "none", color: "black", fontWeight: "bold", paddingLeft: "10em" }}>All</a>
                    <a href='#' style={{ textDecoration: "none", color: "black", fontWeight: "bold", paddingLeft: "10em" }}>Men's clothing</a>
                    <a href='#' style={{ textDecoration: "none", color: "black", fontWeight: "bold", paddingLeft: "10em" }}>Women's clothing</a>
                    <a href='#' style={{ textDecoration: "none", color: "black", fontWeight: "bold", paddingLeft: "10em" }}>Electronics</a>
                    <div style={{ textDecoration: "none", color: "black", fontWeight: "bold", paddingLeft: "10em" }}></div>
                </div>
                <hr></hr>
            </div>
            <div style={{ fontSize: '50px' }}>
                {/* <Counter /> */}
                {productsData.map(item => {
                    return <>
                        <Products item={item} key={item.category} />
                    </>
                })}
            </div >
            <Footer />
        </>
    )
}

export default Home