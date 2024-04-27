import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
  const [isTop, setIsTop] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY < 100
      if (top !== isTop) {
        setIsTop(top)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  const scrollTo = (e: any, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className={isTop ? "navbar" : "navbar scrolled"}>
      <ul>
        <li>
          <Link to="/" onClick={e => scrollTo(e, "home")}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/" onClick={e => scrollTo(e, "work")}>
            Work
          </Link>
        </li>
        <li>
          <Link to="/" onClick={e => scrollTo(e, "certifications")}>
            Certifications
          </Link>
        </li>
        <li>
          <Link to="/" onClick={e => scrollTo(e, "tools")}>
            Tools
          </Link>
        </li>
        <li>
          <Link to="/" onClick={e => scrollTo(e, "contact")}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  )
}
