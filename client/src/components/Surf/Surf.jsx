function Surf({ pokemon }) {
  console.log(pokemon);
  return (
    <>
      <h3>Surf</h3>
      <ul>
        {pokemon &&
          pokemon.map((pokemon) => {
            return (
              <li>
                <p>{pokemon.pokemon.name}</p>
              </li>
            );
          })}
      </ul>
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

export default Surf;
