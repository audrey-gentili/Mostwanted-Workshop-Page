import React from "react";
import "../style/profiles.css";

type Props = {
  firstName: string;
  lastName: string;
  urlImage: string;
  githubLink: string;
  linkedinLink: string;
  twitterLink: string;
};

const spyUrlImage: string =
  "https://pbs.twimg.com/profile_images/502362219783262208/sTbN9xVK_400x400.jpeg";

function SpeakerProfile({
  firstName,
  lastName,
  urlImage,
  githubLink,
  linkedinLink,
  twitterLink,
}: Props) {
  return (
    <div className="speaker_profile">
      <div className="header">
        <p>CIA SECRET AGENT</p>
      </div>
      <div className="content">
        <div className="spy">
          <img className="round_image" src={spyUrlImage} />
        </div>
        <div className="speaker_image">
          <img className="round_image" src={urlImage} />
        </div>
        <div className="details">
          <div>
            <p>{firstName}</p>
            <p>{lastName}</p>
          </div>
          <div className="network_icons">
            <a target="_blank" href={githubLink}>
              <img
                className="network_icon"
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              />
            </a>
            <a target="_blank" href={linkedinLink}>
              <img
                className="network_icon"
                src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              />
            </a>
            <a target="_blank" href={twitterLink}>
              <img
                className="network_icon"
                src="https://cdn-icons-png.flaticon.com/256/5969/5969020.png"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpeakerProfile;
