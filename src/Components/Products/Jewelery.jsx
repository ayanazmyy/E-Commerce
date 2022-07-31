import React from 'react';
import JeweleryItem from './JeweleryItem';
import styles from './Products.module.css'
import { useState, useEffect } from 'react';
import axios from 'axios';

const Jewelery = () => {
  const [jeweleryProducts, setJeweleryProducts] = useState([]);
    const getProducts = async () => {
        const { data } = await axios.get(`https://fakestoreapi.com/products/category/jewelery?fbclid=IwAR1a8Ibyn1prHmy0b1_c4_dHnEulMarYNjkY54jdO0fSPaBbWYI-2HcnvvA`);
        setJeweleryProducts(data);
    }

    useEffect(() => {
        getProducts();
    }, [])

    const jeweleryItems = jeweleryProducts.map(pro => (
        <JeweleryItem
            key={pro.id}
            title={pro.title}
            price={pro.price}
            img={pro.image}
            id={pro.id}
        />
    ))
  return (
    <>
    <h3 id="jewelery" className='text-center text-muted mt-5'>Jewelery collection</h3>
    {jeweleryItems}
    </>
  )
}

export default Jewelery;