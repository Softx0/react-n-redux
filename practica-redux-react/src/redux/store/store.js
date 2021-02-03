import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
const { createStore, applyMiddleware } = require("redux");
const { default: rootReducers } = require("../reducers/rootReducers");

const store = createStore(rootReducers, composeWithDevTools(
    applyMiddleware(thunk)
));

export default store;
