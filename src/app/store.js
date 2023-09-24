import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice'; // Update the import path

export default configureStore({
    reducer: {
        user: userReducer,
    },
});