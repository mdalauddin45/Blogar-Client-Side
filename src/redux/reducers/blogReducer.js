import { ADD_CONTENT, DELETE_CONTENT } from "../actionTypes/actionTypes";

const initialstate = {
  history: [],
};

const blogReducer = (state = initialstate, action) => {


  switch (action.type) {
    case ADD_CONTENT:
      return {
        ...state,
        history: [...state.history, action.payload]
      }
    case DELETE_CONTENT:
      return {}
  }

  return state;
};

export default blogReducer;
