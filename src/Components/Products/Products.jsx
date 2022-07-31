import React from 'react';
import styles from './Products.module.css';
import Men from './Men'
import Women from './Women';
import Jewelery from './Jewelery';
import Electronics from './Electronics'
import Sale from '../Sale/Sale';

const Products = ({closeModalHandler}) => {
  return (
    <main className='my-5 pb-5'>
      <div className="container">
        <h2 className={`${styles['products-heading']} text-center my-5`}>Featured products</h2>
        <div className="row justify-content-center">
          <Women closeModalHandler={closeModalHandler}/>
          <Men />
        </div>
      </div>
      <Sale />
      <div className="container">
        <div className="row justify-content-center">
          <Jewelery />
          <Electronics />
        </div>
      </div>
    </main>
  )
}

export default Products