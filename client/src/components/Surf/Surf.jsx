import Sprite from "../Sprite/Sprite";
import EncounterDetails from "../EncounterDetails/EncounterDetails";
import PixelBanner from "../PixelBanner/PixelBanner";

import "./Surf.scss";

function Surf({ pokemon }) {
  console.log(pokemon);
  return (
    <>
      <div className="surf-container">
        <PixelBanner banner="surf"></PixelBanner>

        <div className="surf-pokemon__container">
          {pokemon && pokemon.length !== 0 ? (
            pokemon.map((pokemon) => {
              return (
                <div className="surf-pokemon__card">
                  <p className="surf-pokemon__name">
                    {pokemon.name[0].toUpperCase() + pokemon.name.substr(1)}
                  </p>
                  <Sprite pokemonName={pokemon.name} />
                  <EncounterDetails pokemon={pokemon} />
                </div>
              );
            })
          ) : (
            <h2>No Pokémon available by surfing</h2>
          )}
        </div>
      </div>
    </>
  );
}

export default Surf;
