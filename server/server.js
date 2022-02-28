const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
const PORT = process.env.PORT || 8080;

app.use(cors());

app.get("/:route", (req, res) => {
  axios
    .get(`https://pokeapi.co/api/v2/location-area/${req.params.route}/`)
    .then(({ data }) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get("/pokemonPic/:pokemonName", (req, res) => {
  axios
    .get(`https://pokeapi.co/api/v2/pokemon/${req.params.pokemonName}`)
    .then(({ data }) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
