import React from "react"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import slide1 from "../images/slides/slide1.png"
import slide2 from "../images/slides/slide2.png"
import slide3 from "../images/slides/slide3.png"
import slide4 from "../images/slides/slide4.png"
import rightArrow from "../images/right-arrow.svg"
import leftArrow from "../images/left-arrow.svg"


const ThumbnailContainer = ({index, handleSelect}) => {

  const goToSlide =  (num) => {
    handleSelect(num)
  }

  const nextSlide = () => {
    if (index > 2) {
      handleSelect(0)
    } else {
      handleSelect(index+1)
    }
  }

  const prevSlide = () => {
    if (index > 0) {
      handleSelect(index - 1)
    } else {
      handleSelect(3)
    }
  }

  return (
    <Container className="thumbnail-container">
      <img className="thumbnail--arrow" src={leftArrow} onClick={prevSlide} />
      <div className="thumbnails">
        <div className="thumbnail frame" onClick={() => goToSlide(0)}>
          <img src={slide1} />
        </div>
        <div className="thumbnail frame" onClick={() => goToSlide(1)}>
          <img src={slide2} />
        </div>
        <div className="thumbnail frame" onClick={() => goToSlide(2)}>
          <img src={slide3} />
        </div>
        <div className="thumbnail frame" onClick={() => goToSlide(3)}>
          <img src={slide4} />
        </div>
      </div>
      <img
        className="thumbnail--arrow"
        src={rightArrow}
        onClick={nextSlide}
      />
    </Container>
  )
}

export default ThumbnailContainer
