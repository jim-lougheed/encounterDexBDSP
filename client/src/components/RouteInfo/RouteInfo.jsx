import { useEffect, useState } from "react";
import axios from "axios";

import PokemonListing from "../PokemonListing/PokemonListing";

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
            return <PokemonListing pokemon={pokemon} />;
          })}
      </ul>
    </>
  );
}

export default RouteInfo;
