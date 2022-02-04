import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Selection from "./components/Selection/Selection";
import Home from "./components/Home/Home";
import RouteInfo from "./components/RouteInfo/RouteInfo";
import PokemonListing from "./components/PokemonListing/PokemonListing";
import Footer from "./components/Footer/Footer";

import "./App.scss";

import Logo from "./assets/logo/encounterDex.png";

function App() {
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:version" element={<RouteInfo />} />
          {/* <Route path="/:version/:route" element={<RouteInfo />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
