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
            src="/images/Avatar-Field.jpg"
            alt="Headshot"
            className="headshot"
          />
          <h1>Wesley Alexander Chappell</h1>
          <p>
            Versatile Software Engineer Specializing in Full-Stack Development and Problem Solving
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
            Passionate Software Engineer with expertise in Java, Python, JavaScript, SQL, and OOP.
            Experienced in full-stack development, working with REST APIs and PostgreSQL and MySQL databases.
            Strong problem-solving and debugging skills, focused on delivering clean, maintainable code and user-friendly solutions in dynamic environments.
          </p>
        </div>
      </div>
      {modal && (
        <div className="video-modal" onClick={() => setModal(false)}>
          <div className="video-modal-content">
            <button
              className="close-modal"
              onClick={() => setModal(false)}
            >
              X
            </button>
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/FHgoTZ3y9b8"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}
