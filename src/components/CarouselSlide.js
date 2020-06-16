import React, { useState } from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Modal from "react-bootstrap/Modal"
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed"
import playButton from "../images/play-button.svg"
import closeButton from "../images/close-button.svg"

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
            <img src={img} className="carousel--img" />
          </Col>
          <Col lg={true} xl={4} className="slide--text">
            {children}
          </Col>
        </Row>
      </Container>

      <Modal show={show} size="xl" centered onHide={() => setShow(false)}>
        <img
          src={closeButton}
          className="modal--close-button"
          onClick={() => setShow(false)}
        />
        <ResponsiveEmbed aspectRatio="16by9">
          <iframe
            src={src}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </ResponsiveEmbed>
      </Modal>
    </>
  )
}

export default CarouselSlide
