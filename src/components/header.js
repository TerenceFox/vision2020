import React from "react"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import logo from "../images/logo.png"

const Header = () => {
  return (
    <Container className="container--header frame">
        <div className="header--logo">
          <img src={logo} />
        </div>
        <div className="header--text">
          <h3>
            6:30-7PM EST: Join us in the{" "}
            <a href="#" className="header--link">
              Zoom room!
            </a>
          </h3>
          <p>Learn about the Saturday Play program and Toast the Honoree.</p>
        </div>
    </Container>
  )
}

export default Header
