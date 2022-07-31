import React from 'react';
import styles from './Sale.module.css';
import b2 from '../../img/banner/b2.jpg'

const Sale = () => {
    return (
        <main className='my-5'>
            <div className={`${styles['sale-container']} d-flex justify-content-center text-center`}>
                <div className={`${styles['sale-content']}`}>
                    <h2>Up to <span>70% off</span> all t-shirts and accessories</h2>
                    <button className={`${styles['explore-btn']} btn bg-light mt-4`}>Explore more</button>
                </div>
            </div>
        </main>
    )
}

export default Sale