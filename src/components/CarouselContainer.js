import React, { useState } from 'react'
import Container from "react-bootstrap/Container"
import Carousel from "react-bootstrap/Carousel"
import ThumbnailContainer from './ThumbnailContainer'
import CarouselSlide from './CarouselSlide'
import slide1 from "../images/slide1.png"
import slide2 from "../images/slide2.png"
import slide3 from "../images/slide3.png"
import slide4 from "../images/slide4.png"
import slide5 from "../images/slide5.png"

const CarouselContainer = () => {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  return (
    <>
      <Container className="container--carousel">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          interval={null}
          controls={false}
          className="frame"
        >
          <Carousel.Item>
            <CarouselSlide
              img={slide1}
              src={"https://www.youtube.com/embed/7QYjVERkEfg"}
            >
              <h3>Welcome to KCC Vision 2020: A Virtual Benefit!</h3>
            </CarouselSlide>
          </Carousel.Item>
          <Carousel.Item>
            <CarouselSlide img={slide2}>
              <h3>Our Honoree:</h3>
              <h3>Michael O'Conor, KCC Board Chair</h3>
              <p>
                Twenty years, countless hours, and one question: "What can I
                do?"
              </p>
              <p>
                It is our joy to honor our very special Board Chair, who makes
                our work a success.
              </p>
              <p>Hear Michael talk about his work with KCC here.</p>
            </CarouselSlide>
          </Carousel.Item>
          <Carousel.Item>
            <CarouselSlide img={slide3}>
              <h3>Saturday Play Program</h3>
              <p>
                100% of the donations we raise tonight will support our Saturday
                Play Program for children with Autism and their families.{" "}
              </p>
              <p>
                Let our participants tell you what the program has meant to
                them.
              </p>
            </CarouselSlide>
          </Carousel.Item>
          <Carousel.Item>
            <CarouselSlide img={slide4}>
              <h3>Join Marty at the Bar</h3>
              <p>
                Marty Keating, Michael's friend of 40+ years and a former KCC
                Board Member himself, demonstrates how to mix a classic drink
                for a classic guy: the Irish Old Fashioned.
              </p>
            </CarouselSlide>
          </Carousel.Item>
          <Carousel.Item>
            <CarouselSlide img={slide5}>
              <h3>Making Tonight Possible</h3>
              <p>
                The Vision 2020 Benefit wouldn't have been possible without:
              </p>
              <ul>
                <li>Our Host Committee</li>
                <li>Our Board of Directors</li>
                <li>Our Sponsors</li>
              </ul>
              <p>Learn more and join us in thanking them.</p>
            </CarouselSlide>
          </Carousel.Item>
        </Carousel>
        <ThumbnailContainer index={index} handleSelect={handleSelect} />
      </Container>
    </>
  )
}

export default CarouselContainer
