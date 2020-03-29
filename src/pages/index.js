import React from "react"

//Components
import Layout from "../components/layout"
import Banner from "../components/pages/home/banner"
import HelpCounter from "../components/pages/home/help-counter"
import HowItWorks from "../components/pages/home/how-it-works"
import BeHeroes from "../components/pages/home/be-heroes"
import ParticipatingCities from "../components/pages/home/participating-cities"

const IndexPage = () => (
  <Layout pageClass="home">
    <Banner/>
    <HelpCounter/>
    <HowItWorks/>
    <ParticipatingCities/>
    <BeHeroes/>
  </Layout>
)

export default IndexPage