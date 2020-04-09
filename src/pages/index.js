import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Skills from "../components/Skills"
import Work from "../components/Work"
import Footer from "../components/Footer"

const IndexPage = () => (
    <Layout>
        <SEO title="Shrey Sachdeva" />
        <Hero />
        <Skills />
        <Work />
        <Footer />
    </Layout>
)

export default IndexPage
