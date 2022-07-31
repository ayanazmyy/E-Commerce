import React from 'react'
import styles from './Cart.module.css';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';




const Cart = ({ closeModalHandler }) => {
    const items = useSelector(state => state.cart.items);


    const cartItems = items.map(item => (
        <CartItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            quantity={item.quantity}
            totalPrice={item.totalPrice}
            img={item.img}
        />
    ))


    const closeModal = () => {
        closeModalHandler("cart")
    }

    return (
        <>
            <div className={`${styles.cart} ${styles.backdrop}`} onClick={closeModal}></div>
            <div className={`${styles['cart-container']}`}>
                <h3 className='text-center mb-5'>Your items</h3>
                <div className='mx-auto'>
                    {cartItems}
                    {items.length == 0 && <div className='text-center'>Your cart is empty</div>}
                </div>
                <i onClick={closeModal} className={`${styles.close} fa-solid fa-xmark fa-lg`}></i>
            </div>

        </>
    )
}

export default Cart