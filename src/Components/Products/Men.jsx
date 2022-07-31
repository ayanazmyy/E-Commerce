import React from 'react';
import MenItem from './MenItem';
import styles from './Products.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Men = () => {
  const [menProducts, setMenProducts] = useState([]);
  const getProducts = async () => {
    const { data } = await axios.get(`https://fakestoreapi.com/products/category/men's%20clothing?fbclid=IwAR1a8Ibyn1prHmy0b1_c4_dHnEulMarYNjkY54jdO0fSPaBbWYI-2HcnvvA`);
    setMenProducts(data);
  }

  useEffect(() => {
    getProducts();
  }, [])

  const menItems = menProducts.map(pro => (
    <MenItem
      id={pro.id}
      key={pro.id}
      title={pro.title}
      price={pro.price}
      img={pro.image}
    />
  ))

  return (
    <>
      <h3 id="men" className='text-center text-muted mt-5'>Men's collection</h3>
      {menItems}
    </>
  )
}

export default Men