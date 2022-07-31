import React, { useState } from 'react';
import styles from './SignIn.module.css';
import Axios from 'axios';
import Joi from 'joi';
import { authActions } from '../../store/auth-slice';
import { useDispatch } from 'react-redux';

const SignIn = ({ closeModalHandler }) => {
    const dispatch = useDispatch();
    const [showSignIn, setShowSignIn] = useState(true);
    const [showSignUp, setShowSignUp] = useState(false);

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState([]);
    const [errorList, setErrorList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const closeModal = () => {
        closeModalHandler("signin");
    }

    const showSignUpContent = () => {
        setShowSignUp(true);
        setShowSignIn(false)
    }

    const showSignInContent = () => {
        setShowSignUp(false);
        setShowSignIn(true)
    }


    const signIninputHandler = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const validateSignInForm = () => {
        const Joi = require('joi');
        const scheme = Joi.object({
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
        })

        return scheme.validate(user, { abortEarly: false });

    }

    const signInsubmitHandler = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        const validationResult = validateSignInForm();
        if (validationResult.error) {
            const allErrors = validationResult.error.details;
            for (let i = 0; i < allErrors.length; i++) {
                if (allErrors[i].message.includes('email')) {
                    allErrors[i].message = 'Please enter a valid email'
                } else if (allErrors[i].message.includes('password')) {
                    allErrors[i].message = "Password must contain 3-30 small letters, capital letters and numbers"
                }
            }
            setErrorList(validationResult.error.details);
            setIsLoading(false)

        } else {
            setErrorList([])
            setError([])
            const { data } = await Axios.post("https://route-egypt-api.herokuapp.com/signin", user);
            if (data.message === 'success') {
                setUser({
                    email: '',
                    password: ''
                });

                setIsLoading(false);
                localStorage.setItem('loggedin', 'loggedin');
                closeModalHandler("signin");
                dispatch(authActions.login());
            } else {
                setError(data.message)
                setIsLoading(false);
            }
        }
    }


    const [userSignUp, setUserSignUp] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: ''
    });
    const [errorSignUp, setErrorSignUp] = useState([]);
    const [errorListSignUp, setErrorListSignUp] = useState([]);
    const [isLoadingSignUp, setIsLoadingSignUp] = useState(false);

    const signUpinputHandler = (e) => {
        setUserSignUp({
            ...userSignUp,
            [e.target.name]: e.target.value
        })
    }

    const validateSignUpForm = () => {
        const Joi = require('joi');
        const scheme = Joi.object({
            first_name: Joi.string().alphanum().min(3).max(10).required(),
            last_name: Joi.string().alphanum().min(3).max(10).required(),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
            password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
        })

        return scheme.validate(userSignUp, { abortEarly: false });

    }

    const submitSignUpHandler = async (e) => {
        e.preventDefault();
        setIsLoadingSignUp(true);

        const validationResult = validateSignUpForm();
        if (validationResult.error) {
            const allErrors = validationResult.error.details;
            for (let i = 0; i < allErrors.length; i++) {
                if (allErrors[i].message.includes('first_name')) {
                    allErrors[i].message = 'First name must be at least 3 characters long'
                } else if (allErrors[i].message.includes('last_name')) {
                    allErrors[i].message = "Last name must be at least 3 characters long"
                } else if (allErrors[i].message.includes('email')) {
                    allErrors[i].message = 'Please enter a valid email'
                } else if (allErrors[i].message.includes('password')) {
                    allErrors[i].message = "Password must contain 3-30 small letters, capital letters and numbers"
                }
            }
            setErrorListSignUp(validationResult.error.details);
            setIsLoadingSignUp(false)

        } else {
            setErrorListSignUp([])
            setErrorSignUp([])
            const { data } = await Axios.post("https://route-egypt-api.herokuapp.com/signup", userSignUp);
            if (data.message === 'success') {
                setUser({
                    first_name: '',
                    last_name: '',
                    email: '',
                    password: ''
                });
                setIsLoadingSignUp(false);
                localStorage.setItem('loggedin', 'loggedin');
                closeModalHandler("signup");
                dispatch(authActions.login());

            } else {
                setErrorSignUp(data.message)
                setIsLoadingSignUp(false);
            }
        }
    }

    return (
        <>
            <div className={`${styles.signin} ${styles.backdrop}`} onClick={closeModal}></div>
            {showSignIn && <div className={`${styles['signin-container']}`}>
                <h3 className='text-center mb-5'>Sign in</h3>
                <form className='mx-auto' onSubmit={signInsubmitHandler}>
                    <input name="email" type="email" className='form-control mb-2' placeholder='Enter your email...' value={user.email} onChange={signIninputHandler} />
                    {errorList.length > 0 ? errorList.filter(err => err.message.includes('email')).map((err, i) => <div key={i} className='text-danger mt-2'>{err.message}</div>) : ""}

                    <input name="password" type="password" className='form-control' placeholder='Enter your password...' value={user.password} onChange={signIninputHandler} />
                    {errorList.length > 0 ? errorList.filter(err => err.message.includes('Password')).map((err, i) => <div key={i} className='text-danger mt-2'>{err.message}</div>) : ""}

                    {error.length > 0 && <div className='text-danger'>{error}</div>}
                    <button className={`${styles.sign} btn-primary border-0 mt-4`}>{isLoadingSignUp ? <i className='fas fa-spinner fa-spin'></i> : 'Sign in'}</button>
                    <p className='text-muted mt-2'>You don't have am account? <a href='#' onClick={showSignUpContent}>Sign up</a> instead</p>
                </form>
            </div>}

            {showSignUp && <div className={`${styles['signin-container']}`}>
                <h3 className='text-center mb-5'>Sign up</h3>
                <form className='mx-auto' onSubmit={submitSignUpHandler}>
                    <input name="first_name" type="text" className='form-control mb-2' placeholder='Enter your first name...' value={userSignUp.first_name} onChange={signUpinputHandler} />
                    {errorListSignUp.length > 0 ? errorListSignUp.filter(err => err.message.includes('First')).map((err, i) => <div key={i} className='text-danger my-1'>{err.message}</div>) : ""}

                    <input name="last_name" type="text" className='form-control mb-2' placeholder='Enter your last name...' value={userSignUp.last_name} onChange={signUpinputHandler} />
                    {errorListSignUp.length > 0 ? errorListSignUp.filter(err => err.message.includes('Last')).map((err, i) => <div key={i} className='text-danger my-1'>{err.message}</div>) : ""}

                    <input name="email" type="email" className='form-control mb-2' placeholder='Enter your email...' value={userSignUp.email} onChange={signUpinputHandler} />
                    {errorListSignUp.length > 0 ? errorListSignUp.filter(err => err.message.includes('email')).map((err, i) => <div key={i} className='text-danger my-1'>{err.message}</div>) : ""}

                    <input name='password' type="password" className='form-control' placeholder='Enter your password...' value={userSignUp.password} onChange={signUpinputHandler} />
                    {errorListSignUp.length > 0 ? errorListSignUp.filter(err => err.message.includes('Password')).map((err, i) => <div key={i} className='text-danger my-1'>{err.message}</div>) : ""}

                    {errorSignUp.length > 0 && <div className='text-danger'>{errorSignUp}</div>}
                    <button className={`${styles.sign} btn-primary border-0 mt-4`}>{isLoadingSignUp ? <i className='fas fa-spinner fa-spin'></i> : 'Sign up'}</button>
                    <p className='text-muted mt-2'>Already have am account? <a href='#' onClick={showSignInContent}>Sign in</a> instead</p>
                </form>
            </div>}
        </>
    )
}

export default SignIn