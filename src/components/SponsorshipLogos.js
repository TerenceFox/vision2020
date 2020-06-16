import React from 'react'
import Container from "react-bootstrap/Container"

const SponsorshipLogos = () => {
  return (
    <Container className="container--sponsorships frame">
      <h3>Thank you to our sponsors!</h3>
      <div className="sponsorships--logo-group">
        <img src="http://www.fillmurray.com/150/150" />
        <img src="http://www.fillmurray.com/150/150" />
        <img src="http://www.fillmurray.com/150/150" />
      </div>
    </Container>
  )
}

export default SponsorshipLogos
