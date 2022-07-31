import React from 'react';
import WomenItem from './WomenItem';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './Products.module.css'

const Women = () => {
    const [womenProducts, setWomenProducts] = useState([]);
    const getProducts = async () => {
        const { data } = await axios.get(`https://fakestoreapi.com/products/category/women's%20clothing?fbclid=IwAR1a8Ibyn1prHmy0b1_c4_dHnEulMarYNjkY54jdO0fSPaBbWYI-2HcnvvA`);
        setWomenProducts(data);
    }

    useEffect(() => {
        getProducts();
    }, [])

    const womenItems = womenProducts.map(pro => (
        <WomenItem
            id={pro.id}
            key={pro.id}
            title={pro.title}
            price={pro.price}
            img={pro.image}
        />
    ))


    return (
        <>
            <h3 id="women" className='text-center text-muted mt-5'>Women's collection</h3>
            {womenItems}
        </>
    )
}

export default Women;