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
          {/* <div className="banner-pokemon__container">
          <img className="banner-pokemon banner-pokemon--1" src={Turtwig} />
          <img className="banner-pokemon banner-pokemon--2" src={Girafarig} />
          <img className="banner-pokemon banner-pokemon--3" src={Houndoom} />
          <img className="banner-pokemon banner-pokemon--4" src={Luxray} />
          
        </div> */}
          <VersionButtons />
          <img className="banner-pokemon banner-pokemon--6" src={Palkia} />
          {/* <div className="banner-pokemon__container">
          
          <img className="banner-pokemon banner-pokemon--7" src={Chimchar} />
          <img className="banner-pokemon banner-pokemon--8" src={Rhydon} />
          <img className="banner-pokemon banner-pokemon--9" src={Crobat} />
          <img className="banner-pokemon banner-pokemon--10" src={Piplup} />
        </div> */}
        </div>
      </div>
    </>
  );
}

export default Home;
