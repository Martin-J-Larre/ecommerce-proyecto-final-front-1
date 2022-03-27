
import React from 'react'
import Carousel from '../components/Carousel';
import Categories from '../components/Categories';
import Navbar from '../components/Navbar';
import Promo from '../components/Promo';



const HomePage = () => {
    return (
        <>
        <Promo />
        <Navbar />
        <Carousel />
        <Categories />
        </>
    )
}

export default HomePage;