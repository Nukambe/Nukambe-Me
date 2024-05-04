import Socials from "../socials/Socials"
import "./Profile.css"

export default function Profile() {
  return (
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
          Versatile Software Engineer Specializing in Development and Technical
          Support
        </p>
      </div>
      <div className="about-me">
        <h2>About Me</h2>
        <p>
          Hello! I'm a passionate software engineer with a relentless curiosity
          for all things tech. I thrive on the excitement of learning and
          embracing new technologies, making me a perpetual student in this
          ever-evolving digital landscape. With a commitment to innovation and
          problem-solving, I bring a fresh perspective to every project I
          undertake.
        </p>
      </div>
    </div>
  )
}
