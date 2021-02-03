export const BUY_POKEMON = 'BUY_POKEMON';
export const RETURN_POKEMON = 'RETURN_POKEMON';

export const buyPokemonAction = (cant) => {
    return {
        type: BUY_POKEMON,
        payload: cant
    }
}

export const returnPokemonAction = (cant) => {
    return {
        type: RETURN_POKEMON,
        payload: cant
    }
}