import React from "react"
import Fade from "react-reveal/Fade"
import styled from "styled-components"

import code from "../images/code.svg"
import design from "../images/graphic-design.svg"

const Container = styled.div`
    height: 500px;
    width: 100%;
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

const Heading = styled.h1`
    font-family: "CircularStd-Medium";
    font-weight: bold;
    text-align: center;
    color: var(--main-font-color);
    letter-spacing: 1px;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0 auto;
    width: 65%;
    height: 700px;
    background-color: #303741;
    margin-top: 100px;
    border-radius: 20px;
    box-shadow: 0px 7px 5px 0px #292929;
    margin-bottom: 20%;
    text-align: center;
    @media (max-width: 415px) {
        display: block;
        height: 100%;
        width: 90%;
        margin-top: 50px;
    }
`

const LeftGrid = styled.div`
    display: inline-block;
    text-align: center;
    margin: 0 auto;
`

const RightGrid = styled.div`
    display: inline-block;
    border-left: 0.5px solid var(--main-font-color);
    text-align: center;
    @media (max-width: 415px) {
        border-left: none;
    }
`

function Skills() {
    return (
        <Container className="skills">
            <Fade bottom>
                <p>
                    I'm a Computer Science Undergrad at SRMIST, Chennai
                    currently in my second year. <br /> An abstract thinker who
                    writes code and designs pixel-perfect user-interfaces with
                    industry experience.
                    <br /> <br />
                    Living, learning and leveling up one day at a time.
                </p>
                <Grid>
                    <LeftGrid>
                        <Img src={code} alt="code"></Img>
                        <Heading>Code</Heading>
                        <h4>
                            The duct tape that keeps the world together.
                            <br />
                            Here are a few technologies I've been working with
                            recently.
                        </h4>
                        <SubHeading>Languages:</SubHeading>
                        <ul>
                            <li>HTML/(S)CSS</li>
                            <li>Javascript</li>
                            <li>React.js</li>
                            <li>Firebase</li>
                            <li>Node.js</li>
                            <li>MongoDB</li>
                            <li>Gatsby.js</li>
                            <li>GraphQL</li>
                        </ul>
                    </LeftGrid>
                    <RightGrid>
                        <Img src={design} alt="design"></Img>
                        <Heading>Design</Heading>
                        <h4>
                            I strive to create simple, original, and impactful
                            user experiences.
                        </h4>
                        <SubHeading>Tools I use:</SubHeading>
                        <ul>
                            <li>Adobe Suite, Figma, Pen & paper</li>
                            <br></br>
                            <SubHeading>Things I like to design:</SubHeading>
                            <li>UI/UX</li>
                            <li>Illustrations</li>
                            <li>Branding</li>
                        </ul>
                    </RightGrid>
                </Grid>
            </Fade>
        </Container>
    )
}

export default Skills
