//let's manage all out actions here!
import { useDispatch } from "react-redux";
//best practise: instead of writing the actions manually every time,
//let's create some functions that returns actions with dynamic payload:
//these are called "action creators functions"

//another best practise: define CONSTANTS for your action types!!!
//so now you can manage all the name of actions without any typo.
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SET_USERNAME = "SET_USERNAME";
export const GET_BOOKS = "GET_BOOKS";

//this is a fuction returning an action
//in redux terminology, this is called an "action creator"

export const addToCartAction = (bookSelected) => {
  //   return {
  //     type: "ADD_TO_CART",
  //     payload: bookSelected,
  //   };
  return {
    type: ADD_TO_CART,
    payload: bookSelected,
  };
};

export const removeFromCartAction = (i) => {
  return {
    type: REMOVE_FROM_CART,
    payload: i,
  };
};

// export const removeFromCartAction = (i) => ({
//     type: REMOVE_FROM_CART,
//     payload: i,
// };

export const setUsernameAction = (username) => {
  return {
    type: SET_USERNAME,
    payload: username,
  };
};

// so it returns the action itself, the object

//we'd like to move our fetch process into the redux flox; in this way
//if we're going to invoke this operation again we don't have to copy/past
//the fetch(or even worse, the useEffexr) though multiple components
//the reducer though is not the right place for it, since it's a pure function!

//lets re'write setUsernameAction with an async shape:
export const setUsernameActionAsync = (username) => {
  //this async action creator doesn't return the action straight away,
  // instead it returns a function!
  return async (dispatch, getState) => {
    //this function can be async and you can do anything into it!
    console.log("I will console.log this before returning the action!");

    //dispatch is good ol' dispatch function!
    console.log("let's also take a look the current state:", getState());
    dispatch({
      type: SET_USERNAME,
      payload: username,
    });
  };
};

export const getBooksAction = () => {
  return async (dispatch, getState) => {
    console.log("fetching the books from the API...");
    try {
      let resp = await fetch(
        "https://striveschool-api.herokuapp.com/food-books"
      );
      if (resp.ok) {
        let fetchedBooks = await resp.json();
        dispatch({
          type: GET_BOOKS,
          payload: fetchedBooks,
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
