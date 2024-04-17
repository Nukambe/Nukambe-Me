import { Outlet } from "react-router-dom"
import "./App.css"

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
          <li>
            <a href="/certifications">Certifications</a>
          </li>
          <li>
            <a href="/skills">Skills</a>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
