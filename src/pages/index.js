import React from "react"
import {Helmet} from "react-helmet"

//Components
import Layout from "../components/layout"
import Banner from "../components/pages/home/banner"
import HelpCounter from "../components/pages/home/help-counter"
import HowItWorks from "../components/pages/home/how-it-works"
import BeHeroes from "../components/pages/home/be-heroes"
import ParticipatingCities from "../components/pages/home/participating-cities"

const IndexPage = () => (
  <Layout pageClass="home">
    <Helmet>
      <meta charSet="utf-8" />
      <title>COVID Connector</title>
      <link rel="canonical" href="https://www.covid-connector.com" />
    </Helmet>
    <Banner/>
    <HelpCounter/>
    <HowItWorks/>
    <ParticipatingCities/>
    <BeHeroes/>
  </Layout>
)

export default IndexPage