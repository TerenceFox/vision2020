import React from "react"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

const Header = () => {
  return (
    <Jumbotron fluid>
      <Container>
        <Row>
          <Col sm={6} md={4}>
            <img src="http://www.fillmurray.com/200/200" />
          </Col>
          <Col sm={6} md={8}>
            <h1>Kennedy Children’s Center Vision 2020 Virtual Benefit</h1>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}

export default Header
