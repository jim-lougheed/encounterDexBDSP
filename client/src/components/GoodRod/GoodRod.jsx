import Sprite from "../Sprite/Sprite";
import EncounterDetails from "../EncounterDetails/EncounterDetails";

import "./GoodRod.scss";

function GoodRod({ pokemon }) {
  return (
    <>
      <div className="fishing-pokemon__container">
        {pokemon && pokemon.length !== 0 ? (
          pokemon.map((pokemon, i) => {
            return (
              <div key={i} className="fishing-pokemon__card">
                <h2 className="fishing-pokemon__name">
                  {pokemon.name[0].toUpperCase() + pokemon.name.substr(1)}
                </h2>
                <Sprite pokemonName={pokemon.name} />
                <EncounterDetails pokemon={pokemon} />
              </div>
            );
          })
        ) : (
          <h2 className="none-avl">No Pokémon available by Good Rod</h2>
        )}
      </div>
    </>
  );
}

export default GoodRod;
