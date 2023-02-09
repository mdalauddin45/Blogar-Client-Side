import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducers/rootReducer";
// import logger from "redux-logger";
import historyCounter from "./middleWares/historyCounter";

//
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(historyCounter)),);

export default store;
