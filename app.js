//// Tienda de video juegos, online
//// Conceptos basicos

// import { createStore } from "redux"; //react
const createStore = require('redux').createStore;

////Actions

// Una accion de comprar, de devolver algo al almacen y asi

///// Reducers

// Los trabajadores del almacen que ordenan las cajitas en el almacen
// Cuando llega un cliente eso es una action


//// Store

// Donde se guarda lo del almacen (de la aplicacion)
// Cuaqndo un store este se llenara de muchos reducers


// De la action pasa al store la solicitud y de ahi pasa al reducer para que el como empleado actue

// Actions
const BUY_POKEMON = 'BUY_POKEMON';
const RETURN_POKEMON = 'RETURN_POKEMON';

const buyPokemonAction = (cant) => {
    return {
        type: BUY_POKEMON,
        payload: cant
    }
}

const returnPokemonAction = (cant) => {
    return {
        type: RETURN_POKEMON,
        payload: cant
    }
}
//Reducer
const default_games_state = {
    pokemon: 10
}

const games_reducer = (state = default_games_state, action) => {
    switch (action.type) {
        case BUY_POKEMON: {
            return {
                pokemon: state.pokemon - action.payload
            }
        }
        case RETURN_POKEMON: {
            return {
                pokemon: state.pokemon + action.payload
            }
        }
        default: return state;
    }
};

//Store
const store = createStore(games_reducer);
console.log('Estadp inicial', store.getState());

// cuando un cliente compra una unidad se cambia el estado en la app, y el store envia un evento, para eso hay que subscribirse a la store
//por cada cambio que se realice, cada cambio se refleja aqui
store.subscribe(() => {
    console.log('Cambio de estado:', store.getState());
});

//enviar mensaje por el action
//con dispatch

store.dispatch(buyPokemonAction(3));
store.dispatch(returnPokemonAction(2));