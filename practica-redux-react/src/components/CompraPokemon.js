import React, { Component } from 'react';
import {connect} from 'react-redux';
import {buyPokemonAction, returnPokemonAction} from '../redux/actions/gameShopAction';
class CompraPokemon extends Component {
    render() {
        return (
            <div>
                <button className="btn btn-dark btn-sm mb-2" onClick={() => {
                    this.props.buyPokemonAction(1);
                }} >Comprar Pokemon</button>

                <button className="btn btn-dark btn-sm" onClick={() => {
                    this.props.returnPokemonAction(1);
                }} >Devolver Pokemon</button>
            </div>
        )
    }
}

//para ejecutar el dispatch hay que llamar las acciones
const mapDispatchToProps = {
    buyPokemonAction,
    returnPokemonAction
}

//primer param nulo que es de los state
export default connect(null, mapDispatchToProps)(CompraPokemon);