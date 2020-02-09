import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Skills from "../components/Skills"
import Work from "../components/Work"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Skills />
    <Work />
  </Layout>
)

export default IndexPage
