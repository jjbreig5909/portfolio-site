import React from "react"
import { Link } from "gatsby"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../components/layout"
import SEO from "../components/seo"

library.add(fab)


const IndexPage = () => (
  <Layout>
    <SEO title="Jeff Breig" />
    <div className="home-page">
      <div className="home-info">
        <h1>Hi, I'm <span className="accent">Jeff</span>.</h1>
        <p>I’m a passionate full stack developer that is totally going to put a better description of myself here once I have the time. For now, know that I’m awesome and you should definitely hire me to work for you.</p>
      </div>
      <div className="home-image"/>
    </div>
    <div className="skills-container" id="skills">
      <h1 className="section-title">My <span className="accent">Skills</span></h1>
      <p className="skills-info">Take a look at my current list of skills. I'm always eagerly learning about the latest tools in the industry.</p>
      <div className="skill-bars">

        <div className="skill-section"><h2>HTML</h2><div className="skill-bar-container"><div className="skill-bar html"></div></div></div>
        <div className="skill-section"><h2>CSS</h2><div className="skill-bar-container"><div className="skill-bar css"></div></div></div>
        <div className="skill-section"><h2>React</h2><div className="skill-bar-container"><div className="skill-bar react"></div></div></div>
        <div className="skill-section"><h2>Node.JS</h2><div className="skill-bar-container"><div className="skill-bar node"></div></div></div>
        <div className="skill-section"><h2>Python</h2><div className="skill-bar-container"><div className="skill-bar python"></div></div></div>
        <div className="skill-section"><h2>JavaScript</h2><div className="skill-bar-container"><div className="skill-bar sql"></div></div></div>
      </div>
      <h2 className="skills-title-secondary">Not to mention...</h2>
      <ul className="skills-extra">
        <li className="skill">Redux</li>
        <li className="skill">Gatsby</li>
        <li className="skill">SASS</li>
        <li className="skill">LESS</li>
        <li className="skill">Jest</li>
        <li className="skill">React Testing Library</li>
        <li className="skill">Express</li>
        <li className="skill">Knex</li>
        <li className="skill">SQL</li>
        <li className="skill">SQLite3</li>
        <li className="skill">Git / Github</li>
        <li className="skill">Photoshop</li>
        <li className="skill">Illustrator</li>
        <li className="skill">AutoCAD</li>
        <li className="skill">Revit</li>
      </ul>
    </div>
    <div className="projects-section" id="portfolio">
    <h1 className="section-title">My <span className="accent">Projects</span></h1>
      <div className = "projects">
        <div className = "project-card">
          <div className="project faultline" />
          <div className = "project-information">
          <div className = "project-tech"><FontAwesomeIcon icon={['fab', 'react']} size="2x"/><FontAwesomeIcon icon={['fab', 'html5']} size="2x"/><FontAwesomeIcon icon={['fab', 'css3']} size="2x"/></div>
            <h2>Game of Life</h2>
            <p>This project was called Game of Life and it was flipping awesome</p>
          </div>
        </div>
        <div className = "project-card">
          <div className="project faultline" />
          <div className = "project-information">
            <div className = "project-tech"><FontAwesomeIcon icon={['fab', 'react']} size="2x"/><FontAwesomeIcon icon={['fab', 'html5']} size="2x"/><FontAwesomeIcon icon={['fab', 'css3']} size="2x"/><FontAwesomeIcon icon={['fab', 'node-js']} size="2x"/></div>
            <h2>FaultLine</h2>
            <p>This project was called faultline and it was flipping awesome</p>
          </div>
        </div>
        <div className = "project-card">
          <div className="project faultline" />
          <div className = "project-information">
            <div className = "project-tech"><FontAwesomeIcon icon={['fab', 'react']} size="2x"/><FontAwesomeIcon icon={['fab', 'html5']} size="2x"/><FontAwesomeIcon icon={['fab', 'css3']} size="2x"/><FontAwesomeIcon icon={['fab', 'node-js']} size="2x"/></div>
            <h2>FaultLine</h2>
            <p>This project was called faultline and it was flipping awesome</p>
          </div>
        </div>
      </div>
    </div>
    <div className = "contact-section" id="contact">
      <h1 className="section-title">Let's Get In <span className="accent">Touch</span></h1>
      <form action="https://formspree.io/f/mjvpzwlw" method="POST" className="contact-form">
        <input type="text" name="name" placeholder = "Your name" className="contact-input" required/>
        <input type="email" name="_replyto" placeholder = "Your email" className="contact-input" required/>
        <textarea name="message" placeholder = "Your message" className="contact-message" />
        <input type="submit" value="Send It" className="contact-button"/>
      </form>
    </div>
    
  </Layout>
)

export default IndexPage

{/* <Link to="/page-2/">Go to page 2</Link> */}
