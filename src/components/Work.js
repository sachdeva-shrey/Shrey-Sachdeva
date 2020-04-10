import React from "react"
import Fade from "react-reveal/Fade"
import styled from "styled-components"

import Image from "./Image"

const Container = styled.div`
    margin-top: 90%;
    @media (max-width: 415px) {
        margin-top: 430%;
    }
`

const Div = styled.div`
    position: absolute;
    left: 8%;
    @media (max-width: 415px) {
        display: inline-block;
    }
`

const ImageContainer = styled.div`
   display: flex;
   @media (max-width: 415px) {
    display: block;
}
`

const Header = styled.h2`
    @media (max-width: 415px) {
        font-size: 1.4rem;
    }
`

function Work() {
    return (
        <Container>
            <Fade bottom>
                <Header>
                    Always creating and hardly stopping.
                    <br /> Here's a place for some of my creations.
                </Header>
                <Div>
                    <ImageContainer>
                        <a href="https://mozohack.srmkzilla.net">
                            <Image alt="mozohack" filename="mozohack.jpg" />
                        </a>
                        <a href="#">
                            <Image alt="connekt" filename="connekt.jpg" />
                        </a>
                    </ImageContainer>
                    <ImageContainer>
                        <a href="https://play.google.com/store/apps/details?id=com.ionicframework.srmpedia121298&hl=en_IN">
                            <Image alt="srmpedia" filename="srmpedia.jpg" />
                        </a>
                        <a href="https:/www.marketplace.visualstudio.com/items?itemName=SRMKZILLA.Mellow">
                            <Image alt="mellow" filename="mellow.jpg" />
                        </a>
                    </ImageContainer>
                    <ImageContainer>
                        <a href="https://srmkzilla.net">
                            <Image alt="srmkzilla" filename="srmkzilla.jpg" />
                        </a>
                        <a href="#">
                            <Image alt="forms" filename="forms_by_srmkzilla.jpg" />
                        </a>
                    </ImageContainer>
                </Div>
            </Fade>
        </Container>
    )
}
export default Work
