import React from 'react';
import styles from './Footer.module.css';
import logo from '../../img/logo.png'
import google from '../../img/pay/play.jpg'
import app from '../../img/pay/app.jpg';
import pay from '../../img/pay/pay.png';

const Footer = () => {
    return (
        <main id="footer" className={`${styles.footer} pb-5 bg-light`}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 gy-5">
                        <div>
                            <img className={`${styles['footer-logo']}`} src={logo} alt="" />
                            <h5 className='my-3'>Contact</h5>
                            <p><b>Address</b>: <span className='text-muted'>7 Makram Ebaid St., 6th zone, Nasr city, Cairo</span></p>
                            <p><b>Phone</b>: <span className='text-muted'>01146601945</span></p>
                            <p><b>Hours</b>: <span className='text-muted'>10:00 - 18:00 Sun - Thu</span></p>
                            <h5 className='my-3'>Follow us</h5>
                            <div>
                                <i className="fa-brands fa-facebook-f text-muted me-2"></i>
                                <i className="fa-brands fa-twitter text-muted me-2"></i>
                                <i className="fa-brands fa-instagram text-muted me-2"></i>
                                <i className="fa-brands fa-pinterest-p text-muted me-2"></i>
                                <i className="fa-brands fa-youtube text-muted me-2"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2 gy-5">
                        <div >
                            <h5>About</h5>
                            <ul>
                                <li className={`${styles['footer-list-item']} text-muted`}>About Us</li>
                                <li className={`${styles['footer-list-item']} text-muted`}>Delivery Information</li>
                                <li className={`${styles['footer-list-item']} text-muted`}>Privacy Policy</li>
                                <li className={`${styles['footer-list-item']} text-muted`}>Terms And Conditions</li>
                                <li className={`${styles['footer-list-item']} text-muted`}>Contact Us</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2 gy-5">
                        <div >
                            <h5>My Account</h5>
                            <ul>
                                <li className={`${styles['footer-list-item']} text-muted`}>Sign In</li>
                                <li className={`${styles['footer-list-item']} text-muted`}>View Cart</li>
                                <li className={`${styles['footer-list-item']} text-muted`}>My Wishlist</li>
                                <li className={`${styles['footer-list-item']} text-muted`}>Track My Order</li>
                                <li className={`${styles['footer-list-item']} text-muted`}>Help</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 gy-5">
                       <div>
                        <h5>Install App</h5>
                        <p className='text-muted'>From App Store Or Google Play</p>
                        <div className='d-flex align-items-center'>
                            <button className='btn'>
                                <img className='w-100' src={app} alt="" />
                            </button>
                            <button className='btn'>
                                <img className='w-100' src={google} alt="" />
                            </button>
                        </div>
                        <p className='text-muted'>Secured Payment Gateways</p>
                        <div>
                            <img className={`${styles['pay-img']}`} src={pay} alt="" />
                        </div>
                       </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Footer