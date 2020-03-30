import React from "react"
import {Helmet} from "react-helmet"

//Components
import Layout from "../components/layout"

export default function Profile() {
  return (
    <Layout pageClass="about-us">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About | COVID Connector</title>
        <link rel="canonical" href="https://www.covid-connector.com" />
      </Helmet>
      <div className="content">
        <p>About Us</p>
      </div>
    </Layout>
  )
}