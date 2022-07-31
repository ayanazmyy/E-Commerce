import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products'
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Cart from './Components/Cart/Cart';
import { useEffect, useState } from 'react';
import Wishlist from './Components/Wishlist/Wishlist';
import SignIn from './Components/SignIn/SignIn';
import { authActions } from './store/auth-slice';
import {useDispatch} from "react-redux";


function App() {
  const [cartModalIsShown, setCartModalIsShown] = useState(false);
  const [wishlistModalIsShown, setWishlistModalIsShown] = useState(false)
  const [signInModalIsShown, setSignInModalIsShown] = useState(false);

  const dispatch = useDispatch();

  const showModalHandler = (modal) => {
    if(modal === "cart"){
      setCartModalIsShown(true);
    } else if(modal === "wishlist") {
      setWishlistModalIsShown(true)
    } else {
      setSignInModalIsShown(true)
    }
    
  }

  const closeModalHandler = (modal) => {
    if(modal === "cart"){
      setCartModalIsShown(false);
    } else if(modal === "wishlist") {
      setWishlistModalIsShown(false)
    }else if (modal === "signin"){
      setSignInModalIsShown(false)
    }else if (modal === "signup"){
      setSignInModalIsShown(false)
    }
  }

  useEffect(()=> {
    if(localStorage.getItem("loggedin")) {
      dispatch(authActions.login())
    }
  }, [])
  return (
    <>
      {wishlistModalIsShown && <Wishlist closeModalHandler={closeModalHandler} />}
      {cartModalIsShown && <Cart closeModalHandler={closeModalHandler} />}
      {signInModalIsShown && <SignIn closeModalHandler={closeModalHandler} />}
      <Navbar
        showModalHandler={showModalHandler}
      />
      <Header />
      <Products />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
