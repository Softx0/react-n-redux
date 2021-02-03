const { createStore } = require("redux");
const { default: rootReducers } = require("../reducers/rootReducers");

const store = createStore(rootReducers);

export default store;
