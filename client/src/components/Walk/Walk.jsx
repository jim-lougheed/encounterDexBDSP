import StandardWalk from "../StandardWalk/StandardWalk";
import PixelBanner from "../PixelBanner/PixelBanner";
import "./Walk.scss";

function Walk({ pokemon }) {
  const normalConditions = (pokemon) => {
    return pokemon.filter((pokemon) => {
      return pokemon.versionDetails[0].encounter_details.some((detail) => {
        return (
          detail.condition_values[0]?.name !== "radar-on" &&
          detail.condition_values[0]?.name !== "swarm-yes" &&
          detail.condition_values[0]?.name !== "slot2-ruby" &&
          detail.condition_values[0]?.name !== "slot2-sapphire" &&
          detail.condition_values[0]?.name !== "slot2-firered" &&
          detail.condition_values[0]?.name !== "slot2-emerald" &&
          detail.condition_values[0]?.name !== "slot2-leafgreen"
        );
      });
    });
  };
  const swarmCondition = (pokemon) => {
    return pokemon.filter((pokemon) => {
      return pokemon.versionDetails[0].encounter_details.some((detail) => {
        return detail.condition_values[0]?.name === "swarm-yes";
      });
    });
  };
  const radarCondition = (pokemon) => {
    return pokemon.filter((pokemon) => {
      return pokemon.versionDetails[0].encounter_details.some((detail) => {
        return detail.condition_values[0]?.name === "radar-on";
      });
    });
  };

  pokemon && console.log(normalConditions(pokemon), swarmCondition(pokemon));
  const standardWalkPokemon = pokemon && normalConditions(pokemon);
  const swarmPokemon = pokemon && swarmCondition(pokemon);
  const radarPokemon = pokemon && radarCondition(pokemon);

  return (
    <>
      <div className="walk-container">
        <PixelBanner banner="walk"></PixelBanner>
        <StandardWalk pokemon={standardWalkPokemon} />
      </div>
    </>
  );
}

export default Walk;
