const historyCounter = (store) => (next) => (action) => {
    const history = store.getState().history.history;
    if (action.type === "ADD_CONTENT") {
        const newAction = {
            ...action,
            payload: {
                ...action.payload, historyPosition: history.length
            }
        }
        return next(newAction);
    }
    return next(action);
}
export default historyCounter;