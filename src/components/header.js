import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import resume from "../components/Resume2019.pdf"

const Header = ({ siteTitle }) => (
  <header>
    <div className="nav-bar">
      <h1>
        <Link to="/" className="page-title">
          JB
        </Link>
      </h1>
      <div className = "nav-links">
        <Link to="#skills" className = "nav-link">Skills</Link>
        <Link to="#portfolio" className = "nav-link">Portfolio</Link>
        <a href={resume} className = "nav-link">Resume</a>{' '}
        <Link to="#contact" className = "nav-link">Contact</Link>
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
