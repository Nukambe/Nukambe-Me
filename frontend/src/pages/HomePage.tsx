import Profile from "../features/profile/Profile"
import Quote from "../features/quotes/Quote"
import "./HomePage.css"

export default function HomePage() {
  return (
    <div className="home-container" id="home">
      <Profile />
      <Quote
        quote={{
          text: "“Code is like humor. When you have to explain it, it’s bad.”",
          author: "Cory House",
        }}
      />
    </div>
  )
}
