import buscador from './buscadorReducer';
import game_shop from './gameShopReducer';

const { combineReducers } = require('redux');

const rootReducers = combineReducers({
    game_shop,
    buscador
});

export default rootReducers;