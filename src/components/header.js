import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Container from "react-bootstrap/Container"


const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const logo = data.file.childImageSharp.fluid
  return (
    <Container className="container--header frame">
      <div className="header--logo">
        <Img fluid={logo} alt="Black and white photo, child running on path" />
      </div>
    </Container>
  )
}

export default Header
