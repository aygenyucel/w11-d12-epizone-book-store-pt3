import { SET_USERNAME } from "../actions";

//the reducer function s in charge of computing the new application state
//whenever an action gets dispatched

//the reducer is a PURE FUNCTION!
//PURE FUNCTİON MEANS: from the same infut, always return the same output
//pure function will never mutate its arguments

//which pieces of info can the reducer function use for computing
//the new application state?
//1) the current state
//2) the action that just got dispatched

const initialState = {
  name: "",
};

//let's force the initialState to be the first value for the
//state argument in our reducer, using the default assignment operator =
const userReducer = (state = initialState, action) => {
  //the goal of the reducer function is always to return the new state
  //of the application
  switch (action.type) {
    //multiple cases are going to happening here, with time
    //but now, just for starting, lets write just the default
    // so we can conclude this function and finish our store/index.js

    case SET_USERNAME:
      return {
        ...state,
        name: action.payload, //this is the new username, just set
      };
    default:
      return state;
    //in the case of an unknown action.type, don't break anything!!!!
    //worst case scenario, return the current state without modifying anything!
  }
};

export default userReducer;
