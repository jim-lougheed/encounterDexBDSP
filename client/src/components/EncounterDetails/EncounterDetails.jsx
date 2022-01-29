function EncounterDetails({ pokemon: { version_details } }) {
  const [filteredEncounterDetails] = version_details.filter((v) => {
    if (v.version.name === "pearl") {
      return v.encounter_details;
    }
  });

  const maxLevel = filteredEncounterDetails.encounter_details.reduce(
    (acc, detail) => {
      return detail.max_level > acc ? detail.max_level : acc;
    },
    0
  );
  const minLevel = filteredEncounterDetails.encounter_details.reduce(
    (acc, detail) => {
      return detail.min_level < acc ? detail.min_level : acc;
    },
    100
  );

  const conditions = filteredEncounterDetails.encounter_details
    .flatMap((detail) => {
      return detail.condition_values;
    })
    .map((condition) => {
      return condition.name;
    });
  console.log(filteredEncounterDetails.encounter_details.length);
  console.log(conditions);
  return (
    <>
      <h3>Encounter Rate</h3>
      <p>{filteredEncounterDetails.max_chance}%</p>
      <h3>Max Level</h3>
      <p>{maxLevel}</p>
      <h3>Min Level</h3>
      <p>{minLevel}</p>
      <h3>Conditions</h3>
      <ul>
        {conditions.map((condition) => {
          return <li>{condition}</li>;
        })}
      </ul>
    </>
  );
}

export default EncounterDetails;
