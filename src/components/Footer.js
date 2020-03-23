import React from "react"
import styled from "styled-components"

import hi from "../images/hi.png"

const Div = styled.div`
  display: block;
  width: 100vw;
  background-color: var(--main-font-color);
  height: 300px;
`

const Credits = styled.p`
  color: var(--grey-color);
  margin-top: 20px;
`

const Link = styled.a`
  margin-left: 10px;
  text-decoration: none;
`

const Image = styled.img`
  height: 30px;
  display: inline-block;
  padding-top: 5px;
  padding-left: 15px;
`

const Button = styled.button`
  background-color: #262d37;
  color: white;
  border: none;
  border-radius: 6px;
  display: block;
  margin: 0px auto;
  cursor: pointer;
  padding: 8px 20px;
`

function Footer() {
  return (
    <Div>
      <div style={{ marginTop: "50%" }}>
        <h2>
          Let's build beautiful,
          <br />
          meaningful things together.
        </h2>
        <p>Interested in collaborating? I'll buy the coffee.</p>
      </div>
      <Link className="mailto" href="mailto:shrey00000@gmail.com">
        <Button className="hi">
          <h2
            style={{
              textAlign: "left",
              display: "inline",
              marginTop: "20px",
            }}
          >
            Say Hi
          </h2>
          <Image src={hi} alt="Hi"></Image>
        </Button>
      </Link>
      <div
        className="socials"
        style={{ display: "flex", marginLeft: "37%", marginTop: "150px" }}
      >
        <Link href="https://github.com/shrey-sachdeva2000">
          <p>GitHub</p>
        </Link>
        <Link href="https://github.com/shrey-sachdeva2000">
          <p>LinkedIn</p>
        </Link>
        <Link href="https://github.com/shrey-sachdeva2000">
          <p>Dribbble</p>
        </Link>
        <Link href="https://github.com/shrey-sachdeva2000">
          <p>Behance</p>
        </Link>
        <Link href="https://github.com/shrey-sachdeva2000">
          <p>Medium</p>
        </Link>
      </div>
      <Credits>Crafted with &hearts; by Shrey Sachdeva</Credits>
      <Credits>&copy; Shrey Sachdeva</Credits>
    </Div>
  )
}

export default Footer
