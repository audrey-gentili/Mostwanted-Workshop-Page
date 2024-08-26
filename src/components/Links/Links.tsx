import React from "react";
import Link from "./components/Link";

function Links() {
  return (
    <div className="links">
      <Link
        link="https://github.com/olivierperez/workshop-MostWanted"
        label="Atelier MostWanted"
      />
      <Link
        link="https://developer.android.com/develop/ui/compose/documentation"
        label="Jetpack Compose documentation"
        variant="secondary"
      />
    </div>
  );
}

export default Links;
