import React from "react";
import "../style/profiles.css";

type Props = {
  firstName: string;
  lastName: string;
  urlImage: string;
  githubLink: string;
};

const spyUrlImage: string =
  "https://pbs.twimg.com/profile_images/502362219783262208/sTbN9xVK_400x400.jpeg";

function SpeakerProfile({ firstName, lastName, urlImage, githubLink }: Props) {
  return (
    <>
      <div className="speaker_profile">
        <div className="spy">
          <img className="round_image" src={spyUrlImage} />
        </div>
        <div className="speaker_image">
          <img className="round_image" src={urlImage} />
        </div>
        <div className="details">
          <div className="speaker_name">
            <p>{firstName}</p>
            <p>{lastName}</p>
          </div>
          <a target="_blank" href={githubLink}>
            <img className="network_icon" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />
          </a>
        </div>
      </div>
    </>
  );
}

export default SpeakerProfile;
