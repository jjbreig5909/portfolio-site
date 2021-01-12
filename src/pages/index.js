import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Jeff Breig" />
    <h1>Hi, I'm <span className="accent">Jeff</span>.</h1>
    <p>I’m a passionate full stack developer that is totally going to put a better description of myself here once I have the time. For now, know that I’m awesome and you should definitely hire me to work for you.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
