import "./Footer.css"

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>© 2024 Wesley Chappell. All rights reserved.</p>
        <ul className="social-links">
          <li>
            <a href="https://www.linkedin.com/in/weschap/">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/Nukambe">GitHub</a>
          </li>
        </ul>
        <p>
          Get in touch:{" "}
          <a href="mailto:chappellwesley@gmail.com">chappellwesley@gmail.com</a>
        </p>
      </div>
    </footer>
  )
}
