import React from 'react'
import styles from './Cart.module.css';
import { cartActions } from '../../store/cart-slice';
import { useDispatch } from 'react-redux';

const CartItem = ({ id, title, price, quantity, totalPrice, img }) => {
    const dispatch = useDispatch();

    const plusHandler = () => {
        dispatch(cartActions.addItemToCart({
            id,
            title,
            price,
            quantity,
            img,
            totalPrice
        }))
    }

    const minusHandler = () => {
        dispatch(cartActions.removeItemFromCart(id))
    }




    return (
        <>
            <div className={styles['cart-item']}>
                <div className="row my-5">
                    <div className="col-md-2">
                        <div>
                            <img className='w-100' src={img} alt="" />
                        </div>
                    </div>
                    <div className="col-md-10">
                        <h5>{title}</h5>
                        <h6>{price} x {quantity}</h6>
                        <h6>EGP {totalPrice.toFixed(2)}</h6>
                        <div className='d-flex'>
                            <button onClick={plusHandler} className={`${styles.plus} btn me-2 my-3`}>+</button>
                            <button onClick={minusHandler} className={`${styles.minus} btn me-2 my-3`}>-</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItem