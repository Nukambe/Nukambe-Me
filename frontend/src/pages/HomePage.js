import Profile from "../profile/Profile";
import Quote from "../quotes/Quote";
import "./HomePage.css";

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
  );
}
