import { createStore } from "redux";
import blogReducer from "./reducers/blogReducer";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(blogReducer, composeWithDevTools());

export default store;
