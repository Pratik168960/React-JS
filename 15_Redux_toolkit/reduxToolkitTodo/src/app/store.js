import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

// NOTE: configureStore is the RTK method that wraps the classic Redux createStore
// It needs to be aware of all the reducers. If a reducer is not registered here, the store cannot update its state

export const store = configureStore({
    reducer: todoReducer  // key value 
})