import { configureStore, combineReducers } from "@reduxjs/toolkit";
import bookReducer from "../reducers/bookReducer";
import cartReducer from "../reducers/cartReducer";
//configureStore will set up the Redux Store
// import mainReducer from "../reducers/index";
import userReducer from "../reducers/userReducer";

// const initialState = {
//   cart: {
//     content: []
//   },
//   user: {
//     name: ''
//   }
// }

const bigReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  book: bookReducer,

  //the cart subobject gets now a cart propert in combineReducers,
  //and the usersubobject gets a key in combinereducers called 'user
});

const store = configureStore({
  reducer: bigReducer,
});

export default store;
