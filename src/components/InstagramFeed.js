import React from 'react'
import Container from "react-bootstrap/Container"

const InstagramFeed = () => {
  return (
    <Container className="container--instagram-feed frame">
      <h3>
        Follow us on Instagram and keep following #kccvision2020 to see what we
        do throughout the year!
      </h3>
      <div id="curator-feed-vision-2020-layout">
        <a href="https://curator.io" target="_blank" class="crt-logo crt-tag">
          Powered by Curator.io
        </a>
      </div>
    </Container>
  )
}

export default InstagramFeed
