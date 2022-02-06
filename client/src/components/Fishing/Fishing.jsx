import PixelBanner from "../PixelBanner/PixelBanner";

import "./Fishing.scss";

function Fishing() {
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
        {/* <StandardWalk pokemon={standardWalkPokemon} /> */}
      </div>
    </>
  );
}

export default Fishing;
