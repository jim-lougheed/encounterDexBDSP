import { useState } from "react";

import PixelBanner from "../PixelBanner/PixelBanner";
import StandardWalk from "../StandardWalk/StandardWalk";
import PokeRadarWalk from "../PokeRadarWalk/PokeRadarWalk";
import SwarmWalk from "../SwarmWalk/SwarmWalk";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import "./Walk.scss";

function Walk({ pokemon }) {
  const normalConditions = (pokemon) => {
    return pokemon.filter((pokemon) => {
      return pokemon.versionDetails[0].encounter_details.some((detail) => {
        return (
          detail.condition_values[0]?.name !== "radar-on" &&
          detail.condition_values[0]?.name !== "swarm-yes" &&
          detail.condition_values[0]?.name !== "slot2-ruby" &&
          detail.condition_values[0]?.name !== "slot2-sapphire" &&
          detail.condition_values[0]?.name !== "slot2-firered" &&
          detail.condition_values[0]?.name !== "slot2-emerald" &&
          detail.condition_values[0]?.name !== "slot2-leafgreen"
        );
      });
    });
  };
  const swarmCondition = (pokemon) => {
    return pokemon.filter((pokemon) => {
      return pokemon.versionDetails[0].encounter_details.some((detail) => {
        return detail.condition_values[0]?.name === "swarm-yes";
      });
    });
  };
  const radarCondition = (pokemon) => {
    return pokemon.filter((pokemon) => {
      return pokemon.versionDetails[0].encounter_details.some((detail) => {
        return detail.condition_values[0]?.name === "radar-on";
      });
    });
  };

  pokemon && console.log(normalConditions(pokemon), swarmCondition(pokemon));
  const standardWalkPokemon = pokemon && normalConditions(pokemon);
  const swarmPokemon = pokemon && swarmCondition(pokemon);
  const radarPokemon = pokemon && radarCondition(pokemon);

  const [displayedTab, setDisplayedTab] = useState(
    <StandardWalk pokemon={standardWalkPokemon} />
  );

  const handleTab = (e, displayTab) => {
    e.preventDefault();
    setDisplayedTab(displayTab);
  };

  return (
    <>
      <div className="walk-container">
        <PixelBanner banner="walk"></PixelBanner>
        <div className="method__banner">
          <div className="sprite__walk"></div>
          <div className="method__header method__header--walk">
            <h3 className="method__title">Walking</h3>
          </div>
          <div className="sprite__walk"></div>
        </div>
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={<StandardWalk pokemon={standardWalkPokemon} />}
            onChange={handleTab}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab
              value={<StandardWalk pokemon={standardWalkPokemon} />}
              label="Regular"
            />
            <Tab value={<SwarmWalk pokemon={swarmPokemon} />} label="Swarm" />
            <Tab
              value={<PokeRadarWalk pokemon={radarPokemon} />}
              label="PokeRadar"
            />
          </Tabs>
        </Box>
        {displayedTab}
        {/* <StandardWalk pokemon={standardWalkPokemon} /> */}
      </div>
    </>
  );
}

export default Walk;
