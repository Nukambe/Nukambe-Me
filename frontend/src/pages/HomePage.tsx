import Profile from "../features/profile/Profile"
import Quote from "../features/quotes/Quote"
import "./HomePage.css"

export default function HomePage() {
  return (
    <div className="home-container" id="home">
      <Profile />
      <Quote
        quote={{
          text: "“Success is not final. Failure is not fatal...”",
          author: "Winston Churchill",
        }}
      />
    </div>
  )
}
