import Sprite from "../Sprite/Sprite";
import EncounterDetails from "../EncounterDetails/EncounterDetails";

import "./SwarmWalk.scss";

function SwarmWalk({ pokemon }) {
  return (
    <>
      <div className="walk-pokemon__container">
        {pokemon && pokemon.length !== 0 ? (
          pokemon.map((pokemon, i) => {
            return (
              <div key={i} className="walk-pokemon__card">
                <h2 className="walk-pokemon__name">
                  {pokemon.name[0].toUpperCase() + pokemon.name.substr(1)}
                </h2>
                <Sprite pokemonName={pokemon.name} />
                <EncounterDetails pokemon={pokemon} />
              </div>
            );
          })
        ) : (
          <h2 className="none-avl">No Pokémon available by swarm</h2>
        )}
      </div>
    </>
  );
}

export default SwarmWalk;
