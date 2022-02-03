import "./VersionButtons.scss";

function VersionButtons() {
  const test = () => {
    console.log("test");
  };
  return (
    <>
      <div className="version-buttons__container">
        <div className="version-buttons__grid">
          <p className="version-buttons__version">Generation 1</p>
          <p className="version-buttons__version">Generation 2</p>
          <p className="version-buttons__version">Generation 3</p>
          <p className="version-buttons__version">Generation 4</p>
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
          <button className="version-buttons__button version-buttons__button--diamond">
            Diamond
          </button>
          <button className="version-buttons__button version-buttons__button--blue">
            Blue
          </button>
          <button className="version-buttons__button version-buttons__button--silver">
            Silver
          </button>
          <button className="version-buttons__button version-buttons__button--sapphire">
            Sapphire
          </button>
          <button className="version-buttons__button version-buttons__button--pearl">
            Pearl
          </button>
          <button className="version-buttons__button version-buttons__button--yellow">
            Yellow
          </button>
          <button className="version-buttons__button version-buttons__button--crystal">
            Crystal
          </button>
          <button className="version-buttons__button version-buttons__button--emerald">
            Emerald
          </button>
          <button className="version-buttons__button version-buttons__button--platinum">
            Platinum
          </button>
          <p className="version-buttons__version">Generation 5</p>
          <p className="version-buttons__version">Generation 6</p>
          <p className="version-buttons__version">Generation 7</p>
          <p className="version-buttons__version">Generation 8</p>
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
