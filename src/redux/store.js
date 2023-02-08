import { createStore } from "redux";
// import blogReducer from "./reducers/blogReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer, composeWithDevTools());

export default store;
