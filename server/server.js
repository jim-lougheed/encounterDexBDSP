const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");
const PORT = process.env.PORT || 8080;

app.use(cors());

app.get("/:route", (req, res) => {
  axios
    .get(
      `https://pokeapi.co/api/v2/location-area/sinnoh-${req.params.route}-area/`
    )
    .then(({ data }) => {
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(PORT, () => console.log("Server running on port 3000"));
