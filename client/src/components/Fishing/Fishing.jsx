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
  const [displayedTab, setDisplayedTab] = useState(
    <GoodRod pokemon={goodRodPokemon} />
  );

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
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={displayedTab}
            onChange={handleTab}
            textColor="secondary"
            indicatorColor="secondary"
            aria-label="secondary tabs example"
          >
            <Tab value={<OldRod pokemon={oldRodPokemon} />} label="Old Rod" />
            <Tab
              value={<GoodRod pokemon={goodRodPokemon} />}
              label="Good Rod"
            />
            <Tab
              value={<SuperRod pokemon={superRodPokemon} />}
              label="Super Rod"
            />
          </Tabs>
        </Box>
        {displayedTab}
      </div>
    </>
  );
}

export default Fishing;
