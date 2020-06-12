import React from "react"
import { Helmet } from "react-helmet"
import TopBanner from '../components/TopBanner'
import "./index.scss"
import Header from '../components/Header'

const IndexPage = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>KCC Vision 2020 Virtual Benefit</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
    <TopBanner content={"The event hasn't started yet."}/>
    <Header />
  </>
)

export default IndexPage
