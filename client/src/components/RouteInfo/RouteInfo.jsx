import { useEffect, useState } from "react";
import { BrowserRouter, useParams } from "react-router-dom";
import axios from "axios";

import PokemonListing from "../PokemonListing/PokemonListing";
import Selection from "../Selection/Selection";
import Legend from "../Legend/Legend";
import VersionButtons from "../VersionButtons/VersionButtons";

import "./RouteInfo.scss";

function RouteInfo() {
  const params = useParams();
  const [route, setRoute] = useState(null);
  const [routeName, setRouteName] = useState(null);
  const [version, setVersion] = useState(null);
  console.log(params);

  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    getPokemon();
    setVersion(params.version);
  }, [route, version]);

  const getPokemon = async () => {
    const { data } = await axios.get(`http://localhost:8080/${route}`);
    setPokemon(data.pokemon_encounters);
  };

  const filteredPokemon =
    pokemon &&
    pokemon.filter((pokemon) => {
      return pokemon.version_details.some((detail) => {
        return detail.version.name === version;
      });
    });
  console.log(route, routeName);

  return (
    <>
      <div className="route__container">
        <VersionButtons />

        <div className="route__header route__header--desktop">
          <h1 className="route__title">
            {routeName ? routeName : "Select an area"}
          </h1>
          <Selection
            route={route}
            setRoute={setRoute}
            setRouteName={setRouteName}
            version={version}
          />
        </div>
        <Legend />
      </div>
      <div className="hidden-background">
        <div className="route__header route__header--mobile-tablet">
          <h1 className="route__title">
            {routeName ? routeName : "Select an area"}
          </h1>
          <Selection
            route={route}
            setRoute={setRoute}
            setRouteName={setRouteName}
            version={version}
          />
        </div>
      </div>
      <PokemonListing pokemon={filteredPokemon} version={version} />
    </>
  );
}

export default RouteInfo;
