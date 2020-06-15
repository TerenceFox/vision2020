import React from "react"
import { Helmet } from "react-helmet"
import "./index.scss"
import Header from '../components/Header'
import CarouselContainer from '../components/CarouselContainer'
import MainVideo from '../components/MainVideo'
import DonateCTA from '../components/DonateCTA'
import InstagramFeed from '../components/InstagramFeed'
import SponsorshipLogos from '../components/SponsorshipLogos'

const IndexPage = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>KCC Vision 2020 Virtual Benefit</title>
      <link rel="canonical" href="http://kenchild.org/vision2020" />
    </Helmet>
    <Header />
    <CarouselContainer />
    <MainVideo src={"https://www.youtube.com/embed/7QYjVERkEfg"} />
    <DonateCTA />
    <InstagramFeed />
    <SponsorshipLogos />
  </>
)

export default IndexPage
