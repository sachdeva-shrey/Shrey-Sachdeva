import React from "react"
import Fade from "react-reveal/Fade"
import styled from "styled-components"

const Div = styled.div`
    margin-top: 10%;
`

const Title = styled.h1`
    font-family: "CircularStd-Medium";
    font-weight: bold;
    font-size: 4rem;
    line-height: 1.1;
    text-align: center;
    color: var(--main-font-color);
`

const SubHeading = styled.h6`
    font-size: 1.5rem;
    text-align: center;
`

function Hero() {
    return (
        <Div>
            <Fade bottom>
                <SubHeading>Hi,</SubHeading>
                <Title>I'm Shrey Sachdeva,</Title>
                <SubHeading>a developer and designer</SubHeading>
                <SubHeading>
                    on a mission to code and design simply beautiful things
                </SubHeading>
            </Fade>
        </Div>
    )
}

export default Hero
