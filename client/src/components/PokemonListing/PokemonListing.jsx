import { useEffect, useState } from "react";
import axios from "axios";

import Walk from "../Walk/Walk";

function PokemonListing({ pokemon }) {
  // const [pokemonSprite, setPokemonSprite] = useState(null);
  // useEffect(() => {
  //   getPokemonSprite();
  // }, []);

  // const getPokemonSprite = async () => {
  //   const { data } = await axios.get(
  //     `http://localhost:8080/pokemonPic/${pokemon.pokemon.name}`
  //   );
  //   setPokemonSprite(data.sprites.front_default);
  // };

  const filterWalk = (pokemon) => {
    return pokemon.filter((p) => {
      return p.version_details[1].encounter_details.filter((detail) => {
        return detail.method.name === "walk";
      });
    });
  };

  const walkPokemon = pokemon && filterWalk(pokemon);
  console.log(walkPokemon);

  return (
    <>
      <Walk pokemon={walkPokemon} />
    </>
  );
}

export default PokemonListing;
