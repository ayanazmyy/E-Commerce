import React, { useState } from 'react'
import styles from './Products.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';
import { wishlistActions } from '../../store/wishlist-slice';

const JeweleryItem = ({ id, title, price, img }) => {
    const [isFavourite, setIsFavourite] = useState(false);
    const [showAuthModal, setShowAuthModal] = useState(false);

    const dispatch = useDispatch();

    const authState = useSelector(state => state.auth.isLoggedIn);

    const addToCartHandler = () => {
        if (authState) {
            dispatch(cartActions.addItemToCart({
                id,
                title,
                price,
                img,
                quantity: 1
            }))
        } else {
            setShowAuthModal(true)
        }
    }

    const toggleWishlistHandler = (e) => {
        if (authState) {
            if(isFavourite === null || isFavourite === false) {
                setIsFavourite(true);
                e.target.style.color = "red";
                dispatch(wishlistActions.addToWishlist({
                    id,
                    title,
                    price,
                    img,
                }))
            } else if (isFavourite === true) {
                setIsFavourite(false);
                e.target.style.color = "gray"
                dispatch(wishlistActions.removeFromWishlist(id))
            } 
        } else {
            setShowAuthModal(true)
        }

    }


    const closeAuthModal = () => {
        setShowAuthModal(false)
    }

    const heartStyle = {
        color: authState && isFavourite ? "red" : "gray"
    }


    return (
        <>
            {showAuthModal && <>
                <div className={`${styles.auth} ${styles.backdrop}`} onClick={closeAuthModal}></div>
                <div className={`${styles['auth-container']}`}>
                    <p className='mx-auto text-center'>
                        You're not logged in, Please log in to your account to add items to your wishlist and start shopping.
                    </p>
                    <i onClick={closeAuthModal} className={`${styles.close} fa-solid fa-xmark fa-lg`}></i>
                </div>
            </>}
            <div className="col-md-4 gy-5">
                <div className={styles['product-item']}>
                    <img src={img} alt="" className={`${styles['product-img']} bg-dark w-100`} />
                    <h6 className={`${styles.title} my-3`}>{title}</h6>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className={`${styles.price} my-3`}>EGP {price}</div>
                        <div>
                            <i onClick={addToCartHandler} className={`${styles['cart-icon']} fa-lg fa-solid fa-cart-shopping`}></i>
                            <i style={heartStyle} onClick={toggleWishlistHandler} className={`${styles['heart-icon']} fa-lg fa-solid fa-heart`}></i>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JeweleryItem;