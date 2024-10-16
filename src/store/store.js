import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import cartReducer from './slices/cartSlice';
import favoritesReducer from './slices/favoritesSlice'; 
// Create the Redux store with the user reducer
const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    favorites: favoritesReducer,
  },
});

export default store;
