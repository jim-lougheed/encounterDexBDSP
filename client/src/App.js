import { useState } from "react";

import Selection from "./components/Selection/Selection";
import RouteInfo from "./components/RouteInfo/RouteInfo";
import "./App.scss";

import Logo from "./assets/logo/encounterDex.png";

function App() {
  const [route, setRoute] = useState(null);

  return (
    <div className="App">
      <header className="header__app">
        <a className="header__logo">
          <img
            className="header__image"
            src={Logo}
            alt="encounter dex logo"
          ></img>
        </a>
      </header>
      <Selection setRoute={setRoute} />
      <RouteInfo route={route} />
    </div>
  );
}

export default App;
