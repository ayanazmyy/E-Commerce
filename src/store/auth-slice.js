import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isLoggedIn: false,
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action) {
            state.isLoggedIn = true;
            localStorage.setItem("loggedin", "loggedin");
        },

        logout(state, action){
            state.isLoggedIn = false;
            localStorage.removeItem("loggedin");
            localStorage.removeItem("cart");
            localStorage.removeItem("wishlist");
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
