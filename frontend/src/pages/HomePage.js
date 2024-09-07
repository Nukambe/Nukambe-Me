import Profile from "../profile/Profile";
import Quote from "../quotes/Quote";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="home-container" id="home">
      <Profile />
      <Quote
        quote={{
          text: "“First, solve the problem. Then, write the code.”",
          author: "John Johnson",
        }}
      />
    </div>
  );
}
