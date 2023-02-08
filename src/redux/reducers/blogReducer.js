import { ADD_CONTENT, DELETE_CONTENT } from "../actionTypes/actionTypes";

const initialstate = {
  cart: [],
  // blog: [],
};

const blogReducer = (state = initialstate, action) => {


  switch (action.type) {
    case ADD_CONTENT:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
    case DELETE_CONTENT:
      return {}
  }

  return state;
};

export default blogReducer;
