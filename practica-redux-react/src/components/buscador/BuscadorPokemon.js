import React from 'react';

const BuscadorPokemon = () => {

    return (
        <div className="form-group" >
            <label htmlFor="buscarPokemon" className="text-white">Buscar Pokemon</label>
            <input type="text" className="form-control" id="buscarPokemon" value="pikachu" />
            <button className="btn btn-primary mt-3">Enviar</button>
        </div>
    );

}

export default BuscadorPokemon;