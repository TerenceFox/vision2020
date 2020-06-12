import React from 'react'
import Navbar from "react-bootstrap/Navbar"

const TopBanner = ({content}) => {
  return (
    <Navbar className="justify-content-center" >
      <Navbar.Brand className="banner-content">{content}</Navbar.Brand>
    </Navbar>
  )
}

export default TopBanner