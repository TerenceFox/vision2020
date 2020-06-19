import React from "react"
import Container from "react-bootstrap/Container"
import logo from "../images/logo.png"

const Header = () => {
  return (
    <Container className="container--header frame">
      <div className="header--logo">
        <img src={logo} />
      </div>
    </Container>
  )
}

export default Header
