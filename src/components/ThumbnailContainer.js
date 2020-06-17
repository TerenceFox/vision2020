import React from "react"
import Container from "react-bootstrap/Container"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import rightArrow from "../images/right-arrow.svg"
import leftArrow from "../images/left-arrow.svg"

const ThumbnailContainer = ({ index, handleSelect, slides }) => {

  const goToSlide = num => {
    handleSelect(num)
  }

  const nextSlide = () => {
    if (index > 2) {
      handleSelect(0)
    } else {
      handleSelect(index + 1)
    }
  }

  const prevSlide = () => {
    if (index > 0) {
      handleSelect(index - 1)
    } else {
      handleSelect(3)
    }
  }

  const thumbnails = slides.map((slide, index) => {
    return (
      <div key={index} className="thumbnail frame" onClick={() => goToSlide(index)}>
            <Img fluid={slide} alt="Thumbnail images"/>
          </div>
    )
  })

  return (
    <Container className="thumbnail-container">
      <img className="thumbnail--arrow" src={leftArrow} onClick={prevSlide} />
      <div className="thumbnails">{thumbnails}</div>
      <img className="thumbnail--arrow" src={rightArrow} onClick={nextSlide} />
    </Container>
  )
}

export default ThumbnailContainer
