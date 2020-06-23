import React, {useState} from 'react'
import Container from "react-bootstrap/Container"
import YouTubeModal from './YouTubeModal'

const ThankYou = () => {
  const [show, setShow] = useState(false)
  return (
    <>
      <Container className="container--thank-you frame">
        <div className="thank-you--text">
          <h3>Thank you for joining us! </h3>
          <p>
            Thank you for attending Vision 2020 on June 17, 2020 to honor KCC
            Board Chair Michael O'Conor and celebrate the work of KCC's
            incredible staff members!
          </p>
          <p>
            Kennedy Children's Center Board Chair Michael O'Conor sat for a
            conversation with CK Swett of Lot 1 Auctioneers to talk about
            Michael's 20-year involvement with KCC. Over 100 of Michael's
            friends, family members, and colleagues tuned in to listen and to
            toast the Honoree!
          </p>
          <p className="accent">
            Click{" "}
            <a
              href="javascript:void(0)"
              onClick={() => {
                setShow(true)
                return false
              }}
            >
              here
            </a>{" "}
            to watch the Zoom recording
          </p>
        </div>
      </Container>
      <YouTubeModal
        show={show}
        setShow={setShow}
        src={"https://www.youtube.com/embed/gv4zImL9-vQ"}
      />
    </>
  )
}

export default ThankYou
