import { useEffect, useState } from "react";
import axios from "axios";

function RouteInfo({ route }) {
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    getPokemon();
  }, [route]);

  const getPokemon = async () => {
    const { data } = await axios.get(`http://localhost:8080/${route}`);
    setPokemon(data.pokemon_encounters);
  };

  const filteredPokemon =
    pokemon &&
    pokemon.filter((pokemon) => {
      return pokemon.version_details.some((detail) => {
        return detail.version.name === "pearl";
      });
    });
  console.log(filteredPokemon);

  return (
    <>
      <h1>Route Info</h1>
      <p>{route}</p>
      <ul>
        {filteredPokemon &&
          filteredPokemon.map((pokemon) => {
            console.log(pokemon);
            return (
              <li>
                <h3>{pokemon.pokemon.name}</h3>
                <ul>
                  {pokemon.version_details[1]
                    ? pokemon.version_details[1].encounter_details.map(
                        (detail) => {
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
                        }
                      )
                    : pokemon.version_details[0].encounter_details.map(
                        (detail) => {
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
                        }
                      )}
                </ul>
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default RouteInfo;
