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
  console.log(maxLevel);
  console.log(filteredEncounterDetails);
  return (
    <>
      <h3>Encounter Rate</h3>
      <p>{filteredEncounterDetails.max_chance}%</p>
      <h3>Max Level</h3>
      <p>{maxLevel}%</p>
    </>
  );
}

export default EncounterDetails;
