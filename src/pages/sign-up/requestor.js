import React from "react"

//Components
import Layout from "../../components/layout"
import RequestorText from "../../components/pages/forms/requestor-text"
import ContactInfo from "../../components/pages/forms/contact-info"
import RequestorHealth from "../../components/pages/forms/requestorHealth-text"
import HealthCheck from "../../components/pages/forms/health-check"

const RequestorForm = () => (
  <Layout pageClass="form">
      <RequestorText/>
      <ContactInfo/>
      <RequestorHealth/>
      <HealthCheck/>
  </Layout>
)

export default RequestorForm