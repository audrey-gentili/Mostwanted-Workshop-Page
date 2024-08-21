import React from "react"
import SpeakerProfile from "./components/SpeakerProfile"

function Profiles() {
  return (
    <>
      <div className="speaker_profiles">
        <SpeakerProfile firstName="Olivier" lastName="Perez" urlImage="https://ca.slack-edge.com/T02ARLB3P-UD4C7LUBD-84c5b92d10e7-512" githubLink="https://github.com/olivierperez" />
        <SpeakerProfile firstName="Audrey" lastName="Gentili" urlImage="https://pbs.twimg.com/profile_images/1784119539006873600/e2OXa-Mf_400x400.jpg" githubLink="https://github.com/audreygentili" />
      </div>
    </>
  )
}

export default Profiles