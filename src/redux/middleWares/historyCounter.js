import { ADD_TO_HISTORY } from "../actionTypes/actionTypes";

const historyCounter = (store) => (next) => (action) => {
    const history = store.getState().history.history;
    if (action.type === ADD_TO_HISTORY) {
        const newAction = {
            ...action,
            payload: { ...action.payload, historyPosition: history.length },
        };

        return next(newAction);
    }

    return next(action);
};
export default historyCounter;