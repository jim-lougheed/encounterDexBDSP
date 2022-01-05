import { useEffect } from "react";
import axios from "axios";

function RouteInfo({ route }) {
  useEffect(() => {
    route != null &&
      axios
        .get(`http://pokeapi.co/api/v2/location-area/sinnoh-${route}-area/`)
        .then(({ data }) => {
          console.log(data);
        });
  });
  return (
    <>
      <h1>Route Info</h1>
      <p>{route}</p>
    </>
  );
}

export default RouteInfo;
