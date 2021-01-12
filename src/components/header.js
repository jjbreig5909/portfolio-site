import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="nav-bar">
      <h1>
        <Link to="/" className="page-title">
          JB
        </Link>
      </h1>
      <div className = "nav-links">
        <Link to="/" className = "nav-link">Skills</Link>
        <Link to="/" className = "nav-link">Portfolio</Link>
        <Link to="/" className = "nav-link">Resume</Link>
        <Link to="/" className = "nav-link">Contact</Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
