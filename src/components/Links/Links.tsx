import React from "react"
import Link from "./components/Link"

function Links() {
  return (
    <>
      <div>
        <Link link="https://github.com/olivierperez/workshop-MostWanted" label="Repository Github" />
        <Link link="https://developer.android.com/develop/ui/compose/documentation" label="Jetpack Compose Doc" />
      </div>
    </>
  )
}

export default Links
