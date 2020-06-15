import React from 'react'
import Container from "react-bootstrap/Container"
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed"

const MainVideo = ({ src }) => {
  return (
    <Container className="main-video-container frame">
      <ResponsiveEmbed aspectRatio="16by9">
        <iframe
          src={src}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </ResponsiveEmbed>
    </Container>
  )
}

export default MainVideo
