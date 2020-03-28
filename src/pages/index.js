import React from "react"

//Components
import Layout from "../components/layout"
import Banner from "../components/pages/home/banner"
import HelpCounter from "../components/pages/home/help-counter"
import Volunteers from "../components/pages/home/volunteers"
import RequestingHelp from "../components/pages/home/requesting-help"
import ParticipatingCities from "../components/pages/home/participating-cities"

const IndexPage = () => (
  <Layout pageClass="home">
    <Banner/>
    <HelpCounter/>
    <Volunteers/>
    <RequestingHelp/>
    <ParticipatingCities/>
  </Layout>
)

export default IndexPage