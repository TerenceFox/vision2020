import React from "react"
import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"

const ThumbnailContainer = ({index, handleSelect}) => {

  const goToSlide =  (num) => {
    handleSelect(num)
  }

  const nextSlide = () => {
    if (index > 3) {
      handleSelect(0)
    } else {
      handleSelect(index+1)
    }
  }

  const prevSlide = () => {
    if (index > 0) {
      handleSelect(index - 1)
    } else {
      handleSelect(4)
    }
  }
  return (
    <Container className="thumbnail-container">
      <Button onClick={prevSlide}> {`<`} </Button>
      <div
        className="thumbnail"
        style={{ background: "purple", height: "100px", width: "100px" }}
        onClick={() => goToSlide(0)}
      >
        <h3>1</h3>
      </div>
      <div
        className="thumbnail"
        style={{ background: "purple", height: "100px", width: "100px" }}
        onClick={() => goToSlide(1)}
      >
        <h3>2</h3>
      </div>
      <div
        className="thumbnail"
        style={{ background: "purple", height: "100px", width: "100px" }}
        onClick={() => goToSlide(2)}
      >
        <h3>3</h3>
      </div>
      <div
        className="thumbnail"
        style={{ background: "purple", height: "100px", width: "100px" }}
        onClick={() => goToSlide(3)}
      >
        <h3>4</h3>
      </div>
      <div
        className="thumbnail"
        style={{ background: "purple", height: "100px", width: "100px" }}
        onClick={() => goToSlide(4)}
      >
        <h3>5</h3>
      </div>
      <Button onClick={nextSlide}> {`>`} </Button>
    </Container>
  )
}

export default ThumbnailContainer
