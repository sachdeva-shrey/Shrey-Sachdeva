import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = props => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.images.edges.find(n => {
        return n.node.relativePath.includes(props.filename)
      })
      if (!image) {
        return null
      }

      return (
        <div
          style={{
            display: "flex",
            margin: "0",
            marginLeft: "0",
          }}
        >
          <Img
          className="work"
            style={{
              borderRadius: "10px",
              width: "600px",
              height: "auto",
              marginLeft: "40px",
            }}
            alt={props.alt}
            fluid={image.node.childImageSharp.fluid}
          />
        </div>
      )
    }}
  />
)

export default Image
