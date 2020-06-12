import React from "react"
import { Helmet } from "react-helmet"
import "./index.scss"
import Header from '../components/Header'
import CarouselContainer from '../components/CarouselContainer'

const IndexPage = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>KCC Vision 2020 Virtual Benefit</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <Header />
    <CarouselContainer />
  </>
)

export default IndexPage
