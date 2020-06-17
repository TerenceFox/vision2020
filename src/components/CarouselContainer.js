import React, { useState } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Container from "react-bootstrap/Container"
import Carousel from "react-bootstrap/Carousel"
import ThumbnailContainer from './ThumbnailContainer'
import CarouselSlide from './CarouselSlide'
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed"
import Modal from "react-bootstrap/Modal"
import closeButton from "../images/close-button.svg"

const CarouselContainer = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "slides" } }) {
        nodes {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  const slides = data.allFile.nodes.map( node => node.childImageSharp.fluid)

  const [index, setIndex] = useState(0)
  const [show, setShow] = useState(false)

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
  }

  return (
    <>
      <ThumbnailContainer
        index={index}
        handleSelect={handleSelect}
        slides={slides}
      />
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
              img={slides[0]}
              src={"https://www.youtube.com/embed/UHDqLPFYEpU"}
            >
              <h3>Welcome to KCC Vision 2020: A Virtual Benefit!</h3>
              <p>
                What is a virtual benefit? And what is Vision 2020? In this
                short introductory video, Executive Director Jeanne Alter will
                answer those questions and tell you what to expect from the
                night.
              </p>
              <p>
                Once you're done watching, click the arrows above and explore
                the rest of the webpage to learn about our Honoree, visit our
                virtual bar, and more!
              </p>
            </CarouselSlide>
          </Carousel.Item>
          <Carousel.Item>
            <CarouselSlide
              img={slides[1]}
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
              <div className="accent">
                Hear Michael talk about his work with KCC{" "}
                <a
                  href="javascript:void(0)"
                  onClick={() => {
                    setShow(true)
                    return false
                  }}
                >
                  here.
                </a>
              </div>
            </CarouselSlide>
          </Carousel.Item>
          <Carousel.Item>
            <CarouselSlide
              img={slides[2]}
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
              img={slides[3]}
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
      </Container>
      <Modal show={show} size="xl" centered onHide={() => setShow(false)}>
        <img
          src={closeButton}
          className="modal--close-button"
          onClick={() => setShow(false)}
        />
        <ResponsiveEmbed aspectRatio="16by9">
          <iframe
            src={"https://www.youtube.com/embed/ZqSm3rVb2vs"}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </ResponsiveEmbed>
      </Modal>
    </>
  )
}

export default CarouselContainer
