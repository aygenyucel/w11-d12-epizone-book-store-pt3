import { REMOVE_FROM_CART, ADD_TO_CART } from "../actions";

const initialState = {
  content: [], //we're going to put our books here!
};

const cartReducer = (state = initialState, action) => {
  //the goal of the reducer function is always to return the new state
  //of the application
  switch (action.type) {
    //multiple cases are going to happening here, with time
    //but now, just for starting, lets write just the default
    // so we can conclude this function and finish our store/index.js

    case ADD_TO_CART:
      //what are we going to do in every case?
      //we are going to return the new state of the app
      return {
        ...state,
        content: [...state.content, action.payload],
        //this is a non-mutating way of adding an element
        //to an array. remember: NEVER mutate state in a reducer function,
        //that brokes the immutability patter of redux
        //check doesitmutate.xyz if you want to see which methods
        //are safe to use in a reducer function!
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        content: state.content.filter((book, i) => {
          return i !== action.payload;
          // this creates a new array with all the elements aparts from one
          // the one with its index === the index you want to remove!
        }),
      };

    default:
      return state;
    //in the case of an unknown action.type, don't break anything!!!!
    //worst case scenario, return the current state without modifying anything!
  }
};

export default cartReducer;
