import React, { useState, useEffect } from 'react';

const PokemonDetail = (props) => {

  const [detail, setDetail] = useState(null);
  const id = props.match.params.id;

  useEffect(() => {
    const loadPokemon = async () => {
      const response = await fetch(`/api/pokemon/${id}`);
      const data = await response.json();
      //debugger;
      if (response.ok) {
        setDetail( data );
      }
    }
    loadPokemon();
  }, [id]);



    if (!detail)
      return null;

    return (
      <div className="pokemon-detail">
        <div className={`pokemon-detail-image-background`}
             style={{backgroundImage: `url('/images/${detail.type}.jpg')`}}>
          <div className="pokemon-detail-image"
               style={{backgroundImage: `url('${detail.imageUrl}')`}}>
          </div>
          <h1 className="bigger">{detail.name}</h1>
        </div>
        <div className="pokemon-detail-lists">
          <div>
            <h2>Information</h2>
            <ul>
              <li><b>Type</b> {detail.type}</li>
              <li><b>Attack</b> {detail.attack}</li>
              <li><b>Defense</b> {detail.defense}</li>
              <li>
                <b>Moves</b>
                <ul>
                  {detail.moves.map(move =>
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
                {detail.items.map(item =>
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

export default PokemonDetail;
