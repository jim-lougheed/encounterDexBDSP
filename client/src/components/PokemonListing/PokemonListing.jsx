import { useEffect, useState } from "react";
import axios from "axios";

function PokemonListing({ pokemon }) {
  const [pokemonListing, setPokemonListing] = useState(null);
  useEffect(() => {
    getPokemonListing();
  }, []);

  const getPokemonListing = async () => {
    const { data } = await axios.get(
      `http://localhost:8080/pokemonPic/${pokemon.pokemon.name}`
    );
    setPokemonListing(data.sprites.front_default);
  };

  return (
    <li>
      <h3>{pokemon.pokemon.name}</h3>
      <img src={pokemonListing}></img>
      <ul>
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
            })}
      </ul>
    </li>
  );
}

export default PokemonListing;
