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
      <InView>
        {({ inView, ref, entry }) => (
          <div style={{ display: "flex" }}>
            <div
              ref={ref}
              style={{
                display: "flex",
                position: "absolute",
                left: "8%",
              }}
            >
              <div>
                <a href="https://srmkzilla.net">
                  {inView ? (
                    <Image alt="srmkzilla" filename="srmkzilla.jpg" />
                  ) : null}{" "}
                </a>
                <h3>UI/UX</h3>
                {inView ? (
                  <Image alt="srmkzilla" filename="mozohack.jpg" />
                ) : null}
                <h3>UI/UX</h3>
              </div>
              <div>
                {inView ? (
                  <Image alt="srmkzilla" filename="srmkzilla.jpg" />
                ) : null}
                <h3>UI/UX</h3>
                {inView ? (
                  <Image alt="srmkzilla" filename="srmkzilla.jpg" />
                ) : null}
                <h3>UI/UX</h3>
              </div>
            </div>
          </div>
        )}
      </InView>
    </Fade>
  </div>
)

export default Work
