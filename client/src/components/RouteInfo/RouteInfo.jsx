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

  return (
    <>
      <h1>Route Info</h1>
      <p>{route}</p>
      <ul>
        {pokemon &&
          pokemon.map((pokemon) => {
            console.log(pokemon);
            {
              /* if (pokemon.version_details.version.name === "pearl") { */
            }
            return <li>{pokemon.pokemon.name}</li>;
            {
              /* } */
            }
          })}
      </ul>
    </>
  );
}

export default RouteInfo;
