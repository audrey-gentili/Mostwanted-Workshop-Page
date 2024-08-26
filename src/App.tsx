import "./App.css";
import React from "react";
import Profiles from "./components/Profiles/Profiles";
import Links from "./components/Links/Links";

function App() {
  return (
    <main>
      <h1>MOSTWANTED WORKSHOP</h1>
      <h2>Devenez un véritable agent secret avec Jetpack Compose !</h2>
      <img className="icon" src="https://blog.kakaocdn.net/dn/dk8mDm/btrzQoeDOzC/6ykWTQso4i6roeML4MkoV1/img.png" />
      <Links />
      <Profiles />
    </main>
  );
}

export default App;
