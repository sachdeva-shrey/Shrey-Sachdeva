import React from "react"
import Fade from "react-reveal/Fade"

import code from "../images/code.svg"
import design from "../images/graphic-design.svg"

const Skills = () => (
  <section
    className="skills"
    style={{
      height: "500px",
      background: " var(--main-font-color)",
      padding: "0",
      marginTop: "18%",
      paddingLeft: "0",
      position: "absolute",
      left: "0",
    }}
  >
    <Fade bottom>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <div className="container-wrapper">
        <div
          className="container container-left"
          style={{ textAlign: "center" }}
        >
          <img
            style={{
              height: "60px",
              width: "auto",
              display: "block",
              margin: "10% 45%",
            }}
            src={code}
            alt="code"
          ></img>
          <h6 className="sub-heading">Code</h6>
          <h4>The duct tape that keeps the world together.</h4>
          <h4
            style={{
              color: "#9B9EA3",
            }}
          >
            Languages:
          </h4>
          <ul>
            <li>HTML/(S)CSS</li>
            <li>Javascript</li>
            <li>ReactJS</li>
            <li>React Native</li>
            <li>Firebase</li>
            <li>NodeJS</li>
            <li>MongoDB</li>
          </ul>
        </div>
        <div className="container container-right">
          <img
            style={{
              height: "60px",
              width: "auto",
              display: "block",
              margin: "10% 45%",
            }}
            src={design}
            alt="design"
          ></img>
          <h6 className="sub-heading">Design</h6>
          <h4>The duct tape that keeps the world together.</h4>
          <h4
            style={{
              color: "#9B9EA3",
            }}
          >
            Tools I use:
          </h4>
          <ul>
            <li>Adobe Suite, Figma, Pen & paper</li>
            <br></br>

            <h4
              style={{
                color: "#9B9EA3",
              }}
            >
              Things I like to design:
            </h4>
            <li>UI/UX</li>
            <li>Illustrations</li>
            <li>Branding</li>
            <li>Logos</li>
          </ul>
        </div>
      </div>
    </Fade>
  </section>
)

export default Skills