import Social from "./Social";
import socials from "../app/socialSlice";
import "./Socials.css";

export default function Socials({ style = {} }) {
  return (
    <ul className="socials" style={style}>
      {socials.map((social) => (
        <li key={social.id}>
          <Social social={social} />
        </li>
      ))}
    </ul>
  );
}
