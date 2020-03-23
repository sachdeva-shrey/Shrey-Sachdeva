import React from "react"
import Fade from "react-reveal/Fade"

import Image from "../components/Image"

function Work() {
  return (
    <div style={{ marginTop: "90%" }}>
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
}
export default Work
