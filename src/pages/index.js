import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from '../components/Image'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section>
      <div
        style={{
          textAlign: 'center',
          marginTop: '6rem'
        }}
      >
        <h6 
          style={{
            textAlign: 'left',
            marginLeft: '14%',
            fontSize: '1.5rem'
          }}
        >
          Hi,
        </h6>
        <h1>I'm Shrey Sachdeva,</h1>
        <h6 
          style={{
            fontSize: '1.5rem'
          }}
        >
          a developer and designer</h6>
        <h6 style={{
            fontSize: '1.5rem'
          }}>on a mission to code and design simply beautiful things</h6>
      </div>   
    </section>
    <section 
      className="skills"
      style={{
        height: '500px',
        background: 'linear-gradient(to right, #03CDFD, #3681D8)',
        padding: '0',
        marginTop: '18%',
        paddingLeft: '0',
        width: '100vw',
        position: 'absolute',
        left: '0'
      }}>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <div className="container-wrapper">
        <div className="container container-left">
          <h6 className="sub-heading">Code</h6>
          <p></p>
        </div>
        <div className="container container-right">
          <h6 className="sub-heading">Design</h6>
        </div>
      </div>
    </section>
    <section>
      <div style={{ marginTop : "150%"}}>
      <Image alt="MOZOHACK" filename="mozohack.jpg" />
      <Image alt="MOZOHACK" filename="mozohack.jpg" />
      </div>
    </section>
  </Layout>
)

export default IndexPage
