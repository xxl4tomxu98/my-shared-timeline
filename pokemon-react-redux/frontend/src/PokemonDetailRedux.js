import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getDetail } from './store/pokemon'

class PokemonDetailRedux extends Component {

  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.getDetail(id);
  }

  componentDidUpdate(oldProps) {
    const oldId = oldProps.match.params.id;
    const newId = this.props.match.params.id;
    if (oldId === newId) {
      return;
    }
    this.props.getDetail(newId);
  }

  render() {
    const pokemon = this.props.detail;
    if (!pokemon) {
      return null;
    }
    return (
      <div className="pokemon-detail">
        <div className={`pokemon-detail-image-background`}
             style={{backgroundImage: `url('/images/${pokemon.type}.jpg')`}}>
          <div className="pokemon-detail-image"
               style={{backgroundImage: `url('${pokemon.imageUrl}')`}}>
          </div>
          <h1 className="bigger">{pokemon.name}</h1>
        </div>
        <div className="pokemon-detail-lists">
          <div>
            <h2>Information</h2>
            <ul>
              <li><b>Type</b> {pokemon.type}</li>
              <li><b>Attack</b> {pokemon.attack}</li>
              <li><b>Defense</b> {pokemon.defense}</li>
              <li>
                <b>Moves</b>
                <ul>
                  {pokemon.moves.map(move =>
                    <li key={move}>{move}</li>
                  )}
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <h2>Items</h2>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Happiness</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {pokemon.items.map(item =>
                  <tr key={item.price * item.happiness}>
                    <td>
                      <img className="item-image" alt={item.imageUrl} src={item.imageUrl} />
                    </td>
                    <td>{item.name}</td>
                    <td className="centered">{item.happiness}</td>
                    <td className="centered">${item.price}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    detail: state.pokemon.detail
  }
}
const mapDispatchToProps = dispatch => ({
  getDetail: (id) => dispatch(getDetail(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetailRedux);
