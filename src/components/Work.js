import React from "react"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import { InView } from "react-intersection-observer"
import Fade from "react-reveal/Fade"
import Image from "../components/Image"
import { ThemeProvider } from "styled-components"
import Grid from "styled-components-grid"

const theme = {
  breakpoints: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
  },
}

const Work = () => (
  <div style={{ marginTop: "150%" }}>
    <Fade bottom>
      <h2>
        Always creating and hardly stopping.
        <br /> Here's a place for the rest of my creations.
      </h2>

      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            position: "absolute",
            left: "8%",
          }}
        >
          <div>
            <a href="https://srmkzilla.net">
              <Image alt="srmkzilla" filename="srmkzilla_480x270.jpg" />
            </a>
            <a href="https://mozohack.srmkzilla.net">
              <Image alt="mozohack" filename="mozohack_480x270.jpg" />
            </a>
          </div>
          <div>
            <a href="https://play.google.com/store/apps/details?id=com.ionicframework.srmpedia121298&hl=en_IN">
              <Image alt="srmpedia" filename="srmpedia_480x270.jpg" />
            </a>
            <a href="https://srmkzilla.net">
              <Image alt="srmkzilla" filename="srmkzilla_480x270.jpg" />
            </a>
          </div>
        </div>
      </div>
    </Fade>
  </div>
)

export default Work
