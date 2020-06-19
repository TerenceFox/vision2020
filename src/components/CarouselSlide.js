import React, { useState } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import playButton from "../images/play-button.svg"

import Img from "gatsby-image"
import YouTubeModal from './YouTubeModal'

const CarouselSlide = ({ img, children, src }) => {
  const [show, setShow] = useState(false)
  return (
    <>
      <Container className="carousel--slide-container">
        <Row>
          <Col lg={true} xl={8} className="img-container">
            <div
              className="img-container--overlay"
              onClick={() => setShow(true)}
            >
              <img src={playButton} className="img-container--play-button" />
            </div>
            <Img
              fluid={img}
              alt="Gatsby Docs are awesome"
            />
          </Col>
          <Col lg={true} xl={4} className="slide--text">
            {children}
          </Col>
        </Row>
      </Container>
      <YouTubeModal show={show} setShow={setShow} src={src} />
    </>
  )
}

export default CarouselSlide
