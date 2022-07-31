import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart-slice';
import wishlistReducer from './wishlist-slice';
import authReducer from "./auth-slice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        wishlist: wishlistReducer,
        auth: authReducer
    }
});

export default store;