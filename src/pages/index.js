import React from "react"

import { ThemeProvider } from "styled-components";

import lightTheme from "../themes/light";

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero"
import Skills from "../components/Skills"
import Work from "../components/Work"
import Footer from "../components/Footer"
import Image from "../components/image"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
      <Hero />
      <Skills />
      <Work />
      <Image />
      <Footer />
  </Layout>
)

export default IndexPage