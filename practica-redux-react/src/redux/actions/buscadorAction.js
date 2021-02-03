import axios from 'axios';

// const URL_BASE = 'https://pokeapi.co/api/v2';
// const POKEMON = '/pokemon';

export const FETCH_POKEMON_REQUEST = 'FETCH_POKEMON_REQUEST';

export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';

export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE';

//Actions

export const fetchPokemonRequest = () => {
    return{
        type: FETCH_POKEMON_REQUEST
    }
}


export const fetchPokemonSuccess = (Pokemon) => {
    return{
        type: FETCH_POKEMON_SUCCESS,
        payload: Pokemon
    }
}

export const fetchPokemonFailure = (err) => {
    return{
        type: FETCH_POKEMON_FAILURE,
        payload: err
    }
}

//gracias a thunk usaremos el dispatch, asi mismo, utilizando axios para consumir el API
const fetchpokemon = (pokemon) =>{
    return ((dispatch) => {
        dispatch(fetchPokemonRequest());
        // axios.get(`${URL_BASE}${POKEMON}${pokemon}`)
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
            .then(respo => {
                dispatch(fetchPokemonSuccess([respo.data]));
            })
            .catch(err => {
                dispatch(fetchPokemonFailure('No se encontro el pokemon'));
            });
    })
}

export default fetchpokemon;