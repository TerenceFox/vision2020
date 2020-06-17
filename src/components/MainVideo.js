import React from 'react'
import Container from "react-bootstrap/Container"
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed"

const MainVideo = () => {
  return (
    <Container className="main-video-container frame">
      <ResponsiveEmbed aspectRatio="16by9">
        <iframe
          src="https://www.youtube.com/embed/_nm_f0j_ueM"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </ResponsiveEmbed>
    </Container>
  )
}

export default MainVideo
