import { useState, useEffect } from "react";
import axios from "axios";

import { API_URL } from "../../config";

import "./Sprite.scss";

function Sprite({ pokemonName }) {
  const [pokemonSprite, setPokemonSprite] = useState(null);
  useEffect(() => {
    getPokemonSprite();
  }, [pokemonName]);

  const getPokemonSprite = async () => {
    const { data } = await axios.get(`${API_URL}/pokemonPic/${pokemonName}`);
    setPokemonSprite(data.sprites.front_default);
  };

  return <img className="pokemon-sprite" src={pokemonSprite}></img>;
}

export default Sprite;
