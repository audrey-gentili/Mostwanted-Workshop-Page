import React from "react";
import SpeakerProfile from "./components/SpeakerProfile";

function Profiles() {
  return (
    <>
      <div className="agent_title">NOS EXPERTS</div>
      <div className="speaker_profiles">
        <SpeakerProfile
          firstName="Olivier"
          lastName="Perez"
          codeName="Agent O"
          urlImage="https://ca.slack-edge.com/T02ARLB3P-UD4C7LUBD-84c5b92d10e7-512"
          githubLink="https://github.com/olivierperez"
          linkedinLink="https://www.linkedin.com/in/olivierperez0/"
          mastodonLink="https://mastodon.social/@olivierperez"
        />
        <SpeakerProfile
          firstName="Audrey"
          lastName="Gentili"
          codeName="Agent A"
          urlImage="https://pbs.twimg.com/profile_images/1784119539006873600/e2OXa-Mf_400x400.jpg"
          githubLink="https://github.com/audreygentili"
          linkedinLink="https://www.linkedin.com/in/audrey-gentili/"
          twitterLink="https://twitter.com/audreygentili"
        />
      </div>
    </>
  );
}

export default Profiles;
