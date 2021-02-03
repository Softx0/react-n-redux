import React from 'react';


const ResultadoPokemon = () => {
    return (
        <div>
            <h3 className="text-white" >Resultado: </h3>
            <div className="text-warning" >Buscando...</div>
            <div className="text-success">
                <img src="" alt="pokemon" />
                <span>Pikachu</span>
            </div>
            <span className="text-danger" >Error</span>
        </div>
    );
}

export default ResultadoPokemon;