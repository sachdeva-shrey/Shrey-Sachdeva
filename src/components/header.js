import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/shrey-sachdeva.png"
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
      />

      <div
        style={{
          display: "flex",
          marginLeft: "75%",
        }}
      >
        <FaLinkedinIn
          size="1.5em"
          color="#1FA2F2"
          style={{ paddingLeft: "10px" }}
        />
        <FaGithub
          size="1.5em"
          color="#1FA2F2"
          style={{ paddingLeft: "10px" }}
        />
        <FaDribbble
          size="1.5em"
          color="#1FA2F2"
          style={{ paddingLeft: "10px" }}
        />
        <FaBehance
          size="1.5em"
          color="#1FA2F2"
          style={{ paddingLeft: "10px" }}
        />
        <FaMedium
          size="1.5em"
          color="#1FA2F2"
          style={{ paddingLeft: "10px" }}
        />
        <div
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
            width: "125px",
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
