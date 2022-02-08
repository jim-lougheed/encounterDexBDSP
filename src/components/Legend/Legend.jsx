import "./Legend.scss";

function Legend() {
  return (
    <>
      {/* <div className="legend__container">
        <h1 className="legend__title">Encounter Conditions</h1>
        <div className="legend__grid">
          <div className="legend__values legend__values--symbols">
            <p className="legend__value">🚫</p>
            <p className="legend__value">🌅</p>
            <p className="legend__value">☀️</p>
            <p className="legend__value">🌙</p>
            <p className="legend__value">🚫 SL</p>
          </div>
          <div className="legend__values">
            <p className="legend__value">No special conditions</p>
            <p className="legend__value">Available in the morning</p>
            <p className="legend__value">Available during the day</p>
            <p className="legend__value">Available at night</p>
            <p className="legend__value">No slot card needed</p>
          </div>
          <div className="legend__values  legend__values--symbols">
            <p className="legend__value">SW</p>
            <p className="legend__value">PR</p>
            <p className="legend__value">🚫 SW</p>
            <p className="legend__value">🚫 PR</p>
          </div>
          <div className="legend__values">
            <p className="legend__value">Available during a swarm</p>
            <p className="legend__value">Available by using PokéRadar</p>
            <p className="legend__value">No swarm needed</p>
            <p className="legend__value">No PokéRadar needed</p>
          </div>
        </div>
      </div> */}
      <div className="legend__container">
        <h1 className="legend__title">Encounter Conditions</h1>
        <div className="legend__grid">
          <p className="legend__value legend__value--symbol">🚫</p>
          <p className="legend__value">No special conditions</p>
          <p className="legend__value legend__value--symbol">SW</p>
          <p className="legend__value">Available during a swarm</p>
          <p className="legend__value legend__value--symbol">🌅</p>
          <p className="legend__value">Available in the morning</p>
          <p className="legend__value legend__value--symbol">PR</p>
          <p className="legend__value">Available by using PokéRadar</p>
          <p className="legend__value legend__value--symbol">☀️</p>
          <p className="legend__value">Available during the day</p>
          <p className="legend__value legend__value--symbol">🚫 SW</p>
          <p className="legend__value">No swarm needed</p>
          <p className="legend__value legend__value--symbol">🌙</p>
          <p className="legend__value">Available at night</p>
          <p className="legend__value legend__value--symbol">🚫 PR</p>
          <p className="legend__value">No PokéRadar needed</p>
          <p className="legend__value legend__value--symbol">🚫 SL</p>
          <p className="legend__value">No slot card needed</p>
        </div>
      </div>
    </>
  );
}

export default Legend;
