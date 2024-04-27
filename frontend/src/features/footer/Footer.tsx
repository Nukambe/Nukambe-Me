import "./Footer.css"

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>© 2024 Wesley Chappell. All rights reserved.</p>
        <ul className="social-links">
          <li>
            <a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
          </li>
          <li>
            <a href="https://github.com/yourusername">GitHub</a>
          </li>
          <li>
            <a href="https://twitter.com/yourhandle">Twitter</a>
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
