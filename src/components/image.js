import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

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
                    <Img
                        className="work"
                        alt={props.alt}
                        fluid={image.node.childImageSharp.fluid}
                    />
            )
        }}
    />
)

export default Image
