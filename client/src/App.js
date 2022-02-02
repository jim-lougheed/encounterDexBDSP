import { useState } from "react";

import Selection from "./components/Selection/Selection";
import RouteInfo from "./components/RouteInfo/RouteInfo";
import "./App.scss";

import Logo from "./assets/logo/encounterDex.png";

function App() {
  const [route, setRoute] = useState(null);
  const [routeName, setRouteName] = useState(null);

  return (
    <div className="App">
      <header className="header__app">
        <a href="/" className="header__logo">
          <img
            className="header__image"
            src={Logo}
            alt="encounter dex logo"
          ></img>
        </a>
      </header>
      <RouteInfo
        route={route}
        routeName={routeName}
        setRoute={setRoute}
        setRouteName={setRouteName}
      />
    </div>
  );
}

export default App;
