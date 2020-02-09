import React from "react"
import PropTypes from "prop-types"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Gallery = ({ data }) => (
  <Layout>
    <SEO title="Image gallery" />
    <div
      style={{
        display: "flex",
        marginTop: "10%",
      }}
    >
      <Img
        style={{
          marginTop: "20%",
          borderRadius: "20px",
          width: "700px",
          height: "auto",
          margin: "0",
          marginLeft: "30px",
        }}
        fluid={data.mozohackImage.childImageSharp.fluid}
        alt="No"
        />
    </div>
  </Layout>
)

Gallery.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query {
    mozohackImage: file(relativePath: { eq: "mozohack.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Gallery
