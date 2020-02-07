import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../images/shrey-sachdeva.png"
import hi from "../images/hi.png"

const Header = ({ siteTitle }) => (
  <header>
    <div 
    style={{
      display: 'flex',
    }}>
      <img src={logo} 
        style={{
          height: '50px',
          width: 'auto',
          marginLeft: '50px'
        }}
      />

      <div
        style={{
          display: 'flex',
          marginLeft: '75%',
        }}>
        <h4>About</h4>
        <div
          style={{
            backgroundColor: '#081430',
            color: '#fff',
            border: 'none',
            borderRadius: '20px',
            paddingLeft: '20px',
            paddingRight: '20px',
            height: '30px',
            marginLeft: '30px',
          }}>
            <h4
              style={{
                textAlign: 'left',
              }}>
                Say Hi
            </h4>
            {/* <img src={hi} 
              style={{
                height: '20px',
                width: 'auto',
              }}
            /> */}
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
