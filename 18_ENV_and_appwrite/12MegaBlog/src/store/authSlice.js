import { createSlice } from "@reduxjs/toolkit";

// Initial state representing a user who is not logged in
const initialState = {
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // Reducer to handle successful login
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        // Reducer to handle logout
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
     }
})

// Export individual actions to be used by useDispatch
export const {login, logout} = authSlice.actions;

// Export the main reducer to be wired into store.js
export default authSlice.reducer;