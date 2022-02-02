import { useEffect, useState } from "react";
import axios from "axios";

import PokemonListing from "../PokemonListing/PokemonListing";
import Selection from "../Selection/Selection";

import "./RouteInfo.scss";

function RouteInfo({ route, routeName, setRoute, setRouteName }) {
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
  console.log(route, routeName);

  return (
    <>
      <div className="route__header">
        <h1 className="route__title">
          {routeName ? routeName : "Select an area"}
        </h1>
        <Selection setRoute={setRoute} setRouteName={setRouteName} />
      </div>

      <PokemonListing pokemon={filteredPokemon} />
    </>
  );
}

export default RouteInfo;
