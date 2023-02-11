import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducers/rootReducer";
// import logger from "redux-logger";
import historyCounter from "./middleWares/historyCounter";
import thunk from "redux-thunk";

//
const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(historyCounter, thunk))
);

export default store;
