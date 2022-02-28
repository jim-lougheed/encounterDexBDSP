import { useState, useEffect } from "react";

import PixelBanner from "../PixelBanner/PixelBanner";
import StandardWalk from "../StandardWalk/StandardWalk";
import PokeRadarWalk from "../PokeRadarWalk/PokeRadarWalk";
import SwarmWalk from "../SwarmWalk/SwarmWalk";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import "./Walk.scss";

function Walk({ standardWalkPokemon, swarmPokemon, radarPokemon }) {
  const [displayedTab, setDisplayedTab] = useState(0);

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
        <Box
          sx={{
            width: "fit-content",
            maxWidth: "330px",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            margin: "0 auto",
          }}
        >
          <Tabs
            value={displayedTab}
            onChange={handleTab}
            textColor="inherit"
            aria-label="method tabs"
            TabIndicatorProps={{
              sx: {
                bgcolor: "red",
                height: "5px",
              },
            }}
          >
            <Tab
              value={0}
              label="Standard"
              sx={{
                color: "white",
                fontSize: "1rem",
                padding: "0 0.75rem",
                fontWeight: "bold",
              }}
            />
            <Tab
              value={1}
              label="Swarm"
              sx={{
                color: "white",
                fontSize: "1rem",
                padding: "0 0.75rem",
                fontWeight: "bold",
              }}
            />
            <Tab
              value={2}
              label="PokéRadar"
              sx={{
                color: "white",
                fontSize: "1rem",
                padding: "0 0.75rem",
                fontWeight: "bold",
              }}
            />
          </Tabs>
        </Box>
        {displayedTab === 0 && <StandardWalk pokemon={standardWalkPokemon} />}
        {displayedTab === 1 && <SwarmWalk pokemon={swarmPokemon} />}
        {displayedTab === 2 && <PokeRadarWalk pokemon={radarPokemon} />}
      </div>
    </>
  );
}

export default Walk;
