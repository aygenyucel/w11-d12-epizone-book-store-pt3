import { GET_BOOKS } from "../actions";

const initialState = {
  //we're already in the book slice of the redux store
  stock: [],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return {
        ...state,
        stock: action.payload,
      };
    default:
      return state;
  }
};

export default bookReducer;
