import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import "./Navbar.css"
import { clsx } from "../../utils/clsx"

export default function Navbar() {
  const location = useLocation()
  const [isTop, setIsTop] = useState(true)
  const [open, setOpen] = useState(false)

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

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1))
      if (element) {
        element.scrollIntoView({ behavior: "instant" })
      }
    }
  }, [location])

  const scrollTo = (e: any, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setOpen(false)
    }
  }

  const toggleMenu = () => {
    setOpen(!open)
  }

  return (
    <nav
      className={clsx("navbar", isTop ? "top" : "scrolled", open && "nav-open")}
    >
      <div className="menu-icon" onClick={toggleMenu}>
        <img
          src={
            open
              ? "https://upload.wikimedia.org/wikipedia/commons/7/7f/Xbox_X_button_%28B%2BW%29.svg"
              : "https://upload.wikimedia.org/wikipedia/commons/5/59/Hamburger_icon_white.svg"
          }
          alt="hamburger menu"
        ></img>
      </div>
      <ul className={open ? "nav-links mobile" : "nav-links"}>
        {["Home", "Work", "Certifications", "Tools", "Contact"].map(
          (navItem, index) => (
            <li key={index}>
              <Link to="/" onClick={e => scrollTo(e, navItem.toLowerCase())}>
                {navItem}
              </Link>
            </li>
          ),
        )}
      </ul>
    </nav>
  )
}
