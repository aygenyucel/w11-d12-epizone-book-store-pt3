import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import bookReducer from "../reducers/bookReducer";
import cartReducer from "../reducers/cartReducer";
//configureStore will set up the Redux Store
// import mainReducer from "../reducers/index";
import userReducer from "../reducers/userReducer";
import localStorage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
// const initialState = {
//   cart: {
//     content: []
//   },
//   user: {
//     name: ''
//   }
// }

const persistConfig = {
  key: "root",
  storage: localStorage, //the default engine
  tranforms: [
    encryptTransform({
      // secretKey: "MY_SUPER_SECRET_KEY",
      secretKey: process.env.REACT_APP_SECRET_KEY,
    }),
  ],
};

//this is creating a persisted version of bigReducer, using the configuration
//object declared above

const bigReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  book: bookReducer,

  //the cart subobject gets now a cart propert in combineReducers,
  //and the usersubobject gets a key in combinereducers called 'user
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

const store = configureStore({
  reducer: persistedReducer,
  // reducer: bigReducer,
  middleware: (getDefaultMiddleware) => {
    //this is for shutting down the serializable check
    //performed by Redux, and getting rid of the error fo console.
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

//we also have to create a persisted version of our store
// this is commonly refered as "persistor"
export const persistor = persistStore(store);

export default store;
