import React from "react"
import Fade from "react-reveal/Fade"
import styled from "styled-components"

import Image from "../components/Image"

const Container = styled.div`
  margin-top: 90%;
`

const Div = styled.div`
    display: flex;
    position: absolute;
    left: 8%;
`

function Work() {
    return (
        <Container>
            <Fade bottom>
                <h2>
                    Always creating and hardly stopping.
                    <br /> Here's a place for the rest of my creations.
                </h2>

                <Div>
                    <div>
                        <a href="https://srmkzilla.net">
                            <Image
                                alt="srmkzilla"
                                filename="srmkzilla_480x270.jpg"
                            />
                        </a>
                        <a href="https://mozohack.srmkzilla.net">
                            <Image
                                alt="mozohack"
                                filename="mozohack_480x270.jpg"
                            />
                        </a>
                    </div>
                    <div>
                        <a href="https://play.google.com/store/apps/details?id=com.ionicframework.srmpedia121298&hl=en_IN">
                            <Image
                                alt="srmpedia"
                                filename="srmpedia_480x270.jpg"
                            />
                        </a>
                        <a href="https://srmkzilla.net">
                            <Image
                                alt="srmkzilla"
                                filename="srmkzilla_480x270.jpg"
                            />
                        </a>
                    </div>
                </Div>
            </Fade>
        </Container>
    )
}
export default Work
