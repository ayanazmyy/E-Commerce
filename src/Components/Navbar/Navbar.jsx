import React from 'react';
import logo from '../../img/logo.png'
import styles from './Navbar.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/auth-slice';

const Navbar = ({ showModalHandler }) => {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    const cartClickHandler = () => {
        showModalHandler("cart")
    }

    const wishtlistClickHandler = () => {
        showModalHandler("wishlist")
    }

    const signInClickHandler = () => {
        showModalHandler("signin");
    }

    const logoutClickHandler = () => {
        dispatch(authActions.logout());
    }

    const totalQuantity = useSelector(state => state.cart.totalQuantity);

    return (
        <nav className="navbar navbar-expand-lg bg-light position-fixed top-0 end-0 start-0">
            <div className="container">
                <a className="navbar-brand" href="#home">
                    <img src={logo} alt="" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        <i className="fa-solid fa-bars fa-lg mt-3"></i>
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item my-2">
                            <a className={styles["nav-link"]} href="#home">Home</a>
                        </li>
                        <li className="nav-item  my-2">
                            <a className={styles["nav-link"]} href="#women">Women's</a>
                        </li>
                        <li className="nav-item my-2">
                            <a className={styles["nav-link"]} href="#men">Men's</a>
                        </li>
                        <li className="nav-item my-2">
                            <a className={styles["nav-link"]} href='#jewelery'>Jewelery</a>
                        </li>
                        <li className="nav-item my-2">
                            <a className={styles["nav-link"]} href='#electronics'>Electronics</a>
                        </li>
                        <li className="nav-item my-2">
                            <a className={styles["nav-link"]} href='#contact'>Contact</a>
                        </li>
                        {isLoggedIn && <li className="nav-item my-2">
                            <button className={`${styles["nav-link"]} ${styles['wish-link']}`} onClick={wishtlistClickHandler}>Your wishlist</button>
                        </li>}
                        {!isLoggedIn && <li className="nav-item my-2">
                            <a onClick={signInClickHandler} className={styles["nav-link"]} >Sign in</a>
                        </li>}
                        {isLoggedIn && <li className="nav-item my-2">
                            <a onClick={logoutClickHandler} className={styles["nav-link"]} >Log out</a>
                        </li>}
                        {isLoggedIn && <li className="nav-item my-2 ">
                            <button className={`${styles["nav-link"]} btn position-relative`} onClick={cartClickHandler}>
                                {totalQuantity > 0 && <span className={styles.badge}>{totalQuantity}</span>}
                                <i className="fa-solid fa-cart-shopping fa-xl"></i>
                            </button>
                        </li>}

                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar