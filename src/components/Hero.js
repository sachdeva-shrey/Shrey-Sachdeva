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
    @media (max-width: 415px) {
        font-size: 2rem;
    }
`

const SubHeading = styled.h6`
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: 1rem;
    @media (max-width: 415px) {
        font-size: 1rem;
        margin-left: 20px;
        margin-right: 20px;
    }
`

const SubHeadingLeft = styled.h6`
    font-size: 1.5rem;
    text-align: left;
    margin-left: 28%;
    margin-bottom: 1rem;
    @media (max-width: 415px) {
        font-size: 1rem;
        margin-bottom: 1rem;
        margin-left: 15%;
    }
`

function Hero() {
    return (
        <Div>
            <Fade bottom>
                <SubHeadingLeft>Hi,</SubHeadingLeft>
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
