import { useEffect, useState } from "react";
import axios from "axios";

import Walk from "../Walk/Walk";
import Surf from "../Surf/Surf";

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

  // const filterWalk = (pokemon) => {
  //   return pokemon.filter((p) => {
  //     return p.version_details[1].encounter_details.some((detail) => {
  //       return detail.method.name === "walk";
  //     });
  //   });
  // };

  const filterMethod = (pokemon, method) => {
    return pokemon.filter((p) => {
      if (p.version_details[0].version.name === "pearl") {
        return p.version_details[0].encounter_details.some((detail) => {
          return detail.method.name === method;
        });
      } else {
        return p.version_details[1].encounter_details.some((detail) => {
          return detail.method.name === method;
        });
      }
    });
  };

  const walkPokemon = pokemon && filterMethod(pokemon, "walk");
  const surfPokemon = pokemon && filterMethod(pokemon, "surf");

  return (
    <>
      <Walk pokemon={walkPokemon} />
      <Surf pokemon={surfPokemon} />
    </>
  );
}

export default PokemonListing;
