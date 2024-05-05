import React from "react";
import Socials from "../socials/Socials";
import "./Profile.css";

export default function Profile() {
  const [modal, setModal] = React.useState(false);

  React.useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  return (
    <>
      <div className="profile">
        <div className="profile-container">
          <Socials />
          <img
            src="/images/Avatar-Bridge.jpg"
            alt="Headshot"
            className="headshot"
          />
          <h1>Wesley Alexander Chappell</h1>
          <p>
            Versatile Software Engineer Specializing in Development and
            Technical Support
          </p>
          <button onClick={() => setModal(true)}>
            Intro
            <img
              className="yt-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
              alt="YouTube Logo"
            />
          </button>
        </div>
        <div className="about-me">
          <h2>About Me</h2>
          <p>
            Hello! I'm a passionate software engineer with a relentless
            curiosity for all things tech. I thrive on the excitement of
            learning and embracing new technologies, making me a perpetual
            student in this ever-evolving digital landscape. With a commitment
            to innovation and problem-solving, I bring a fresh perspective to
            every project I undertake.
          </p>
        </div>
      </div>
      {modal && (
        <div className="video-modal" onClick={() => setModal(false)}>
          <div className="video-modal-content">
            <button
              className="close-modal"
              style={{ fontSize: "1.5em" }}
              onClick={() => setModal(false)}
            >
              X
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/fK7pV0Wic1Y"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
