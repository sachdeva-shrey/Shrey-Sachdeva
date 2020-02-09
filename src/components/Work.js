import React from "react"
import Img from "gatsby-image"
import PropTypes from "prop-types"
import { InView } from "react-intersection-observer"

import Image from "../components/Image"

const Work = () => (
  <section>
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          marginTop: "150%",
        }}
      >
        <InView>
          {({ inView, ref, entry }) => (
            <div ref={ref}>
              {inView ? <Image alt="moz" filename="srmkzilla.jpg" /> : null}
            </div>
          )}
        </InView>
      </div>
      <div style={{ marginTop: "150%" }}></div>
    </div>
  </section>
)

export default Work
