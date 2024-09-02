import "./App.css";
import React from "react";
import Profiles from "./components/Profiles/Profiles";
import Links from "./components/Links/Links";

import Compose from "./assets/compose.png";

function App() {
  return (
    <main>
      <h1>MOSTWANTED WORKSHOP</h1>
      <h2>Devenez un véritable agent secret avec Jetpack Compose !</h2>
      <img className="icon" src={Compose} />
      <Links />
      <Profiles />
    </main>
  );
}

export default App;
