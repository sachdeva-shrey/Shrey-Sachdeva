import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import logo from "../images/ss_white.svg"
import hi from "../images/hi.png"

import { FaDribbble } from "react-icons/fa"
import { FaBehance } from "react-icons/fa"
import { FaMedium } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"

const Container = styled.div`
    display: flex;
`

const Logo = styled.img`
    height: 50px;
    width: auto;
    margin-left: 50px;
    @media (max-width: 415px) {
        height: 28px;
    }
`

const Wrapper = styled.div`
    display: flex;
    margin-left: 70%;
    @media (max-width: 415px) {
        margin-left: 35%;
    }
`

const Button = styled.div`
    display: flex;
    background-color: #303741;
    color: #ffffff;
    border: none;
    border-radius: 6px;
    padding-left: 20px;
    padding-right: 20px;
    margin-left: 30px;
    height: 54%;
    width: 124px;
    cursor: pointer;
`

const ButtonText = styled.h4`
    text-align: left;
    display: inline;
`

const WavingEmoji = styled.img`
    height: 20px;
    display: inline-block;
    padding-top: 5px;
    padding-left: 10px;
`
const Social = styled.div`
    @media (max-width: 415px) {
        display: none;
    }
`

const Header = ({ siteTitle }) => (
    <header>
        <Container>
            <Logo src={logo} alt="shrey-sachdeva-logo" />
            <Wrapper>
                <Social>
                    <a
                        hreflang="english"
                        href="https://www.linkedin.com/in/shrey-sachdeva/"
                    >
                        <FaLinkedinIn
                            size="1.5em"
                            color="#1FA2F2"
                            className="icon"
                            style={{ paddingLeft: "10px", marginRight: "10px" }}
                            alt="linkedin"
                        />
                    </a>
                    <a
                        hreflang="english"
                        href="https://github.com/shrey-sachdeva2000"
                    >
                        <FaGithub
                            size="1.5em"
                            color="#1FA2F2"
                            className="icon"
                            style={{ paddingLeft: "10px", marginRight: "10px" }}
                            alt="github"
                        />
                    </a>
                    <a
                        hreflang="english"
                        href="https://dribbble.com/shrey_sachdeva"
                    >
                        <FaDribbble
                            size="1.5em"
                            color="#1FA2F2"
                            className="icon"
                            style={{ paddingLeft: "10px", marginRight: "10px" }}
                            alt="dribbble"
                        />
                    </a>
                    <a
                        hreflang="english"
                        href="https://www.behance.net/shreysachdeva"
                    >
                        <FaBehance
                            size="1.5em"
                            color="#1FA2F2"
                            className="icon"
                            style={{ paddingLeft: "10px", marginRight: "10px" }}
                            alt="behance"
                        />
                    </a>
                    <a
                        hreflang="english"
                        href="https://medium.com/@shreysachdeva.2000"
                    >
                        <FaMedium
                            size="1.5em"
                            color="#1FA2F2"
                            className="icon"
                            style={{ paddingLeft: "10px", marginRight: "10px" }}
                            alt="medium"
                        />
                    </a>
                </Social>
                <Button className="hi">
                    <ButtonText>Say Hi</ButtonText>
                    <WavingEmoji src={hi} alt="waving hand"></WavingEmoji>
                </Button>
            </Wrapper>
        </Container>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
