// import { REMOVE_FROM_CART, ADD_TO_CART, SET_USERNAME } from "../actions";

// //the reducer function s in charge of computing the new application state
// //whenever an action gets dispatched

// //the reducer is a PURE FUNCTION!
// //PURE FUNCTİON MEANS: from the same infut, always return the same output
// //pure function will never mutate its arguments

// //which pieces of info can the reducer function use for computing
// //the new application state?
// //1) the current state
// //2) the action that just got dispatched

// const initialState = {
//   cart: {
//     content: [], //we're going to put our books here!
//   },
//   //I need now to prepare a place for storing the user's username
//   //since it doesn't belong to the cart "slice", let's create a new one
//   //for saving user info
//   user: {
//     name: "",
//   },
// };

// //let's force the initialState to be the first value for the
// //state argument in our reducer, using the default assignment operator =
// const mainReducer = (state = initialState, action) => {
//   //the goal of the reducer function is always to return the new state
//   //of the application
//   switch (action.type) {
//     //multiple cases are going to happening here, with time
//     //but now, just for starting, lets write just the default
//     // so we can conclude this function and finish our store/index.js

//     case ADD_TO_CART:
//       //what are we going to do in every case?
//       //we are going to return the new state of the app
//       return {
//         ...state,
//         cart: {
//           ...state.cart,
//           content: [...state.cart.content, action.payload],
//           //this is a non-mutating way of adding an element
//           //to an array. remember: NEVER mutate state in a reducer function,
//           //that brokes the immutability patter of redux
//           //check doesitmutate.xyz if you want to see which methods
//           //are safe to use in a reducer function!
//         },
//       };

//     case REMOVE_FROM_CART:
//       return {
//         ...state,
//         cart: {
//           ...state.cart,
//           content: state.cart.content.filter((book, i) => {
//             return i !== action.payload;
//             // this creates a new array with all the elements aparts from one
//             // the one with its index === the index you want to remove!
//           }),
//         },
//       };

//     case SET_USERNAME:
//       return {
//         ...state,
//         user: {
//           ...state.user,
//           name: action.payload, //this is the new username, just set
//         },
//       };
//     default:
//       return state;
//     //in the case of an unknown action.type, don't break anything!!!!
//     //worst case scenario, return the current state without modifying anything!
//   }
// };

// export default mainReducer;
