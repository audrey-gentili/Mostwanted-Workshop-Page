import React from "react";
import Link from "./components/Link";

function Links() {
  return (
    <div className="links">
      <Link
        link="https://github.com/olivierperez/workshop-MostWanted"
        label="L'Atelier"
      />
      <Link
        link="https://developer.android.com/develop/ui/compose/documentation"
        label="Doc Jetpack Compose"
        variant="secondary"
      />
    </div>
  );
}

export default Links;
