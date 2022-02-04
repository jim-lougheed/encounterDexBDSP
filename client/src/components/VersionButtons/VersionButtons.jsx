import { Link } from "react-router-dom";

import "./VersionButtons.scss";

function VersionButtons() {
  const test = () => {
    console.log("test");
  };
  return (
    <>
      <div className="version-buttons__container">
        <div className="version-buttons__grid">
          <p className="version-buttons__version">Gen 1</p>
          <p className="version-buttons__version">Gen 2</p>
          <p className="version-buttons__version">Gen 3</p>
          <p className="version-buttons__version">Gen 4</p>
          <button
            onClick={test}
            className="version-buttons__button version-buttons__button--red"
          >
            Red
          </button>
          <button className="version-buttons__button version-buttons__button--gold">
            Gold
          </button>
          <button className="version-buttons__button version-buttons__button--ruby">
            Ruby
          </button>
          <Link
            to="/diamond"
            className="version-buttons__button version-buttons__button--diamond"
          >
            Diamond
          </Link>
          <button className="version-buttons__button version-buttons__button--blue">
            Blue
          </button>
          <button className="version-buttons__button version-buttons__button--silver">
            Silver
          </button>
          <button className="version-buttons__button version-buttons__button--sapphire">
            Sapphire
          </button>
          <Link
            to="/pearl"
            className="version-buttons__button version-buttons__button--pearl"
          >
            Pearl
          </Link>
          <button className="version-buttons__button version-buttons__button--yellow">
            Yellow
          </button>
          <button className="version-buttons__button version-buttons__button--crystal">
            Crystal
          </button>
          <button className="version-buttons__button version-buttons__button--emerald">
            Emerald
          </button>
          <Link
            to="/platinum"
            className="version-buttons__button version-buttons__button--platinum"
          >
            Platinum
          </Link>
          <p className="version-buttons__version">Gen 5</p>
          <p className="version-buttons__version">Gen 6</p>
          <p className="version-buttons__version">Gen 7</p>
          <p className="version-buttons__version">Gen 8</p>
          <button className="version-buttons__button version-buttons__button--black">
            Black
          </button>
          <button className="version-buttons__button version-buttons__button--x">
            X
          </button>
          <button className="version-buttons__button version-buttons__button--sun">
            Sun
          </button>
          <button className="version-buttons__button version-buttons__button--sword">
            Sword
          </button>
          <button className="version-buttons__button version-buttons__button--white">
            White
          </button>
          <button className="version-buttons__button version-buttons__button--y">
            Y
          </button>
          <button className="version-buttons__button version-buttons__button--moon">
            Moon
          </button>
          <button className="version-buttons__button version-buttons__button--shield">
            Shield
          </button>
        </div>
      </div>
    </>
  );
}

export default VersionButtons;
