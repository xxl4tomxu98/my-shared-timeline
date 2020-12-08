import React from "../pokedex-react-redux-sol/frontend/src/node_modules/react";
import { NavLink, Route } from "../pokedex-react-redux-sol/frontend/src/node_modules/react-router-dom";
import PokemonDetail from "./PokemonDetail";
import LogoutButton from "./LogoutButton";

function PokemonBrowser({ pokemon, updateUser }) {
  if (!pokemon) {
    return null;
  }
  return (
    <main>
      <LogoutButton updateUser={updateUser} />
      <nav>
        {pokemon.map((poke) => {
          return (
            <NavLink key={poke.name} to={`/pokemon/${poke.id}`}>
              <div className="nav-entry">
                <div
                  className="nav-entry-image"
                  style={{ backgroundImage: `url('${poke.imageUrl}')` }}
                ></div>
                <h1>{poke.name}</h1>
              </div>
            </NavLink>
          );
        })}
      </nav>
      <Route path="/pokemon/:id" component={PokemonDetail} />
    </main>
  );
}

export default PokemonBrowser;
