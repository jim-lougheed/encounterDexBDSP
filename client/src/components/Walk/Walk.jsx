import StandardWalk from "../StandardWalk/StandardWalk";

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
          return (detail.condition_values =
            [] ||
            (detail.condition_values[0] &&
              (detail.condition_values[0].name === condition1 ||
                detail.condition_values[0].name === condition2 ||
                detail.condition_values[0].name === condition3 ||
                detail.condition_values[0].name === condition4 ||
                detail.condition_values[0].name === condition5)));
        });
      } else {
        return p.version_details[1].encounter_details.some((detail) => {
          return (detail.condition_values =
            [] ||
            (detail.condition_values[0] &&
              (detail.condition_values[0].name === condition1 ||
                detail.condition_values[0].name === condition2 ||
                detail.condition_values[0].name === condition3 ||
                detail.condition_values[0].name === condition4 ||
                detail.condition_values[0].name === condition5)));
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
      <h3>Walk</h3>
      <StandardWalk pokemon={standardWalkPokemon} />
      {/* <h3>{pokemon.pokemon.name}</h3>
      <img src={pokemonSprite}></img>
      <>
        {pokemon.version_details[1]
          ? pokemon.version_details[1].encounter_details.map((detail) => {
              return (
                <li>
                  <p>Method: {detail.method.name}</p>
                  <p>
                    Condition:
                    {detail.condition_values[0] != undefined
                      ? detail.condition_values[0].name
                      : null}
                  </p>
                </li>
              );
            })
          : pokemon.version_details[0].encounter_details.map((detail) => {
              return (
                <li>
                  <p>Method: {detail.method.name}</p>
                  <p>
                    Condition:{" "}
                    {detail.condition_values[0] != undefined
                      ? detail.condition_values[0].name
                      : null}
                  </p>
                </li>
              );
            })} */}
    </>
  );
}

export default Walk;
