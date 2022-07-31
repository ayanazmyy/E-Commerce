import React from 'react';
import styles from './Wishlist.module.css';
import { useSelector } from 'react-redux';
import WishItem from './WishItem';


const Wishlist = ({closeModalHandler}) => {

    const items = useSelector(state => state.wishlist.items);

    const wishlistItems = items.map(item => (
        <WishItem
            key={item.id}
            id={item.id}
            title={item.title}
            img={item.img}
            price={item.price}
        />
    ))


    const closeModal = () => {
        closeModalHandler("wishlist");
    }

    return (
        <>
            <div className={`${styles.wishlist} ${styles.backdrop}`} onClick={closeModal}></div>
            <div className={`${styles['wishlist-container']}`}>
                <h3 className='text-center mb-5'>Your wishlist items</h3>
                <div className='mx-auto'>
                    {wishlistItems}
                    {items.length === 0 && <div className='text-center'>Your wishlist is empty</div>}
                </div>
                <i onClick={closeModal} className={`${styles.close} fa-solid fa-xmark fa-lg`}></i>
            </div>
        </>
    )
}

export default Wishlist