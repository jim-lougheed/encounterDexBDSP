import { useEffect, useState } from "react";
import { BrowserRouter, useParams } from "react-router-dom";
import axios from "axios";

import PokemonListing from "../PokemonListing/PokemonListing";
import Selection from "../Selection/Selection";
import Legend from "../Legend/Legend";
import VersionButtons from "../VersionButtons/VersionButtons";

import Piplup from "../../assets/images/piplup.png";
import Chimchar from "../../assets/images/chimchar.png";
import Turtwig from "../../assets/images/turtwig-flip.png";
import Palkia from "../../assets/images/palkia-flip.png";
import Dialga from "../../assets/images/dialga.png";
import Houndoom from "../../assets/images/houndoom.png";
import Girafarig from "../../assets/images/girafarig-flip.png";
import Crobat from "../../assets/images/crobat.png";
import Rhydon from "../../assets/images/rhydon.png";
import Luxray from "../../assets/images/luxray-flip.png";

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
        {/* <img className="banner-pokemon banner-pokemon--1" src={Turtwig} />
        <img className="banner-pokemon banner-pokemon--2" src={Girafarig} />
        <img className="banner-pokemon banner-pokemon--3" src={Houndoom} />
        <img className="banner-pokemon banner-pokemon--4" src={Luxray} />
        <img className="banner-pokemon banner-pokemon--5" src={Dialga} />
        <img className="banner-pokemon banner-pokemon--6" src={Palkia} />
        <img className="banner-pokemon banner-pokemon--7" src={Chimchar} />
        <img className="banner-pokemon banner-pokemon--8" src={Rhydon} />
        <img className="banner-pokemon banner-pokemon--9" src={Crobat} />
        <img className="banner-pokemon banner-pokemon--10" src={Piplup} /> */}
        <div className="route__header">
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
      <PokemonListing pokemon={filteredPokemon} version={version} />
    </>
  );
}

export default RouteInfo;
