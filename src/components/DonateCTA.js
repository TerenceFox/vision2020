import React from "react"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"

const DonateCTA = () => {
  return (
    <Container className="container--donate frame">
      <h1>
        Raising money for for young children with Autism and their families
      </h1>
      <div className="donate--btn-container">
        <Button
          className="donate--btn donate-btn"
          href="https://app.mobilecause.com/form/S412XA?vid=92vhd"
          target="blank"
          size="lg"
        >
          Donate
        </Button>
        <Button
          className="donate--btn gallery-btn"
          href="https://app.mobilecause.com/f/2sun/n?vid=8a4vn"
          target="blank"
          size="lg"
        >
          Gallery Store
        </Button>
      </div>
    </Container>
  )
}

export default DonateCTA
