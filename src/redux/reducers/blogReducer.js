import { ADD_TO_HISTORY, REMOVE_FROM_HISTORY, GET_CONTENT } from "../actionTypes/actionTypes";

const initialstate = {
  history: [],
  blogs: [],
};

const blogReducer = (state = initialstate, action) => {
  const selectedBlog = state.history.find((blog) => blog._id === action.payload._id);
  switch (action.type) {

    case GET_CONTENT:
      return {
        ...state,
        history: action.payload,
      };
    case ADD_TO_HISTORY:
      return {
        ...state,
        history: [...state.history, action.payload],
      };
    case REMOVE_FROM_HISTORY:
      return {
        ...state,
        history: state.history.filter((blog) => blog._id !== action.payload._id)
      }
    default:
      return state;
  }


};

export default blogReducer;
