const historyCounter = (store) => (next) => (action) => {
    console.log("Current State", store.getState());
    console.log("Action", action);
    return;

}

export default historyCounter;