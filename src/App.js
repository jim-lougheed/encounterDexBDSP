<<<<<<< HEAD:client/src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import RouteInfo from "./components/RouteInfo/RouteInfo";
import Footer from "./components/Footer/Footer";

import "./App.scss";

import Logo from "./assets/logo/encounterDex.png";
import BackArrow from "./assets/images/chevron-left-solid-1.png";
import Pokeball from "./assets/sprites/pokeball.png";
=======
import Selection from "./components/Selection/Selection";
import "./App.css";
>>>>>>> b9e603c79cab233061ab25d8f748adeb1ecde59a:src/App.js

function App() {
  return (
    <div className="App">
<<<<<<< HEAD:client/src/App.js
      <header className="header__app">
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
        <a href="/" className="header__logo">
          <img
            className="header__image"
            src={Logo}
            alt="encounter dex logo"
          ></img>
        </a>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:version/*" element={<RouteInfo />}>
            {/* <Route path=":route" element={<PokemonListing />} /> */}
          </Route>
          {/* <Route path="/:version/:route" element={<RouteInfo />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
=======
      <header className="App-header">EncounterDex</header>
      <Selection />
>>>>>>> b9e603c79cab233061ab25d8f748adeb1ecde59a:src/App.js
    </div>
  );
}

export default App;