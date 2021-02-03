import React from 'react';
import { buyPokemonAction, returnPokemonAction } from '../redux/actions/gameShopAction';
import { useDispatch } from 'react-redux';

const CompraPokemonHook = () => {

    //useDispatch
    const dispatch = useDispatch();
    
    return (
        <div>
            <button className="btn btn-dark btn-sm mb-2" onClick={() => {
                dispatch(buyPokemonAction(1));
            }} >Comprar Pokemon</button>

            <button className="btn btn-dark btn-sm" onClick={() => {
                dispatch(returnPokemonAction(1));
            }} >Devolver Pokemon</button>
        </div>
    );
}

export default CompraPokemonHook;