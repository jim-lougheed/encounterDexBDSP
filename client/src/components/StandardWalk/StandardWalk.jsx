import Sprite from "../Sprite/Sprite";
import EncounterDetails from "../EncounterDetails/EncounterDetails";

import "./StandardWalk.scss";

function StandardWalk({ pokemon, version }) {
  console.log(pokemon);
  return (
    <>
      <div className="walk-pokemon__container">
        {pokemon && pokemon.length !== 0 ? (
          pokemon.map((pokemon) => {
            return (
              <div className="walk-pokemon__card">
                <h2 className="walk-pokemon__name">
                  {pokemon.pokemon.name[0].toUpperCase() +
                    pokemon.pokemon.name.substr(1)}
                </h2>
                <Sprite pokemonName={pokemon.pokemon.name} />
                <EncounterDetails pokemon={pokemon} version={version} />
              </div>
            );
          })
        ) : (
          <h2>No Pokémon available by walking</h2>
        )}
      </div>
    </>
  );
}

export default StandardWalk;
