import VersionButtons from "../VersionButtons/VersionButtons";

import Piplup from "../../assets/images/piplup.png";
import Chimchar from "../../assets/images/chimchar.png";
import Turtwig from "../../assets/images/turtwig-flip.png";
import Palkia from "../../assets/images/palkia-flip.png";
import Dialga from "../../assets/images/dialga.png";
import Houndoom from "../../assets/images/houndoom.png";
import Girafarig from "../../assets/images/girafarig-flip.png";
import Crobat from "../../assets/images/crobat.png";
import Rhydon from "../../assets/images/rhydon.png";
import Luxray from "../../assets/images/luxray-flip.png";

import "./Home.scss";

function Home() {
  return (
    <>
      <div className="home__container">
        <h1 className="banner__title">Welcome to encounterDex!</h1>
        <h3 className="banner__subtitle">Select a game</h3>
        <div className="banner__container">
          <img className="banner-pokemon banner-pokemon--5" src={Dialga} />
          <VersionButtons />
          <img className="banner-pokemon banner-pokemon--6" src={Palkia} />
        </div>
        <h3 className="banner__advisory">
          ***Currently only available for Diamond, Pearl and Platinum. More
          versions to come...
        </h3>
      </div>
    </>
  );
}

export default Home;
