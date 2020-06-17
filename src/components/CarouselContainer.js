import React, { useState } from 'react'
import Container from "react-bootstrap/Container"
import Carousel from "react-bootstrap/Carousel"
import ThumbnailContainer from './ThumbnailContainer'
import CarouselSlide from './CarouselSlide'
import slide1 from "../images/slides/slide1.png"
import slide2 from "../images/slides/slide2.png"
import slide3 from "../images/slides/slide3.png"
import slide4 from "../images/slides/slide4.png"

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
            <CarouselSlide img={slide1} src={""}>
              <h3>Welcome to KCC Vision 2020: A Virtual Benefit!</h3>
              <p>
                What is a virtual benefit? And what is Vision 2020? In this
                short introductory video, Executive Director Jeanne Alter will
                answer those questions and tell you what to expect from the
                night.
              </p>
              <p>
                Once you're done watching, click the arrows below and explore
                the rest of the webpage to learn about our Honoree, visit our
                virtual bar, and more!
              </p>
            </CarouselSlide>
          </Carousel.Item>
          <Carousel.Item>
            <CarouselSlide
              img={slide2}
              src={"https://www.youtube.com/embed/XysI6L2Y-58"}
            >
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
              <p className="accent">
                Hear Michael talk about his work with KCC{" "}
                <a href="https://youtu.be/ZqSm3rVb2vs" target="blank">
                  here.
                </a>
              </p>
            </CarouselSlide>
          </Carousel.Item>
          <Carousel.Item>
            <CarouselSlide
              img={slide3}
              src={"https://www.youtube.com/embed/dRyqLeZaJUU"}
            >
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
            <CarouselSlide
              img={slide4}
              src={"https://www.youtube.com/embed/qXTYIkLBgXA"}
            >
              <h3>Join Marty at the Bar</h3>
              <p>
                Marty Keating, Michael's friend of 40+ years and a former KCC
                Board Member himself, demonstrates how to mix a classic drink
                for a classic guy: the Irish Old Fashioned.
              </p>
            </CarouselSlide>
          </Carousel.Item>
        </Carousel>
        <ThumbnailContainer index={index} handleSelect={handleSelect} />
      </Container>
    </>
  )
}

export default CarouselContainer
