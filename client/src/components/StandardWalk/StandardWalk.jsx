import Sprite from "../Sprite/Sprite";
import EncounterDetails from "../EncounterDetails/EncounterDetails";

import "./StandardWalk.scss";

function StandardWalk({ pokemon }) {
  console.log(pokemon);
  return (
    <>
      <div className="walk-pokemon__container">
        {pokemon &&
          pokemon.map((pokemon) => {
            return (
              <div className="walk-pokemon__card">
                <h2 className="walk-pokemon__name">
                  {pokemon.pokemon.name[0].toUpperCase() +
                    pokemon.pokemon.name.substr(1)}
                </h2>
                <Sprite pokemonName={pokemon.pokemon.name} />
                <EncounterDetails pokemon={pokemon} />
              </div>
            );
          })}
      </div>
    </>
  );
}

export default StandardWalk;
