import { useEffect, useState } from "react";
import axios from "axios";

import Walk from "../Walk/Walk";
import Surf from "../Surf/Surf";

function PokemonListing({ pokemon, version }) {
  console.log();
  const filterMethod = (pokemon, method) => {
    return pokemon.filter((p) => {
      if (p.version_details[0].version.name === version) {
        return p.version_details[0].encounter_details.some((detail) => {
          return detail.method.name === method;
        });
      } else if (p.version_details[1].version.name === version) {
        return p.version_details[1].encounter_details.some((detail) => {
          return detail.method.name === method;
        });
      } else if (p.version_details[2].version.name === version) {
        return p.version_details[2].encounter_details.some((detail) => {
          return detail.method.name === method;
        });
      }
    });
  };

  const walkPokemon = pokemon && filterMethod(pokemon, "walk");
  const surfPokemon = pokemon && filterMethod(pokemon, "surf");

  return (
    <>
      <Walk pokemon={walkPokemon} version={version} />
      <Surf pokemon={surfPokemon} version={version} />
    </>
  );
}

export default PokemonListing;
