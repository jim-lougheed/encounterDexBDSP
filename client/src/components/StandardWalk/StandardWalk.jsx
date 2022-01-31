import Sprite from "../Sprite/Sprite";
import EncounterDetails from "../EncounterDetails/EncounterDetails";

import "./StandardWalk.scss";

function StandardWalk({ pokemon }) {
  console.log(pokemon);
  return (
    <>
      <h3>Standard</h3>
      <div className="pokemon__container">
        {pokemon &&
          pokemon.map((pokemon) => {
            return (
              <div className="pokemon__card">
                <p>{pokemon.pokemon.name}</p>
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
