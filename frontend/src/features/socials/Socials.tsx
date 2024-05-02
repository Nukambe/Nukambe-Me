import { useAppSelector } from "../../app/hooks"
import Social from "./Social"
import { selectSocials } from "./socialSlice"
import "./Socials.css"

export default function Socials({ style }: { style?: React.CSSProperties }) {
  const socials = useAppSelector(selectSocials)

  return (
    <ul className="socials" style={style}>
      {socials.map(social => (
        <li key={social.id}>
          <Social social={social} />
        </li>
      ))}
    </ul>
  )
}
