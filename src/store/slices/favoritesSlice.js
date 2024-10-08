// store/slices/favoritesSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// // Initial state for the favorites
// const initialState = {
//   items: [], // Array to store favorite products
// };

// const favoritesSlice = createSlice({
//   name: 'favorites',
//   initialState,
//   reducers: {
//     addToFavorites: (state, action) => {
//       const product = action.payload;
//       // Check if the product already exists in the favorites list
//       const exists = state.items.some((item) => item.id === product.id);
//       if (!exists) {
//         state.items.push(product); // Add to favorites if it doesn't exist
//       }
//     },
//     removeFromFavorites: (state, action) => {
//       const productId = action.payload;
//       state.items = state.items.filter((item) => item.id !== productId); // Remove product from favorites
//     },
//     clearFavorites: (state) => {
//       state.items = []; // Clear all favorites
//     },
//   },
// });

// // Export the actions
// export const { addToFavorites, removeFromFavorites, clearFavorites } = favoritesSlice.actions;

// // Export the reducer
// export default favoritesSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';

// Initial state for the favorites
const initialState = {
  items: [], // Array to store favorite products
   //

};


const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const product = action.payload;
      // Check if the product already exists in the favorites list
      const exists = state.items.some((item) => item.id === product.id);
      if (!exists) {
        state.items.push(product); // Add to favorites if it doesn't exist
        console.log(product);
        console.log(state.items.length);

      }
    },
    removeFromFavorites: (state, action) => {
      const productId = action.payload;
      // Remove the product from the favorites list by filtering out the product with the given id
      state.items = state.items.filter((item) => item.id !== productId);
    },
    clearFavorites: (state) => {
      state.items = []; // Clear all favorites
    },
  },
});

// Export the actions
export const { addToFavorites, removeFromFavorites, clearFavorites } = favoritesSlice.actions;

// Export the reducer
export default favoritesSlice.reducer;
