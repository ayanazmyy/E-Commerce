import React from 'react';
import ElectronicsItem from './ElectronicsItem';
import styles from './Products.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Women = () => {
  const [electronicProducts, setElectronicProducts] = useState([]);
    const getProducts = async () => {
        const { data } = await axios.get(`https://fakestoreapi.com/products/category/electronics?fbclid=IwAR1a8Ibyn1prHmy0b1_c4_dHnEulMarYNjkY54jdO0fSPaBbWYI-2HcnvvA`);
        setElectronicProducts(data);
    }

    useEffect(() => {
        getProducts();
    }, [])

    const electronicItems = electronicProducts.map(pro => (
        <ElectronicsItem
            key={pro.id}
            title={pro.title}
            price={pro.price}
            img={pro.image}
            id={pro.id}
        />
    ))

  return (
    <>
    <h3 id="electronics" className='text-center text-muted mt-5'>Electronics collection</h3>
    {electronicItems}
    </>
  )
}

export default Women;