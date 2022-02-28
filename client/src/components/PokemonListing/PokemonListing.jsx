import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Walk from "../Walk/Walk";
import Surf from "../Surf/Surf";
import Fishing from "../Fishing/Fishing";

import { API_URL } from "../../config";

function PokemonListing({ version, route, setRoute }) {
  const params = useParams();

  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    setRoute(params.location);
    getPokemon();
  }, [route]);

  const getPokemon = async () => {
    const {
      data: { pokemon_encounters },
    } = await axios.get(`${API_URL}/${route}`);
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

  const normalConditions = (pokemon) => {
    return pokemon.filter((pokemon) => {
      return pokemon.versionDetails[0].encounter_details.some((detail) => {
        return (
          detail.condition_values[0]?.name !== "radar-on" &&
          detail.condition_values[0]?.name !== "swarm-yes" &&
          detail.condition_values[0]?.name !== "slot2-ruby" &&
          detail.condition_values[0]?.name !== "slot2-sapphire" &&
          detail.condition_values[0]?.name !== "slot2-firered" &&
          detail.condition_values[0]?.name !== "slot2-emerald" &&
          detail.condition_values[0]?.name !== "slot2-leafgreen"
        );
      });
    });
  };
  const swarmCondition = (pokemon) => {
    return pokemon.filter((pokemon) => {
      return pokemon.versionDetails[0].encounter_details.some((detail) => {
        return detail.condition_values[0]?.name === "swarm-yes";
      });
    });
  };
  const radarCondition = (pokemon) => {
    return pokemon.filter((pokemon) => {
      return pokemon.versionDetails[0].encounter_details.some((detail) => {
        return detail.condition_values[0]?.name === "radar-on";
      });
    });
  };

  const standardWalkPokemon = walkPokemon && normalConditions(walkPokemon);
  const swarmPokemon = walkPokemon && swarmCondition(walkPokemon);
  const radarPokemon = walkPokemon && radarCondition(walkPokemon);

  return (
    <>
      <Walk
        standardWalkPokemon={standardWalkPokemon}
        swarmPokemon={swarmPokemon}
        radarPokemon={radarPokemon}
      />
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
