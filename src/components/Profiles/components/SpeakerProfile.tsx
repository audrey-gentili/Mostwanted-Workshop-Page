import React from "react";
import "../style/profiles.css";
import Networks from "./Networks";
import { IoFingerPrintOutline } from "react-icons/io5";
import Cia from "../../../assets/cia.png";
import ZenikaLogo from "../../../assets/zenika.png";

type Props = {
  firstName: string;
  lastName: string;
  codeName: string;
  urlImage: string;
  githubLink: string;
  linkedinLink: string;
  twitterLink?: string;
  mastodonLink?: string;
};

const spyUrlImage: string =
  "https://pbs.twimg.com/profile_images/502362219783262208/sTbN9xVK_400x400.jpeg";

function SpeakerProfile({
  firstName,
  lastName,
  codeName,
  urlImage,
  githubLink,
  linkedinLink,
  twitterLink,
  mastodonLink,
}: Props) {
  return (
    <div className="speaker_profile">
      <div className="right-panel">
        <div className="container">
          <div className="info">
            <div className="picture-container">
              <div className="spy">
                <img className="round_image" src={spyUrlImage} />
              </div>
              <div>
                <img className="round_image" src={urlImage} />
              </div>
            </div>
            <div className="details">
              <p>
                <span className="placeholderName">
                  {"*".repeat(firstName.length)}
                </span>
                <span className="name">{firstName}</span>
              </p>
              <p>
                <span className="placeholderName">
                  {"*".repeat(lastName.length)}
                </span>
                <span className="name">{lastName}</span>
              </p>
              <p className="code-name">
                <span className="placeholderName">
                  {"*".repeat(codeName.length)}
                </span>
                <span className="name">{codeName}</span>
              </p>
            </div>
          </div>
          <div className="footer">
            <img src={ZenikaLogo} className="zenika-logo" />
            <div className="left-side">
              <div className="badge">
                <span>Compose Expert</span>
              </div>
              <Networks
                githubLink={githubLink}
                linkedinLink={linkedinLink}
                twitterLink={twitterLink}
                mastodonLink={mastodonLink}
              />
            </div>
          </div>
        </div>
        <IoFingerPrintOutline size={150} className="fingerprint" />
        <img src={Cia} className="ciaLogo" />
      </div>
    </div>
  );
}

export default SpeakerProfile;
