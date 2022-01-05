import { useState } from "react";

import Selection from "./components/Selection/Selection";
import RouteInfo from "./components/RouteInfo/RouteInfo";
import "./App.css";

function App() {
  const [route, setRoute] = useState(null);

  return (
    <div className="App">
      <header className="App-header">EncounterDex</header>
      <Selection setRoute={setRoute} />
      <RouteInfo route={route} />
    </div>
  );
}

export default App;
