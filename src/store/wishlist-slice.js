import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    items: localStorage.getItem("wishlist") != null? JSON.parse(localStorage.getItem("wishlist")) : [],
}

const wishlistSlice = createSlice({
    name: "wishlist",
    initialState,
    reducers: {
        addToWishlist(state, action) {
            state.items.push(action.payload);
            localStorage.setItem("wishlist" , JSON.stringify(state.items));
        },

        removeFromWishlist(state, action) {
            const id = action.payload;
            state.items = state.items.filter(item => item.id !== id);
            localStorage.setItem("wishlist" , JSON.stringify(state.items));
        }
    }
});

export const wishlistActions = wishlistSlice.actions;

export default wishlistSlice.reducer;