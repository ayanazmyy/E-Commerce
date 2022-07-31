import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: localStorage.getItem("cart") != null ? JSON.parse(localStorage.getItem("cart")) : [],
    totalQuantity: 0
}
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItemToCart(state, action){
            const newItem = action.payload
            state.totalQuantity++;
            const existingItem = state.items.find(item => item.id === newItem.id);

            if(!existingItem) {
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    img: newItem.img,
                    quantity: 1,
                    totalPrice: newItem.price
                })
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += existingItem.price;      
            }

            localStorage.setItem("cart" , JSON.stringify(state.items));
        },

        removeItemFromCart(state, action) {
            state.totalQuantity--;
            const id = action.payload;
            const existingItem = state.items.find(item => item.id == id);
            if(existingItem.quantity === 1){
                state.items = state.items.filter(item => item.id !== id)
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }

            localStorage.setItem("cart" , JSON.stringify(state.items));
        }
    }
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;