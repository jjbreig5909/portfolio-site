import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => (
    <footer className = "footer">
        <div className="footer-links">
            <a href="https://github.com/jjbreig5909" target="_blank"><FontAwesomeIcon icon={['fab', 'github']} size="3x"/></a>
            <a href="https://twitter.com/JeffBreig" target="_blank"><FontAwesomeIcon icon={['fab', 'twitter']} size="3x"/></a>
            <a href="https://www.linkedin.com/in/jeff-breig/" target="_blank"><FontAwesomeIcon icon={['fab', 'linkedin']} size="3x"/></a>
        </div>
    </footer>
)

export default Footer