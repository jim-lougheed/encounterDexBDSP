import { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import axios from "axios";

import PokemonListing from "../PokemonListing/PokemonListing";
import Selection from "../Selection/Selection";
import Legend from "../Legend/Legend";
import VersionButtons from "../VersionButtons/VersionButtons";

import BackArrow from "../../assets/images/chevron-left-solid-1.png";
import Pokeball from "../../assets/sprites/pokeball.png";

import "./RouteInfo.scss";

function RouteInfo() {
  const params = useParams();

  const [version, setVersion] = useState(null);
  const [route, setRoute] = useState(null);
  const [routeName, setRouteName] = useState(null);

  useEffect(() => {
    setVersion(params.version);
  }, [params]);

  return (
    <>
      <a href="/" className="header__back-button">
        <img
          className="header__button-arrow"
          src={BackArrow}
          alt="back arrow"
        ></img>
        <img
          className="header__button-pokeball"
          src={Pokeball}
          alt="pokeball"
        ></img>
        <p className="header__button-text">Go back</p>
      </a>
      <div className="route__container">
        <div className="route__version-buttons-container">
          <VersionButtons />
        </div>
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
      <div
        className={`hidden-background ${
          !route && "hidden-background--no-route"
        }`}
      >
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
      <Routes>
        <Route
          path=":location"
          element={
            <PokemonListing
              route={route}
              setRoute={setRoute}
              version={version}
            />
          }
        />
      </Routes>
    </>
  );
}

export default RouteInfo;
