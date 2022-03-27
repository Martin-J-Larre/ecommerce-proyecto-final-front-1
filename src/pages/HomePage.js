
import React from 'react'
import Carousel from '../components/Carousel';
import Categories from '../components/Categories';
import Navbar from '../components/Navbar';
import Product from '../components/Product';
import Promo from '../components/Promo';



const HomePage = () => {
    return (
        <>
        <Promo />
        <Navbar />
        <Carousel />
        <Categories />
        <Product />
        </>
    )
}

export default HomePage;