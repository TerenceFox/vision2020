import React from "react"
import Jumbotron from "react-bootstrap/Jumbotron"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import logo from "../images/logo.png"

const Header = () => {
  return (
    <Jumbotron fluid>
      <Container>
        <Row>
          <Col sm={6} md={4}>
            <img src={logo} width="300"/>
          </Col>
          <Col sm={6} md={8}>
            <h2>Kennedy Children’s Center</h2> 
            <h1>Vision 2020 Virtual Benefit</h1>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}

export default Header
