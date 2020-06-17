import React from 'react'
import Container from "react-bootstrap/Container"
import bnb from "../images/sponsorship-logos/logo-bnb.png"
import ccny from "../images/sponsorship-logos/logo-ccny.jpg"
import century from "../images/sponsorship-logos/logo-century21.png"
import cs from "../images/sponsorship-logos/logo-cs.jpg"
import gfg from "../images/sponsorship-logos/logo-gfg.png"
import hr from "../images/sponsorship-logos/logo-hr.png"
import mta from "../images/sponsorship-logos/logo-mta.png"
import po from "../images/sponsorship-logos/logo-pelloverton.jpg"
import sng from "../images/sponsorship-logos/logo-snb.jpg"
import ib from "../images/sponsorship-logos/logo-ib.gif"
import ppm from "../images/sponsorship-logos/logo-ppm.png"

const SponsorshipLogos = () => {
  return (
    <Container className="container--sponsorships frame">
      <h3>
        Thank you to our sponsors! Click{" "}
        <span className="accent">
          <a
            href="https://drive.google.com/file/d/1dHjVMKxRg8INlWrRgesP4zRtytFw9det/view?usp=sharing"
            target="blank"
          >
            here
          </a>
        </span>{" "}
        to see our digital journal.
      </h3>
      <div className="sponsorships--logo-group">
        <img className="sponsorships--logo-img" src={ccny} />
        <img className="sponsorships--logo-img" id="bnb" src={bnb} />
        <img className="sponsorships--logo-img" id="gfg" src={gfg} />
        <img className="sponsorships--logo-img" src={ppm} />
        <img className="sponsorships--logo-img" src={cs} />
        <img className="sponsorships--logo-img" src={century} />
        <img className="sponsorships--logo-img" src={po} />
        <img className="sponsorships--logo-img" src={sng} />
        <img className="sponsorships--logo-img" src={hr} />
        <img className="sponsorships--logo-img" id="ib" src={ib} />
        <img className="sponsorships--logo-img" id="mta" src={mta} />
      </div>
      <div className="tech-support">
        <h4> Need Technical Assistance?</h4>
        <a href="https://us02web.zoom.us/j/81467308698" target="blank">
          Click here
        </a>{" "}
        to enter our Zoom help room
        <p>
          Or call: <a href="tel:1-973-762-7645">(973)762-7645</a>
        </p>
      </div>
    </Container>
  )
}

export default SponsorshipLogos
