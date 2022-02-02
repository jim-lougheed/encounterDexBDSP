import StandardWalk from "../StandardWalk/StandardWalk";
import PixelBanner from "../PixelBanner/PixelBanner";
import "./Walk.scss";

function Walk({ pokemon }) {
  const filterCondition = (
    pokemon,
    condition1,
    condition2,
    condition3,
    condition4,
    condition5
  ) => {
    return pokemon.filter((p) => {
      if (p.version_details[0].version.name === "pearl") {
        return p.version_details[0].encounter_details.some((detail) => {
          return detail.condition_values.some((value) => {
            return (
              value.name !== "radar-on" &&
              value.name !== "swarm-yes" &&
              value.name !== "slot2-ruby" &&
              value.name !== "slot2-sapphire" &&
              value.name !== "slot2-firered" &&
              value.name !== "slot2-emerald" &&
              value.name !== "slot2-leafgreen"
            );
          });
        });
      } else {
        return p.version_details[1].encounter_details.some((detail) => {
          return detail.condition_values.some((value) => {
            return (
              value.name !== "radar-on" &&
              value.name !== "swarm-yes" &&
              value.name !== "slot2-ruby" &&
              value.name !== "slot2-sapphire" &&
              value.name !== "slot2-firered" &&
              value.name !== "slot2-emerald" &&
              value.name !== "slot2-leafgreen"
            );
          });
        });
      }
    });
  };

  const standardWalkPokemon =
    pokemon &&
    filterCondition(
      pokemon,
      "swarm-no",
      "radar-off",
      "time-morning",
      "time-day",
      "time-night"
    );

  console.log(pokemon);
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
