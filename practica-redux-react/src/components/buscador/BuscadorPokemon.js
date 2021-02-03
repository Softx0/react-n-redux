import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import fetchpokemon from '../../redux/actions/buscadorAction';


const BuscadorPokemon = () => {

    const dispatch = useDispatch();
    const [pokemonName, setPokemonName] = useState('mewtwo');

    return (
        <div className="form-group" >
            <label htmlFor="buscarPokemon" className="text-white">Buscar Pokemon</label>
            <input type="text" className="form-control" id="buscarPokemon" value={pokemonName} 
                onChange={
                    (event) =>{
                        setPokemonName(event.target.value)
                    }
                } />
            <button className="btn btn-primary mt-3" onClick={
                () => {
                    dispatch(fetchpokemon(pokemonName));
                }
            } >Enviar</button>
        </div>
    );

}

export default BuscadorPokemon;