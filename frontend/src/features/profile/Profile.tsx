import headshot from "./Avatar-Bridge.jpg"
import "./Profile.css"

export default function Profile() {
  return (
    <div className="profile">
      <img src={headshot} alt="Headshot" className="headshot" />
      <div className="about-me">
        <h1>About Me</h1>
        <p>
          I'm a passionate software engineer specializing in building
          exceptional digital experiences. I have a penchant for creating
          efficient and aesthetically pleasing applications.
        </p>
      </div>
    </div>
  )
}
