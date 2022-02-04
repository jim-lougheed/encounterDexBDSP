import { useEffect, useState } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import axios from "axios";

import PokemonListing from "../PokemonListing/PokemonListing";
import Selection from "../Selection/Selection";
import Legend from "../Legend/Legend";
import VersionButtons from "../VersionButtons/VersionButtons";

import "./RouteInfo.scss";

function RouteInfo() {
  const params = useParams();

  const [version, setVersion] = useState(null);
  const [route, setRoute] = useState(null);
  const [routeName, setRouteName] = useState(null);

  useEffect(() => {
    setVersion(params.version);
  }, [params]);
  console.log(version, route, routeName, params);

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
      {/* <PokemonListing pokemon={filteredPokemon} version={version} /> */}
    </>
  );
}

export default RouteInfo;
