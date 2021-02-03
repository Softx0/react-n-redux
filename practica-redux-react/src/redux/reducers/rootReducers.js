import game_shop from './gameShopReducer';


const { combineReducers } = require("redux");

const rootReducers = combineReducers({
    game_shop
});

export default rootReducers;