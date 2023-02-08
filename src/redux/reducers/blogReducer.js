import { ADD_CONTENT } from "../actionTypes/actionTypes";

const initialstate = {
  blogs: "BLOGS",
};

const blogReducer = (state = initialstate, action) => {


  switch (action.type) {
    case ADD_CONTENT:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }
  }

  return state;
};

export default blogReducer;
