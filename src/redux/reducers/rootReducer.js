import { combineReducers } from "redux";
import blogReducer from "./blogReducer";
import filterReducer from "./filterReducer";

const rootReducer = combineReducers({
    history: blogReducer,
    filters: filterReducer,
});

export default rootReducer;