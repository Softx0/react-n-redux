import { composeWithDevTools } from 'redux-devtools-extension';
const { createStore } = require("redux");
const { default: rootReducers } = require("../reducers/rootReducers");

const store = createStore(rootReducers, composeWithDevTools());

export default store;
