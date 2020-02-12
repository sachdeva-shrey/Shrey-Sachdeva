import React from "react"

const Skills = () => (
  <section
    className="skills"
    style={{
      height: "500px",
      background: "linear-gradient(to right, #03CDFD, #3681D8)",
      padding: "0",
      marginTop: "18%",
      paddingLeft: "0",
      position: "absolute",
      left: "0",
    }}
  >
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic typesetting, remaining essentially
      unchanged. It was popularised in the 1960s with the release of Letraset
      sheets containing Lorem Ipsum passages, and more recently with desktop
      publishing software like Aldus PageMaker including versions of Lorem
      Ipsum.
    </p>
    <div className="container-wrapper">
      <div className="container container-left">
        <h6 className="sub-heading">Code</h6>
        <h4>The duct tape that keeps the world together.</h4>
        <h4
          style={{
            color: "#000",
          }}
        >
          Languages:
        </h4>
        <h4>HTML/(S)CSS</h4>
        <h4>Javascript</h4>
        <h4>ReactJS</h4>
        <h4>React Native</h4>
        <h4>Firebase</h4>
        <h4>NodeJS</h4>
        <h4>MongoDB</h4>
      </div>
      <div className="container container-right">
        <h6 className="sub-heading">Design</h6>
        <h4
          style={{
            color: "#000",
          }}
        >
          Tools I use:
        </h4>
        <h4>Adobe Suite</h4>
        <h4>Figma</h4>
        <h4></h4>
        <br></br>
        <h4>Things I like to design:</h4>
        <h4>UI/UX</h4>
        <h4></h4>
        <h4>MongoDB</h4>
      </div>
    </div>
  </section>
)

export default Skills
