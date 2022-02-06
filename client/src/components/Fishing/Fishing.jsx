import PixelBanner from "../PixelBanner/PixelBanner";
import OldRod from "../OldRod/OldRod";

import "./Fishing.scss";

function Fishing({ oldRodPokemon, goodRodPokemon, superRodPokemon }) {
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
        <OldRod pokemon={oldRodPokemon} />
        {/* <GoodRod pokemon={goodRodPokemon} />
        <SuperRod pokemon={superRodPokemon} /> */}
      </div>
    </>
  );
}

export default Fishing;
