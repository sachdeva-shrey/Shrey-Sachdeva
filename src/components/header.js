import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/ss_white.svg"
import hi from "../images/hi.png"

import { FaDribbble } from "react-icons/fa"
import { FaBehance } from "react-icons/fa"
import { FaMedium } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"

const Header = ({ siteTitle }) => (
  <header>
    <div
      style={{
        display: "flex",
      }}
    >
      <img
        src={logo}
        style={{
          height: "50px",
          width: "auto",
          marginLeft: "50px",
        }}
        alt="shrey-sachdeva-logo"
      />

      <div
        style={{
          display: "flex",
          marginLeft: "75%",
        }}
      >
        <a hreflang="english" href="https://www.linkedin.com/in/shrey-sachdeva/">
        <FaLinkedinIn
          size="1.5em"
          color="#1FA2F2"
          style={{ paddingLeft: "10px" }}
          alt="linkedin"
        /></a>
        <a hreflang="english" href="https://github.com/shrey-sachdeva2000">
        <FaGithub
          size="1.5em"
          color="#1FA2F2"
          style={{ paddingLeft: "10px" }}
          alt="github"
        /></a>
        <a hreflang="english" href="https://dribbble.com/shrey_sachdeva">
        <FaDribbble
          size="1.5em"
          color="#1FA2F2"
          style={{ paddingLeft: "10px" }}
          alt="dribbble"
        /></a>
         <a hreflang="english" href="https://www.behance.net/shreysachdeva">
        <FaBehance
          size="1.5em"
          color="#1FA2F2"
          style={{ paddingLeft: "10px" }}
          alt="behance"
        /></a>
        <a hreflang="english" href="https://medium.com/@shreysachdeva.2000">
        <FaMedium
          size="1.5em"
          color="#1FA2F2"
          style={{ paddingLeft: "10px" }}
          alt="medium"
        /></a>
        <div
        className="hi"
          style={{
            backgroundColor: "#303741",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            paddingLeft: "20px",
            paddingRight: "20px",
            height: "30px",
            marginLeft: "30px",
            display: "flex",
            width: "124px",
            cursor: "pointer",
          }}
        >
          <h4
            style={{
              textAlign: "left",
              display: "inline",
            }}
          >
            Say Hi
          </h4>
          <img
            style={{
              height: "20px",
              display: "inline-block",
              paddingTop: "5px",
              paddingLeft: "10px",
            }}
            src={hi}
            alt="waving hand"
          ></img>
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
