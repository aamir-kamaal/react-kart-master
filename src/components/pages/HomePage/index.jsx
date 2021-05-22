import React from 'react'
import Categories from './Categories'
import Appbar from './Appbar'
import Footer from './Footer'
import Item from './Product'
import ProductList from './ProductList'

const HomePage = () => {

    return (
        <div>
            <Appbar />
            <Categories />
            <ProductList />
            <Footer />
        </div>
    )
}

export default HomePage