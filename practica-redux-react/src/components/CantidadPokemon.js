import React, { Component } from 'react';
import {connect} from 'react-redux';
class CantidadPokemon extends Component {
    render() {
        return (
            <React.Fragment>
                Unidades: {this.props.game_shop.pokemon}
            </React.Fragment>
        )
    }
}

// connect internamente ejecuta la funciuon map, y le pasa el estado
// devuelve un nuevo componente con los props ya integrados, en CantidadPokemon
const mapStateToProps = (state) => {
    return {
        game_shop: state.game_shop
    }
}

export default connect(mapStateToProps)(CantidadPokemon);