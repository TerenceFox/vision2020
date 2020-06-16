import React from "react"
import Container from "react-bootstrap/Container"
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
          <a
            href="https://us02web.zoom.us/j/87890041957?pwd=Y3N1aG5SektDUGdGcXMzV3VudGoyUT09"
            target="blank"
            className="header--link"
          >
            Zoom room!
          </a>
        </h3>
        <p>Learn about the Saturday Play program and Toast the Honoree.</p>
      </div>
    </Container>
  )
}

export default Header
