import {configureStore} from '@reduxjs/toolkit';
import authSlice from './authSlice';

// NOTE: The central store that holds the global state tree of the application
const store = configureStore({
    reducer: {
        auth : authSlice,
        // TODO: Add more slices here for posts later (assignment)
    }
});

export default store;