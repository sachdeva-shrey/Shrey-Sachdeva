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
                <Img
                    className="work"
                    style={{
                        height: "280px",
                        width: "500px",
                        borderRadius: "6px",
                    }}
                    alt={props.alt}
                    fluid={image.node.childImageSharp.fluid}
                />
            )
        }}
    />
)

export default Image
