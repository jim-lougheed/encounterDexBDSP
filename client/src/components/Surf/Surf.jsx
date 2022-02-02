import Sprite from "../Sprite/Sprite";
import EncounterDetails from "../EncounterDetails/EncounterDetails";

import "./Surf.scss";

function Surf({ pokemon }) {
  console.log(pokemon);
  return (
    <>
      <div className="surf-container">
        <h3>Surf</h3>
        <div className="surf-pokemon__container">
          {pokemon &&
            pokemon.map((pokemon) => {
              return (
                <div className="surf-pokemon__card">
                  <p className="surf-pokemon__name">
                    {pokemon.pokemon.name[0].toUpperCase() +
                      pokemon.pokemon.name.substr(1)}
                  </p>
                  <Sprite pokemonName={pokemon.pokemon.name} />
                  <EncounterDetails pokemon={pokemon} />
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Surf;
