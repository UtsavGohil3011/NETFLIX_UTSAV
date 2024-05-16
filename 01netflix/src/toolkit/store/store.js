import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../slices/getData";


// Configuring the Redux store with "combined reducers" for product and cart
const store = configureStore({
  reducer: {
    movie: movieReducer, 
    
  },
});

export default store;
