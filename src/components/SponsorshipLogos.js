import React from "react"
import Container from "react-bootstrap/Container"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import ib from "../images/sponsorship-logos/logo-ib.gif"


const SponsorshipLogos = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "sponsorship-logos" } }) {
        nodes {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)
  const logos = data.allFile.nodes.map(img =>
    img.childImageSharp ? (
      <div id={`${img.name}`} className="sponsorships--logo-img">
        <Img fluid={img.childImageSharp.fluid} />
      </div>
    ) : (
      <img id={`${img.name}`} src={ib} />
    )
  )
  
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
      <div className="tech-support">
        <p>
          And THANK YOU to Victorio Milian, KCC HR Director, for founding the
          KCC photo league and donating some of his work as part of our
          fundraising efforts. See Victorio's amazing photography{" "}
          <a href="https://www.creativechaosphotography.com/" target="blank">
            here
          </a>
        </p>
      </div>
      <div className="sponsorships--logo-group">
        {logos}
      </div>
    </Container>
  )
}

export default SponsorshipLogos
