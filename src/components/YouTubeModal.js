import React from 'react'
import Modal from "react-bootstrap/Modal"
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed"
import closeButton from "../images/close-button.svg"

const YouTubeModal = ({show, setShow, src }) => {
  return (
    <Modal show={show} size="xl" centered onHide={() => setShow(false)}>
      <img
        src={closeButton}
        className="modal--close-button"
        onClick={() => setShow(false)}
      />
      <ResponsiveEmbed aspectRatio="16by9">
        <iframe
          src={`${src}?autoplay=0&rel=0`}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </ResponsiveEmbed>
    </Modal>
  )
}

export default YouTubeModal
