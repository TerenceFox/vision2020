import React from 'react'
import Container from "react-bootstrap/Container"

const InstagramFeed = () => {
  return (
    <Container className="container--instagram-feed frame">
      <h3>The KCC Photo League Instagram Gallery</h3>
      <p>
        Keep following <span className="accent">#kccvision2020</span> to see
        what we do throughout the year!
      </p>
      <div id="curator-feed-vision-2020-layout">
        <a
          href="https://curator.io"
          target="_blank"
          className="crt-logo crt-tag"
        >
          Powered by Curator.io
        </a>
      </div>
    </Container>
  )
}

export default InstagramFeed
