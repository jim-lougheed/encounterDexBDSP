import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Walk from "../Walk/Walk";
import Surf from "../Surf/Surf";
import Fishing from "../Fishing/Fishing";

function PokemonListing({ version, route, setRoute }) {
  const params = useParams();

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    setRoute(params.location);
    getPokemon();
  }, [route]);

  const getPokemon = async () => {
    console.log("test");
    const {
      data: { pokemon_encounters },
    } = await axios.get(`http://localhost:8080/${route}`);
    const filteredPokemon = filterByVersion(pokemon_encounters);
    setPokemon(filteredPokemon);
  };

  const filterByVersion = (pokemon) => {
    const filtered = pokemon
      .filter((pokemon) => {
        return pokemon.version_details.some((details) => {
          return details.version.name === version;
        });
      })
      .map((pokemon) => {
        let pokemonDetails = {};
        pokemonDetails.name = pokemon.pokemon.name;
        pokemonDetails.versionDetails = pokemon.version_details.filter(
          (detail) => {
            return detail.version.name === version;
          }
        );
        return pokemonDetails;
      });
    return filtered;
  };

  pokemon && console.log(pokemon);

  const filterByMethod = (pokemon, method) => {
    return pokemon.filter((pokemon) => {
      return pokemon.versionDetails[0].encounter_details.some((details) => {
        return details.method.name === method;
      });
    });
  };

  const walkPokemon = pokemon && filterByMethod(pokemon, "walk");
  const surfPokemon = pokemon && filterByMethod(pokemon, "surf");
  const oldRodPokemon = pokemon && filterByMethod(pokemon, "old-rod");
  const goodRodPokemon = pokemon && filterByMethod(pokemon, "good-rod");
  const superRodPokemon = pokemon && filterByMethod(pokemon, "super-rod");

  return (
    <>
      <Walk pokemon={walkPokemon} />
      <Surf pokemon={surfPokemon} />
      <Fishing
        oldRodPokemon={oldRodPokemon}
        goodRodPokemon={goodRodPokemon}
        superRodPokemon={superRodPokemon}
      />
    </>
  );
}

export default PokemonListing;
