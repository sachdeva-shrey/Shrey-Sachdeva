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
            const imag = data.images.edges.find(n => {
                return n.node.relativePath.includes(props.filename)
            })
            if (!imag) {
                return null
            }

            return (
                    <Img
                        className="work"
                        alt={props.alt}
                        fluid={imag.node.childImageSharp.fluid}
                    />
            )
        }}
    />
)

export default Image
