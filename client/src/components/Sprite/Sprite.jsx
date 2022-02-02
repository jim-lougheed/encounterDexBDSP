import { useState, useEffect } from "react";
import axios from "axios";

function Sprite({ pokemonName }) {
  const [pokemonSprite, setPokemonSprite] = useState(null);
  useEffect(() => {
    getPokemonSprite();
  }, [pokemonName]);

  const getPokemonSprite = async () => {
    const { data } = await axios.get(
      `http://localhost:8080/pokemonPic/${pokemonName}`
    );
    setPokemonSprite(data.sprites.front_default);
  };

  return <img src={pokemonSprite}></img>;
}

export default Sprite;
