import { useState } from "react";

import PixelBanner from "../PixelBanner/PixelBanner";
import OldRod from "../OldRod/OldRod";
import GoodRod from "../GoodRod/GoodRod";
import SuperRod from "../SuperRod/SuperRod";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import "./Fishing.scss";

function Fishing({ oldRodPokemon, goodRodPokemon, superRodPokemon }) {
  const [displayedTab, setDisplayedTab] = useState(0);

  const handleTab = (e, displayTab) => {
    e.preventDefault();
    setDisplayedTab(displayTab);
  };

  return (
    <>
      <div className="fishing-container">
        <PixelBanner banner="fishing"></PixelBanner>
        <div className="method__banner">
          <div className="sprite__fishing"></div>
          <div className="method__header method__header--fishing">
            <h3 className="method__title">Fishing</h3>
          </div>
          <div className="sprite__fishing"></div>
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
              label="Old Rod"
              sx={{
                color: "white",
                fontSize: "1rem",
                padding: "0 0.5rem",
                fontWeight: "bold",
              }}
            />
            <Tab
              className="fishing-tab"
              value={1}
              label="Good Rod"
              sx={{
                color: "white",
                fontSize: "1rem",
                padding: "0 0.5rem",
                fontWeight: "bold",
              }}
            />
            <Tab
              className="fishing-tab"
              value={2}
              label="Super Rod"
              sx={{
                color: "white",
                fontSize: "1rem",
                padding: "0 0.5rem",
                fontWeight: "bold",
              }}
            />
          </Tabs>
        </Box>
        {displayedTab === 0 && <OldRod pokemon={oldRodPokemon} />}
        {displayedTab === 1 && <GoodRod pokemon={goodRodPokemon} />}
        {displayedTab === 2 && <SuperRod pokemon={superRodPokemon} />}
      </div>
    </>
  );
}

export default Fishing;
