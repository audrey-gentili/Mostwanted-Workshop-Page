import React from "react";
import "../style/profiles.css";
import { FaGithub, FaLinkedin, FaTwitter, FaMastodon } from "react-icons/fa";

type Props = {
  githubLink: string;
  linkedinLink: string;
  twitterLink?: string;
  mastodonLink?: string;
};


function Networks({
  githubLink,
  linkedinLink,
  twitterLink,
  mastodonLink,
}: Props) {
  return (
    <div className="network_icons">
      <a className="network_icon" target="_blank" href={githubLink}>
        <FaGithub size={32} />
      </a>
      <a className="network_icon" target="_blank" href={linkedinLink}>
        <FaLinkedin size={32} />
      </a>
      {twitterLink != null && (
        <a className="network_icon" target="_blank" href={twitterLink}>
          <FaTwitter size={32} />
        </a>
      )}
      {mastodonLink != null && (
        <a className="network_icon" target="_blank" href={mastodonLink}>
          <FaMastodon size={32} />
        </a>
      )}
    </div>
  );
}

export default Networks;
