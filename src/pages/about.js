import React from "react"
import {Helmet} from "react-helmet"

//Components
import Layout from "../components/layout"
import Banner from "../components/pages/about/banner"
import GreenBar from "../components/shared/green-bar"
import ComunityCounter from "../components/shared/help-counter"
import OurPurpose from "../components/pages/about/our-purpose"
import QuoteBar from "../components/shared/quote-bar"

export default function Profile() {
  let community_counts = [
    {
      count: 232,
      caption: "Communities"
    },
    {
      count: 12321,
      caption: "Members"
    },
    {
      count: 10394,
      caption: "Volunteers"
    },
  ]
  
  return (
    <Layout pageClass="about-us">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About | COVID Connector</title>
        <link rel="canonical" href="https://www.covid-connector.com" />
      </Helmet>
      <Banner/>
      <GreenBar>
        <ComunityCounter counts={community_counts}/>
      </GreenBar>
      <OurPurpose/>
      <GreenBar>
        <QuoteBar/>
      </GreenBar>
    </Layout>
  )
}