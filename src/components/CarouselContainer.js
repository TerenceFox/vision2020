import React, { useState } from 'react'
import Container from "react-bootstrap/Container"
import Carousel from "react-bootstrap/Carousel"
import ThumbnailContainer from './ThumbnailContainer'

const CarouselContainer = () => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  return (
    <>
    <Container>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null} controls={false}>
        <Carousel.Item>
          <h3>1</h3>
        </Carousel.Item>
        <Carousel.Item>
          <h3>2</h3>
        </Carousel.Item>
        <Carousel.Item>
          <h3>3</h3>
        </Carousel.Item>
        <Carousel.Item>
          <h3>4</h3>
        </Carousel.Item>
        <Carousel.Item>
          <h3>5</h3>
        </Carousel.Item>
      </Carousel>
    </Container>
    <ThumbnailContainer  index={index} handleSelect={handleSelect}/>
    </>
  )
}

export default CarouselContainer
