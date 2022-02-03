import "./Selection.scss";

import Pokeball from "../../assets/images/pokeball.png";

function Selection({ setRoute, setRouteName, version }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setRoute(e.target.location_area.value);
    setRouteName(e.target.location_area.selectedOptions[0].innerText);
  };

  return (
    <>
      <form className="route__form" onSubmit={handleSubmit}>
        <select className="route__select" name="location_area">
          <option value="canalave-city-area">Canalave City</option>
          <option value="eterna-city-area">Eterna City</option>
          <option value="pastoria-city-area">Pastoria City</option>
          <option value="sunyshore-city-area">Sunyshore City</option>
          <option value="sinnoh-pokemon-league-area">
            Pokemon League Area
          </option>
          <option value="oreburgh-mine-1f">Oreburgh Mine (1F)</option>
          <option value="oreburgh-mine-b1f">Oreburgh Mine (B1F)</option>
          <option value="valley-windworks-area">Valley Windworks</option>
          <option value="eterna-forest-area">Eterna Forest</option>
          <option value="fuego-ironworks-area">Fuego Ironworks</option>
          <option value="mt-coronet-route-207">Mt Coronet (Route 207)</option>
          <option value="mt-coronet-2f">Mt Coronet (2F)</option>
          <option value="mt-coronet-3f">Mt Coronet (3F)</option>
          <option value="mt-coronet-snowfall">Mt Coronet (snowfall)</option>
          <option value="mt-coronet-blizzard">Mt Coronet (blizzard)</option>
          <option value="mt-coronet-4f">Mt Coronet (4F)</option>
          <option value="mt-coronet-5f">Mt Coronet (5F)</option>
          <option value="mt-coronet-6f">Mt Coronet (6F)</option>
          <option value="mt-coronet-7f">Mt Coronet (7F)</option>
          <option value="mt-coronet-cave">Mt Coronet (cave)</option>
          <option value="mt-coronet-route-216">Mt Coronet (Route 216)</option>
          <option value="mt-coronet-route-211">Mt Coronet (Route 211)</option>
          <option value="mt-coronet-b1f">Mt Coronet (B1F)</option>
          <option value="great-marsh-area-1">Great Marsh - Area 1</option>
          <option value="great-marsh-area-2">Great Marsh - Area 2</option>
          <option value="great-marsh-area-3">Great Marsh - Area 3</option>
          <option value="great-marsh-area-4">Great Marsh - Area 4</option>
          <option value="great-marsh-area-5">Great Marsh - Area 5</option>
          <option value="great-marsh-area-6">Great Marsh - Area 6</option>
          <option value="solaceon-ruins-1f">Solaceon Ruins (1F)</option>
          <option value="solaceon-ruins-2f">Solaceon Ruins (2F)</option>
          <option value="solaceon-ruins-b1f-a">Solaceon Ruins (B1F a)</option>
          <option value="solaceon-ruins-b1f-b">Solaceon Ruins (B1F b)</option>
          <option value="solaceon-ruins-b1f-c">Solaceon Ruins (B1F c)</option>
          <option value="solaceon-ruins-b2f-a">Solaceon Ruins (B2F a)</option>
          <option value="solaceon-ruins-b2f-b">Solaceon Ruins (B2F b)</option>
          <option value="solaceon-ruins-b2f-c">Solaceon Ruins (B2F c)</option>
          <option value="solaceon-ruins-b3f-a">Solaceon Ruins (B3F a)</option>
          <option value="solaceon-ruins-b3f-b">Solaceon Ruins (B3F b)</option>
          <option value="solaceon-ruins-b3f-c">Solaceon Ruins (B3F c)</option>
          <option value="solaceon-ruins-b3f-d">Solaceon Ruins (B3F d)</option>
          <option value="solaceon-ruins-b3f-e">Solaceon Ruins (B3F e)</option>
          <option value="solaceon-ruins-b4f-a">Solaceon Ruins (B4F a)</option>
          <option value="solaceon-ruins-b4f-b">Solaceon Ruins (B4F b)</option>
          <option value="solaceon-ruins-b4f-c">Solaceon Ruins (B4F c)</option>
          <option value="solaceon-ruins-b4f-d">Solaceon Ruins (B4F d)</option>
          <option value="solaceon-ruins-b5f">Solaceon Ruins (B5F)</option>
          <option value="sinnoh-victory-road-1f">Victory Road (1F)</option>
          <option value="sinnoh-victory-road-2f">Victory Road (2F)</option>
          <option value="sinnoh-victory-road-b1f">Victory Road (B1F)</option>
          <option value="sinnoh-victory-road-inside-b1f">
            Victory Road (B1F inside)
          </option>
          <option value="sinnoh-victory-road-inside">
            Victory Road (inside)
          </option>
          <option value="sinnoh-victory-road-inside-exit">
            Victory Road (inside exit)
          </option>
          <option value="ravaged-path-area">Ravaged Path</option>
          <option value="oreburgh-gate-1f">Oreburgh Gate (1F)</option>
          <option value="oreburgh-gate-b1f">Oreburgh Gate (B1F)</option>
          <option value="stark-mountain-area">Stark Mountain</option>
          <option value="stark-mountain-entrance">
            Stark Mountain (entrance)
          </option>
          <option value="stark-mountain-inside">Stark Mountain (inside)</option>
          <option value="sendoff-spring-area">Sendoff Spring</option>
          <option value="turnback-cave-pillar-1">
            Turnback Cave (Pillar 1)
          </option>
          <option value="turnback-cave-pillar-2">
            Turnback Cave (Pillar 2)
          </option>
          <option value="turnback-cave-pillar-3">
            Turnback Cave (Pillar 3)
          </option>
          <option value="turnback-cave-before-pillar-1">
            Turnback Cave (before Pillar 1)
          </option>
          <option value="turnback-cave-between-pillars-1-and-2">
            Turnback Cave (between Pillars 1 and 2)
          </option>
          <option value="turnback-cave-between-pillars-2-and-3">
            Turnback Cave (between Pillars 2 and 3)
          </option>
          <option value="turnback-cave-after-pillar-3">
            Turnback Cave (after Pillar 3)
          </option>
          <option value="snowpoint-temple-1f">Snowpoint Temple (1F)</option>
          <option value="snowpoint-temple-b1f">Snowpoint Temple (B1F)</option>
          <option value="snowpoint-temple-b2f">Snowpoint Temple (B2F)</option>
          <option value="snowpoint-temple-b3f">Snowpoint Temple (B3F)</option>
          <option value="snowpoint-temple-b4f">Snowpoint Temple (B4F)</option>
          <option value="snowpoint-temple-b5f">Snowpoint Temple (B5F)</option>
          <option value="wayward-cave-1f">Wayward Cave (1F)</option>
          <option value="wayward-cave-b1f">Wayward Cave (B1F)</option>
          <option value="ruin-maniac-cave-0-9-different-unown-caught">
            Ruin Maniac Cave (0-9 different Unown caught)
          </option>
          <option value="ruin-maniac-cave-10-25-different-unown-caught">
            Ruin Maniac Cave (10-25 different Unown caught)
          </option>
          <option value="maniac-tunnel-26-plus-different-unown-caught">
            Ruin Maniac Cave (26+ different Unown caught)
          </option>
          <option value="trophy-garden-area">Trophy Garden</option>
          <option value="iron-island-area">Iron Island</option>
          <option value="iron-island-1f">Iron Island (1F)</option>
          <option value="iron-island-b1f-left">Iron Island (B1F left)</option>
          <option value="iron-island-b1f-right">Iron Island (B1F right)</option>
          <option value="iron-island-b2f-left">Iron Island (B2F left)</option>
          <option value="iron-island-b2f-right">Iron Island (B2F right)</option>
          <option value="iron-island-b3f">Iron Island (B3F)</option>
          <option value="old-chateau-entrance">Old Chateau (entrance)</option>
          <option value="old-chateau-dining-room">
            Old Chateau (dining room)
          </option>
          <option value="old-chateau-2f-private-room">Old Chateau (2F)</option>
          <option value="old-chateau-2f">
            Old Chateau (2F - private room)
          </option>
          <option value="old-chateau-2f-leftmost-room">
            Old Chateau (2F - leftmost room)
          </option>
          <option value="old-chateau-2f-left-room">
            Old Chateau (2F - left room)
          </option>
          <option value="old-chateau-2f-middle-room">
            Old Chateau (2F - middle room)
          </option>
          <option value="old-chateau-2f-right-room">
            Old Chateau (2F - right room)
          </option>
          <option value="old-chateau-2f-rightmost-room">
            Old Chateau (2F - rightmost room)
          </option>
          <option value="lake-verity-before-galactic-intervention">
            Lake Verity (before Team Galactic intervention)
          </option>
          <option value="lake-verity-after-galactic-intervention">
            Lake Verity (after Team Galactic intervention)
          </option>
          <option value="lake-valor-area">Lake Valor</option>
          <option value="lake-acuity-area">Lake Acuity</option>
          <option value="valor-lakefront-area">Acuity Lakefront</option>
          <option value="acuity-lakefront-area">Valor Lakefront</option>
          <option value="sinnoh-route-201-area">Route 201</option>
          <option value="sinnoh-route-202-area">Route 202</option>
          <option value="sinnoh-route-203-area">Route 203</option>
          <option value="sinnoh-route-204-south-towards-jubilife-city">
            Route 204 (south)
          </option>
          <option value="sinnoh-route-204-north-towards-floaroma-town">
            Route 204 (north)
          </option>
          <option value="sinnoh-route-205-south-towards-floaroma-town">
            Route 205 (south)
          </option>
          <option value="sinnoh-route-205-east-towards-eterna-city">
            Route 205 (east)
          </option>
          <option value="sinnoh-route-206-area">Route 206</option>
          <option value="sinnoh-route-207-area">Route 207</option>
          <option value="sinnoh-route-208-area">Route 208</option>
          <option value="sinnoh-route-209-area">Route 209</option>
          <option value="lost-tower-1f">Lost Tower (1F)</option>
          <option value="lost-tower-2f">Lost Tower (2F)</option>
          <option value="lost-tower-3f">Lost Tower (3F)</option>
          <option value="lost-tower-4f">Lost Tower (4F)</option>
          <option value="lost-tower-5f">Lost Tower (5F)</option>
          <option value="sinnoh-route-210-south-towards-solaceon-town">
            Route 210 (south)
          </option>
          <option value="sinnoh-route-210-west-towards-celestic-town">
            Route 210 (west)
          </option>
          <option value="sinnoh-route-211-west-towards-eterna-city">
            Route 211 (west)
          </option>
          <option value="sinnoh-route-211-east-towards-celestic-town">
            Route 211 (east)
          </option>
          <option value="sinnoh-route-212-north-towards-hearthome-city">
            Route 212 (north)
          </option>
          <option value="sinnoh-route-212-east-towards-pastoria-city">
            Route 212 (east)
          </option>
          <option value="sinnoh-route-213-area">Route 213</option>
          <option value="sinnoh-route-214-area">Route 214</option>
          <option value="sinnoh-route-215-area">Route 215</option>
          <option value="sinnoh-route-216-area">Route 216</option>
          <option value="sinnoh-route-217-area">Route 217</option>
          <option value="sinnoh-route-218-area">Route 218</option>
          <option value="sinnoh-route-219-area">Route 219</option>
          <option value="sinnoh-sea-route-220-area">Route 220</option>
          <option value="sinnoh-route-221-area">Route 221</option>
          <option value="sinnoh-route-222-area">Route 222</option>
          <option value="sinnoh-sea-route-223-area">Route 223</option>
          <option value="sinnoh-route-224-area">Route 224</option>
          <option value="sinnoh-route-225-area">Route 225</option>
          <option value="sinnoh-sea-route-226-area">Route 226</option>
          <option value="sinnoh-route-227-area">Route 227</option>
          <option value="sinnoh-route-228-area">Route 228</option>
          <option value="sinnoh-route-229-area">Route 229</option>
          <option value="sinnoh-sea-route-230">Route 230</option>
          <option value="twinleaf-town-area">Twinleaf Town</option>
          <option value="celestic-town-area">Celestic Town</option>
          <option value="resort-area-area">Resort Area</option>
        </select>
        <input
          className="pokeball-button"
          type="image"
          src={Pokeball}
          alt="pokeball submit button"
        />
        {/* <button type="submit" className="pokeball-button">
          
        </button> */}
      </form>
    </>
  );
}

export default Selection;
