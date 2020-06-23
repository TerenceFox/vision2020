import React from 'react'
import Nav from "react-bootstrap/Nav"

const Banner = () => {
  return (
    <Nav className="justify-content-center banner">
      <Nav.Link href="https://www.kenchild.org">
        <h3>Click here to return to our main site</h3>
      </Nav.Link>
    </Nav>
  )
}

export default Banner
