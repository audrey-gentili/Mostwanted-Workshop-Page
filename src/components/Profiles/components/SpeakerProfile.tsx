import React from "react"
import '../style/profiles.css'

type Props = {
  firstName: string,
  lastName: string,
  urlImage: string,
  githubLink: string,
}

function SpeakerProfile({ firstName, lastName, urlImage, githubLink }: Props) {
  return (
    <>
      <div className="speaker_profile">
        <img src={urlImage} />
        <div className="speaker_name">
          <h2>{firstName}</h2>
          <h2>{lastName}</h2>
        </div>
        <a href={githubLink}>Github</a>
      </div>
    </>
  )
}

export default SpeakerProfile