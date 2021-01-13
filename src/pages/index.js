import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

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
    <div className="skills-container">
      <h1 className="section-title">My <span className="accent">Skills</span></h1>
      <div className="skill-bars">

        <div className="skill-section"><h2>HTML</h2><div className="skill-bar-container"><div className="skill-bar html"></div></div></div>
        <div className="skill-section"><h2>CSS</h2><div className="skill-bar-container"><div className="skill-bar css"></div></div></div>
        <div className="skill-section"><h2>React</h2><div className="skill-bar-container"><div className="skill-bar react"></div></div></div>
      </div>
    </div>
    
  </Layout>
)

export default IndexPage

{/* <Link to="/page-2/">Go to page 2</Link> */}
