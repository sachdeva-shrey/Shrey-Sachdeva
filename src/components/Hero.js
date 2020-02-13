import React from "react"
import Fade from 'react-reveal/Fade'

const Hero = () => (
  <section>
    <div
      style={{
        textAlign: "center",
        marginTop: "6rem",
      }}
    >
      <Fade bottom>      
        <h6
        style={{
          textAlign: "left",
          marginLeft: "14%",
          fontSize: "1.5rem",
          fontWeight: "normal",
        }}
      >
        Hi,
      </h6>
      <h1>I'm Shrey Sachdeva,</h1>
      <h6
        style={{
          fontSize: "1.5rem",
          fontWeight: "normal",
        }}
      >
        a developer and designer
      </h6>
      <h6
        style={{
          fontSize: "1.5rem",
          fontWeight: "normal",
        }}
      >
        on a mission to code and design simply beautiful things
      </h6>
      </Fade>
    </div>
  </section>
)

export default Hero
