import React from 'react';
import styles from './Wishlist.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const WishItem = ({ id, title, img, price }) => {
    const dispatch = useDispatch();

    const orderHandler = () => {
        dispatch(cartActions.addItemToCart({
            id,
            title,
            img,
            price
        }))
    }

    return (
        <>
            <div className={styles['wishlist-item']}>
                <div className="row my-5">
                    <div className="col-md-2">
                        <div>
                            <img className='w-100' src={img} alt="" />
                        </div>
                    </div>
                    <div className="col-md-10">
                        <h5>{title}</h5>
                        <h6>EGP {price}</h6>
                        <div className=''>
                            <button onClick={orderHandler} className='btn btn-outline-success d-block mt-3'>Order Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WishItem