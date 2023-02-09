import { ADD_CONTENT, DELETE_CONTENT } from "../actionTypes/actionTypes";

const initialstate = {
  history: [],
};

const blogReducer = (state = initialstate, action) => {
  const selectedBlog = state.history.find((blog) => blog._id === action.payload._id);

  switch (action.type) {
    case ADD_CONTENT:
      if (selectedBlog) {
        return state
      }
      return {
        ...state,
        history: [...state.history, action.payload]
      }
    case DELETE_CONTENT:
      return {
        ...state,
        history: state.history.filter((blog) => blog._id !== action.payload._id)
      }
    default:
      return state;
  }


};

export default blogReducer;
