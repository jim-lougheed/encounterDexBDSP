import "./EncounterDetails.scss";

function EncounterDetails({ pokemon: { versionDetails } }) {
  console.log(versionDetails);

  const maxLevel = versionDetails[0].encounter_details.reduce((acc, detail) => {
    return detail.max_level > acc ? detail.max_level : acc;
  }, 0);
  const minLevel = versionDetails[0].encounter_details.reduce((acc, detail) => {
    return detail.min_level < acc ? detail.min_level : acc;
  }, 100);

  const conditions = versionDetails[0].encounter_details
    .flatMap((detail) => {
      return detail;
    })
    .map((condition) => {
      if (!condition.condition_values[0]) {
      } else if (condition.condition_values[0].name === "time-morning") {
        condition.condition_values[0].name = "🌅";
      } else if (condition.condition_values[0].name === "time-day") {
        condition.condition_values[0].name = "☀️";
      } else if (condition.condition_values[0].name === "time-night") {
        condition.condition_values[0].name = "🌙";
      } else if (condition.condition_values[0].name === "slot2-ruby") {
        condition.condition_values[0].name = "RUBY";
      } else if (condition.condition_values[0].name === "slot2-sapphire") {
        condition.condition_values[0].name = "SAPPHIRE";
      } else if (condition.condition_values[0].name === "slot2-emerald") {
        condition.condition_values[0].name = "EMERALD";
      } else if (condition.condition_values[0].name === "slot2-leafgreen") {
        condition.condition_values[0].name = "LEAF GREEN";
      } else if (condition.condition_values[0].name === "slot2-firered") {
        condition.condition_values[0].name = "FIRE RED";
      } else if (condition.condition_values[0].name === "swarm-yes") {
        condition.condition_values[0].name = "SWARM";
      } else if (condition.condition_values[0].name === "swarm-no") {
        condition.condition_values[0].name = "🚫 SW";
      } else if (condition.condition_values[0].name === "radar-on") {
        condition.condition_values[0].name = "RADAR";
      } else if (condition.condition_values[0].name === "radar-off") {
        condition.condition_values[0].name = "🚫 PR";
      } else if (condition.condition_values[0].name === "slot2-none") {
        condition.condition_values[0].name = "🚫 SL";
      }
      return condition;
    });

  return (
    <>
      <div className="level-conditions-container">
        <h2 className="level__title">Level</h2>
        <section className="level__max-min-container">
          <div className="level__container">
            <h3 className="level__max-min">Min</h3>
            <p className="level__value">{minLevel}</p>
          </div>
          <div className="level__container">
            <h3 className="level__max-min">Max</h3>
            <p className="level__value">{maxLevel}</p>
          </div>
        </section>
        <h2 className="conditions__title">Conditions</h2>
        <ul className="conditions__container">
          {conditions.map((condition, i) => {
            return (
              condition.condition_values[0]?.name !== "FIRE RED" &&
              condition.condition_values[0]?.name !== "LEAF GREEN" &&
              condition.condition_values[0]?.name !== "EMERALD" &&
              condition.condition_values[0]?.name !== "RUBY" &&
              condition.condition_values[0]?.name !== "SAPPHIRE" && (
                <li key={i} className="condition">
                  <p className="condition__icon">
                    {condition.condition_values[0]
                      ? condition.condition_values[0].name
                      : "🚫"}
                  </p>
                  <section className="condition__level-chance-container">
                    <div className="condition__container">
                      <p className="condition__title">Level</p>
                      <p className="condition__value">
                        {condition.max_level === condition.min_level
                          ? condition.max_level
                          : `${condition.min_level}-${condition.max_level}`}
                      </p>
                    </div>
                    <div className="condition__container">
                      <p className="condition__title">Chance</p>
                      <p className="condition__value">{condition.chance}%</p>
                    </div>
                  </section>
                </li>
              )
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default EncounterDetails;
