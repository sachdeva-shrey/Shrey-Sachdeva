import React from "react"
import Fade from "react-reveal/Fade"
import styled from "styled-components"

import code from "../images/code.svg"
import design from "../images/graphic-design.svg"

const Container = styled.div`
  height: 500px;
  background: var(--main-font-color);
  margin-top: 18%;
  padding-left: 0;
  position: absolute;
  left: 0;
`

const Img = styled.img`
  height: 60px;
  width: auto;
  display: block;
  margin: 10% 45%;
`

const SubHeading = styled.h4`
  color: var(--grey-color);
`

function Skills() {
  return (
    <Container className="skills">
      <Fade bottom>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="container-wrapper">
          <div
            className="container container-left"
            style={{ textAlign: "center" }}
          >
            <Img src={code} alt="code"></Img>
            <h6 className="sub-heading">Code</h6>
            <h4>The duct tape that keeps the world together.</h4>
            <SubHeading>Languages:</SubHeading>
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
            <Img src={design} alt="design"></Img>
            <h6 className="sub-heading">Design</h6>
            <h4>The duct tape that keeps the world together.</h4>
            <SubHeading>Tools I use:</SubHeading>
            <ul>
              <li>Adobe Suite, Figma, Pen & paper</li>
              <br></br>
              <SubHeading>Things I like to design:</SubHeading>
              <li>UI/UX</li>
              <li>Illustrations</li>
              <li>Branding</li>
            </ul>
          </div>
        </div>
      </Fade>
    </Container>
  )
}

export default Skills
